//"use client"
import { draftMode } from 'next/headers'
import MagnoliaPageWrapper from "../components/core/magnolia/MagnoliaPageWrapper";
import { getProps, languages, nodeName, pagenavApi } from "../../lib/util/magnolia.helper";

export async function getUrlProps(params:any) {
  const { isEnabled } = draftMode();

  let resolvedUrl = nodeName;
  if (params.searchParams && params.searchParams.slug) {
    let searchParams = params.searchParams;
    resolvedUrl = searchParams.slug ? searchParams.slug : nodeName;
    if (searchParams.mgnlPreview === "false") {
      resolvedUrl = resolvedUrl + "?mgnlPreview=false";
    }
  } else {
    if (params.params) {
      resolvedUrl = params.params.pathname
        ? "/" + params.params.pathname.join("/")
        : "";
    }
  }
  
  return await getProps(resolvedUrl);
}

export async function generateStaticParams() {

  const navRes = await fetch(pagenavApi + nodeName);
  const nav = await navRes.json();
  const paths:any = [];
  getStaticPath(nav, paths);

  return paths;
}

function getStaticPath(node:any, paths:any) {


  let pathname = node["@path"].replace(nodeName, "");

  pathname = pathname.split("/");

  pathname.shift();

  languages.forEach((language, i) => {
    let i18nPathname = JSON.parse(JSON.stringify(pathname));

    if (i !== 0) i18nPathname.unshift(language);

    paths.push({ pathname: i18nPathname });
  });

  node["@nodes"].forEach((nodeName:any) => getStaticPath(node[nodeName], paths));
}

export default async function Pathname(params:any) {
  
  let urlProps = await getUrlProps(params);
  console.log("urlProps=", urlProps.props);
  return <MagnoliaPageWrapper props={urlProps.props} />;
}