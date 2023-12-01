import {EditorContextHelper} from "@magnolia/template-annotations"; // Must import react-editor instead. but due to React.createContext have to remove out of server component when importing

export const nodeName:string = process.env.NEXT_APP_MGNL_SITE_PATH||"";
export const pagesApi:string = process.env.NEXT_APP_MGNL_API_PAGES||"";
export const templateAnnotationsApi:string = process.env.NEXT_APP_MGNL_API_TEMPLATES||"";
export const pagenavApi:string = process.env.NEXT_APP_MGNL_API_NAV||"";
export const languages:string[] = process.env.NEXT_PUBLIC_MGNL_LANGUAGES!.split(" ")||[];

export async function getProps(resolvedUrl:any) {
  const magnoliaContext = EditorContextHelper.getMagnoliaContext(
    resolvedUrl,
    nodeName,
    languages
  );
  //
  let props:any = {
    nodeName,
    magnoliaContext,
  };
  // Fetching page content
  let pageUrl:string = pagesApi + magnoliaContext.nodePath + magnoliaContext.search;
  console.log("pageurl=", pageUrl);
  const pagesRes = await fetch(pageUrl, { cache: "no-store" });
  props.page = await pagesRes.json();
  // Fetching page navigation
  const pagenavRes = await fetch(pagenavApi + nodeName);
  props.pagenav = await pagenavRes.json();
  // Fetch template annotations only inside Magnolia WYSIWYG
  if (magnoliaContext.isMagnolia) {
    const templateAnnotationsRes = await fetch(
      templateAnnotationsApi + magnoliaContext.nodePath
    );
    props.templateAnnotations = await templateAnnotationsRes.json();
  }

  global.mgnlInPageEditor = magnoliaContext.isMagnoliaEdit;

  return {
    props,
  };
}