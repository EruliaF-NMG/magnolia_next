import { _get } from "@/lib/util/lodash.wrappers"
import Img from 'next/image';
 

export interface MagnoliaImage {
    '@id': string,
    '@link': string,
    '@name': string,
    '@path': string,
    '@type': string,
    '@uuid': string,
}

export interface ImageProps {
    styleClass?: string,
    image?: MagnoliaImage|null,
    altText?: string,
}



const Image=({
    styleClass="",
    image={'@link':""} as MagnoliaImage,
    altText="image",
}:ImageProps): JSX.Element=>{
    console.log("image=",image);
    return(
        <img 
            className={`Image ${styleClass}`} 
            src={process.env.REACT_APP_MGNL_DAM_RAW + _get(image,'@link','')} 
            alt={altText} 
            //fill={true}
        />
    )
}

export interface BackgroundImageProps {
    styleClass?: string,
    image?: MagnoliaImage|null,
}

const BackgroundImage=({
    styleClass="",
    image={'@link':""} as MagnoliaImage,
}:BackgroundImageProps): JSX.Element=>{
    return(
        <div 
            className={`image-ratio BackgroundImage ${styleClass}`} 
            style={{backgroundImage:`url(${process.env.REACT_APP_MGNL_DAM_RAW+_get(image,'@link','')})`}}>

        </div>
    )
}


export {
    Image,
    BackgroundImage
}