'use client'
import { submitData } from "../../../../global-state/slice/formSlices";
import { _get } from "../../../../lib/util/lodash.wrappers";
import { useDispatch, useSelector } from "react-redux";
import { Image,MagnoliaImage } from '../../common/Image';

export interface ButtonProps {
    styleClass?:string,
    image?:MagnoliaImage,
    isUnderLine?:boolean,
    name?:string,
    onClick?:()=>void
}

const Button = ({
    styleClass="",
    image={'@link':""} as MagnoliaImage,
    isUnderLine=false,
    name="",
    onClick=()=>{}
}:ButtonProps): JSX.Element=>{
    return (
        <button type='button' className={styleClass} onClick={()=>onClick()}>
            {
                image['@link'] && (
                  <div className="union-wrapper">
                    <Image styleClass='img' image={image} altText={'button-img'} />
                  </div>
                )
            }
            {
                (isUnderLine)? (
                    <div className="label-container">
                        <div className="text-wrapper">{name}</div>
                        <div className="link-underline"></div>
                    </div>
                ):(
                    <div className="action">{name}</div>
                )
            }
        </button>
    )
}

export interface ButtonWithStateProps {
  styleClass?:string,
  image?:MagnoliaImage,
  isUnderLine?:boolean,
  name?:string,
  formGroupKey?:string,
  apiUrl?:string,
  apiMethod?:string,
  validationSchema?:object,
  onClickEvent?:(error:any,result:any)=>void,
  onOverrideFormObject?:(formObject:any)=>any
}

const ButtonWithState = ({
  styleClass="",
  image={'@link':""} as MagnoliaImage,
  isUnderLine=false,
  name="",
  formGroupKey="",
  apiUrl="",
  apiMethod="POST",
  validationSchema={},
  onClickEvent=(error,result)=>{},
  onOverrideFormObject=(formObject)=>{undefined}
}:ButtonWithStateProps): JSX.Element => {

  const formObject = useSelector((state:any) => state.form);
  const dispatch = useDispatch();
  const onBtnClick = ():void => {
    const object = onOverrideFormObject(_get(formObject,`${formGroupKey}`,{})) ?? _get(formObject,`${formGroupKey}`,{});
    dispatch(submitData({
      apiURL:apiUrl,
      apiMethod:apiMethod,
      formGroupKey:formGroupKey,
      body:{...object},
      validationSchema: validationSchema,
      cb:(error,result)=>onClickEvent(error,result)
    }));
  };

    return(
      <Button
        styleClass={styleClass}
        image={image}
        isUnderLine={isUnderLine}
        name={name}
        onClick={()=>onBtnClick()}
      />
    )
}


export {
  Button,
  ButtonWithState
}