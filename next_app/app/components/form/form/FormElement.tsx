'use client'
import { initFormGroup, mergeFormObject, removeFormGroup, setPageLoad } from "../../../../global-state/slice/formSlices";
import { _get } from "../../../../lib/util/lodash.wrappers";
import { request } from "../../../../lib/http/passRequest";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { EditableArea } from '@magnolia/react-editor';
import exp from "constants";

export interface FormElementProps{
    formWrapperClassName?:string,
    formGroupKey?:string,
    setFormObject?:any,
    children?:any,
    apiURL?:string,
    overrideFormObject?:(formObject:any)=>any,
}


const FormElement=({
    formWrapperClassName="",
    formGroupKey="",
    setFormObject={},
    children=null,
    apiURL="",
    overrideFormObject=(formObject)=>{undefined}
}:FormElementProps): JSX.Element =>{

    const formObject = useSelector((state:any) => state.form);
    const dispatch = useDispatch()

    console.log("FormElement: formObject: ",formObject)

    const fetchDataANDSetFormObject = async () => {
        dispatch(setPageLoad({
            status:true,
            formGroupKey,
        }));
        const result = await request(apiURL);
        const formData = overrideFormObject(result);

        dispatch(mergeFormObject({
            formObject:formData,
            formGroupKey,
        }));

        dispatch(setPageLoad({
            status:false,
            formGroupKey,
        }));
    }
    
    useEffect(() => { 
        if(apiURL!==""){
            dispatch(initFormGroup({
                formObject:{},
                formGroupKey,
            }));
            fetchDataANDSetFormObject();
        } else {
            dispatch(initFormGroup({
                formObject:setFormObject,
                formGroupKey,
            }));
        }

        return () => {
            dispatch(removeFormGroup(formGroupKey));
        }
    },[]);

    return(
        <>
            {
                _get(formObject,`${formGroupKey}._onLoad`,false)===false?(
                    <form className={`forms ${formWrapperClassName}`}>
                         {children}
                    </form>
                ):(
                    <div>
                        <center>
                            Loding....
                        </center>
                    </div>
                )
            }
        </>
    );
}

export interface EditableFormElementProps{
    formWrapperClassName?:string,
    formGroupKey?:string,
    setFormObject?:any,
    childElement?:any,
    apiURL?:string,
    overrideFormObject?:(formObject:any)=>any,
}

const EditableFormElement=({
    formWrapperClassName="",
    formGroupKey="",
    setFormObject={},
    apiURL="",
    overrideFormObject=(formObject:any)=>{undefined},
    childElement=null,
}:EditableFormElementProps): JSX.Element=>{
    return(
        <FormElement
            formWrapperClassName={formWrapperClassName}
            formGroupKey={formGroupKey}
            setFormObject={{}}
            apiURL={apiURL}
            overrideFormObject={(object:any)=>overrideFormObject(object)}
        >
            {childElement && <EditableArea content={childElement} className="forms" />}
        </FormElement>
    )
}

export {
    FormElement,
    EditableFormElement,
}