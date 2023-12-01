'use client'
import { useEffect } from 'react';
import {Image,MagnoliaImage} from './Image';
import { EditableArea } from '@magnolia/react-editor';
import { useState } from 'react';
//import { getAPIBase,languages,events } from '../../../lib/util/magnolia.helper';
import {_get} from '../../../lib/util/lodash.wrappers';
import { EditorContextHelper } from '@magnolia/react-editor';


export interface TopBarProps{
    imageComponent?: object|null,
    paraComponent?: object|null,
}

const TopBar = ({
    imageComponent=null,
    paraComponent=null,
}:TopBarProps): JSX.Element => {
    return (
        <>
          {/* <div className="union-wrapper"> */}
            {/* <img className="union" src="img/union-15.svg" alt='f' /> */}
            {imageComponent && <EditableArea content={imageComponent} className="union-icon-wrapper" />}
          {/* </div> */}
            {/* <p className="info-message">Affected by air traffic control failures? See how we can help</p> */}
            {paraComponent && <EditableArea content={paraComponent}  className="info-message" />}
        </>
    )
}

export interface HeaderInfoTileProps{
    title?: string,
    number?: string,
    linkText?: string,
    linkImageAltText?: string,
    image?: MagnoliaImage,
}

const HeaderInfoTile=({
  title="",
  number="",
  linkText="",
  linkImageAltText="img",
  image={'@link':""} as MagnoliaImage,
}:HeaderInfoTileProps): JSX.Element=>{
  return (
    <>
      <div className="div">
        <div className="text-wrapper">{title}</div>
        <div className="text-wrapper-2">{number}</div>
        <button className="button info-header-btn">
          <div className="union-wrapper">
          <Image styleClass='img' image={image} altText={linkImageAltText} />
          </div>
          <div className="label-container">
            <div className="text-wrapper-3">{linkText}</div>
            <div className="link-underline"></div>
          </div>
        </button>
      </div>
      <div className="divider"><div className="divider-2"></div></div>
    </>
  )

}

export interface HeaderInfoBarProps{
    imageComponent?: object|null,
    infoTileComponentList?: object|null,
    linkHeadingComponent?: object|null,
    linkBtnComponentList?: object|null,
}

const HeaderInfoBar=({
  imageComponent=null,
  infoTileComponentList=null,
  linkHeadingComponent=null,
  linkBtnComponentList=null,
}:HeaderInfoBarProps): JSX.Element=>{
  return (
    <>
        {imageComponent && <EditableArea content={imageComponent} className="logo" />}
        <div className="info-container">
          {infoTileComponentList && <EditableArea content={infoTileComponentList} className="number-group" />}
          <div className="CT-as">
              { linkHeadingComponent && <EditableArea content={linkHeadingComponent} className="text-wrapper" /> } 
              { linkBtnComponentList && <EditableArea content={linkBtnComponentList} className="button-wrapper" /> }  
          </div>
        </div>
    </>
  )
}

const Navigation = (): JSX.Element => {
  const [getMenu, setMenu] = useState({});   
//   const context =  EditorContextHelper.getMagnoliaContext(window.location.href, process.env.REACT_APP_MGNL_APP_BASE, getLanguages());
//   let currentLanguage = context.currentLanguage;
//   const BASENAME = currentLanguage === getLanguages()[0] ? "" : "/" + currentLanguage;
  

//   const getData=async ()=>{
//     const pageNavRes = await fetch(getAPIBase() + process.env.REACT_APP_MGNL_API_NAV + process.env.REACT_APP_MGNL_APP_BASE);
//     const data = await pageNavRes.json();
//     setMenu(data);
//   }

//   useEffect(()=>{
//     getData();
//   },[]);


//   const handleClick = (url) => {
//     window.history.pushState({}, '', url);
//     events.emit('popstate');
//   }

  return(
    <div className="menu">
        {/* <div 
          key='12334'
          className="menu-item-button" 
          onClick={()=>handleClick(BASENAME + '/')}
        >
          <div className="category">
            Home
          </div>
        </div>
        {
          _get(getMenu, '@nodes', []).map((item, index)=>{
            return(
              <div 
                key={_get(getMenu,`${item}.@id`)} 
                className="menu-item-button" 
                onClick={()=>handleClick(BASENAME + _get(getMenu,`${item}.@path`))}>
                <div className="category">
                  {_get(getMenu,`${item}.@name`)}
                </div>
              </div>
            )
          })
        } */}
    </div>
  )
}

export interface HeaderProps{
    topBarComponent?: object|null,
    infoBarComponent?: object|null,
}

const Header = ({
    topBarComponent=null,
    infoBarComponent=null
}:HeaderProps):JSX.Element  => {
    return (
        <>
          {topBarComponent && <EditableArea content={topBarComponent} className="information-banner" />}
          {infoBarComponent && <EditableArea content={infoBarComponent} className="info" />}

          <div className="divider-wrapper"><div className="divider-3"></div></div>

          {/* <Navigation/> */}
      </>
    )
}

export {
    TopBar,
    Header,
    HeaderInfoTile,
    HeaderInfoBar
}