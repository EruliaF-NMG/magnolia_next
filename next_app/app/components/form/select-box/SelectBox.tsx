'use client'
import { InputElemnetWrapper } from "../wrappers/InputElemnetWrapper"
import { LoopItems } from '../../common/LoopItems';
import exp from "constants";

export interface SelectBoxProps {
    elementID: string,
    labelText: string,
    name: string,
    value: string,
    placeholder?: string,
    errorMessage?: string,
    items?: any[],
    displayKey: string,
    valueKey: string,
    inputBoxWrapperClassName?: string,
    labelWrapperClassName?: string,
    inputWrapperClassName?: string,
    erroWrapperClassName?: string,
    onChangeEvent?: (name:string,value:string,event:any)=>void,
    onClickEvent?: ()=>void
}

const SelectBox=({
    elementID="",
    labelText="",
    name="",
    value="",
    placeholder="",
    errorMessage="",
    items=[],
    displayKey="",
    valueKey="",
    inputBoxWrapperClassName="",
    labelWrapperClassName="",
    inputWrapperClassName="",
    erroWrapperClassName="",
    onChangeEvent=(name,value,event)=>{},
    onClickEvent=()=>{}
}:SelectBoxProps): JSX.Element => {
    return(
        <InputElemnetWrapper
            elementID={elementID}
            labelText={labelText}
            errorMessage={errorMessage}
            inputBoxWrapperClassName={inputBoxWrapperClassName}
            labelWrapperClassName={labelWrapperClassName}
            erroWrapperClassName={erroWrapperClassName}
        >
            <select 
                className={` ${inputWrapperClassName}`} 
                value={value} 
                onChange={(event)=>onChangeEvent(name,event.target.value,event)}
                onClick={()=>onClickEvent()}
            >
            { (placeholder) && (<option key={0} value="">{placeholder}</option>) }
            <LoopItems
                items={items}
                renderElemnt={(item,index)=> {
                    return(
                        <option key={index} value={item[valueKey]}>{item[displayKey]}</option>
                    )
                
                }}
            />
            </select>
        </InputElemnetWrapper>
    )
}

export {
    SelectBox
}