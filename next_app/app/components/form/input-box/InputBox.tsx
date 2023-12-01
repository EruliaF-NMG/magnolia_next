'use client'
import { InputElemnetWrapper } from "../wrappers/InputElemnetWrapper"
import { useDispatch, useSelector } from "react-redux"
import { _get } from "../../../../lib/util/lodash.wrappers";
import { onInputChange } from "../../../../global-state/slice/formSlices";
import exp from "constants";

export interface InputBoxProps {
    elementID: string,
    labelText: string,
    inputType: 'text'|'password',
    name: string,
    value: string,
    placeholder?: string,
    errorMessage?: string,
    inputBoxWrapperClassName?: string,
    labelWrapperClassName?: string,
    inputWrapperClassName?: string,
    erroWrapperClassName?: string,
    onChangeEvent?: (name:string,value:string,event:any)=>void,
    onClickEvent?: ()=>void
}

const InputBox = ({
    elementID="",
    labelText="",
    inputType="text",
    name="",
    value="",
    placeholder="",
    errorMessage="",
    inputBoxWrapperClassName="",
    labelWrapperClassName="",
    inputWrapperClassName="",
    erroWrapperClassName="",
    onChangeEvent=(name,value,event)=>{},
    onClickEvent=()=>{}
}:InputBoxProps): JSX.Element => {
    return(
        <InputElemnetWrapper
            elementID={elementID}
            labelText={labelText}
            errorMessage={errorMessage}
            inputBoxWrapperClassName={inputBoxWrapperClassName}
            labelWrapperClassName={labelWrapperClassName}
            erroWrapperClassName={erroWrapperClassName}
        >
            <input 
                type={inputType}
                id={elementID}
                className={`input ${inputWrapperClassName}`} 
                placeholder={placeholder}
                value={value}
                name={name}
                onChange={(event)=>onChangeEvent(name,event.target.value,event)}
                onClick={()=>onClickEvent()}
            />
        </InputElemnetWrapper>
    )
}

export interface InputBoxWithStateProps extends InputBoxProps {
    formGroupKey: string,
    defaultValue?: string,
}


const InputBoxWithState = ({
    elementID="",
    labelText="",
    inputType="text",
    name="",
    defaultValue="",
    formGroupKey="",
    placeholder="",
    inputBoxWrapperClassName="",
    labelWrapperClassName="",
    inputWrapperClassName="",
    erroWrapperClassName="",
    onChangeEvent=(name,value,event)=>{},
    onClickEvent=()=>{}
}:InputBoxWithStateProps): JSX.Element => {

    const formObject = useSelector((state:any) => state.form);
    const dispatch = useDispatch()

    const getErrorMessage = () => {
        const errorObject = _get(formObject,`${formGroupKey}._errors`,[]).find((item:any) => item.property === name)||{};
        return errorObject.message || "";
    }

    return(
        <InputBox
            elementID={elementID}
            labelText={labelText}
            inputType={inputType}
            name={name}
            value={_get(formObject,`${formGroupKey}.${name}`,defaultValue)}
            placeholder={placeholder}
            errorMessage={getErrorMessage()}
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
            onClickEvent={onClickEvent}
        />
    );
}

export {
    InputBoxWithState,
    InputBox
}