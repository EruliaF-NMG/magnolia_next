'use client'
import { ChangeEvent, useEffect, useState } from "react"
import { SelectBox,SelectBoxProps } from "./SelectBox";
import { useDispatch, useSelector } from "react-redux"
import { onInputChange } from "../../../../global-state/slice/formSlices";
import { _get } from "../../../../lib/util/lodash.wrappers";
import { request } from "../../../../lib/http/passRequest";

export interface SelectBoxWithFetchProps extends SelectBoxProps {
    apiURL: string,
}

const SelectBoxWithFetch = ({
    elementID="",
    labelText="",
    name="",
    value="",
    placeholder="",
    errorMessage="",
    displayKey="",
    valueKey="",
    apiURL="",
    inputBoxWrapperClassName="",
    labelWrapperClassName="",
    inputWrapperClassName="",
    erroWrapperClassName="",
    onChangeEvent=(name,value,event)=>{},
    onClickEvent=()=>{}
}:SelectBoxWithFetchProps): JSX.Element => {

    const [items,setItem] = useState([]);

    useEffect(()=>{
        request(apiURL).then((data:any)=>{
            setItem(data);
        }).catch((error)=>{
            setItem([]);
        });
    },[])


    return(
        <SelectBox
            elementID={elementID}
            labelText={labelText}
            name={name}
            value={value}
            placeholder={placeholder}
            errorMessage={errorMessage}
            displayKey={displayKey}
            valueKey={valueKey}
            items={items}
            inputBoxWrapperClassName={inputBoxWrapperClassName}
            labelWrapperClassName={labelWrapperClassName}
            inputWrapperClassName={inputWrapperClassName}
            erroWrapperClassName={erroWrapperClassName}
            onChangeEvent={(name,value,event)=>onChangeEvent(name,value,event)}
            onClickEvent={()=>onClickEvent()}
        />
    )
}

export interface SelectBoxWithStateProps extends SelectBoxWithFetchProps {
    defaultValue?: string,
    formGroupKey: string,
}

const SelectBoxWithState = ({
    elementID="",
    labelText="",
    name="",
    placeholder="",
    displayKey="",
    valueKey="",
    defaultValue="",
    formGroupKey="",
    apiURL="",
    inputBoxWrapperClassName="",
    labelWrapperClassName="",
    inputWrapperClassName="",
    erroWrapperClassName="",
    onChangeEvent=(name,value,event)=>{},
    onClickEvent=()=>{}
}:SelectBoxWithStateProps): JSX.Element => {
    const formObject = useSelector((state:any) => state.form);
    const dispatch = useDispatch();

    const getErrorMessage = () => {
        const errorObject = _get(formObject,`${formGroupKey}._errors`,[]).find((item:any) => item.property === name)||{};
        return errorObject.message || "";
    }

    return(
        <SelectBoxWithFetch
            elementID={elementID}
            labelText={labelText}
            name={name}
            value={_get(formObject,`${formGroupKey}.${name}`,defaultValue)}
            placeholder={placeholder}
            errorMessage={getErrorMessage()}
            displayKey={displayKey}
            valueKey={valueKey}
            apiURL={apiURL}
            inputBoxWrapperClassName={inputBoxWrapperClassName}
            labelWrapperClassName={labelWrapperClassName}
            inputWrapperClassName={inputWrapperClassName}
            erroWrapperClassName={erroWrapperClassName}
            onChangeEvent={(name,value,event)=>{
                dispatch(onInputChange({
                    formGroupKey: formGroupKey,
                    inputValue: value,
                    inputName: name
                }));
                onChangeEvent(name,value,event);
            }}
            onClickEvent={()=>onClickEvent()}
        />
    )
}

export {
    SelectBoxWithFetch,
    SelectBoxWithState
}


