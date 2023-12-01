

export interface InputElemnetWrapperProps{
    elementID?: string,
    labelText?: string,
    errorMessage?: string,
    inputBoxWrapperClassName?: string,
    labelWrapperClassName?: string,
    erroWrapperClassName?: string,
    children?: JSX.Element | JSX.Element[] | string | null,
}

const InputElemnetWrapper = ({
    elementID="",
    labelText="",
    errorMessage="",
    inputBoxWrapperClassName="",
    labelWrapperClassName="",
    erroWrapperClassName="",
    children=null,
}:InputElemnetWrapperProps): JSX.Element => {
    return(
        <div className={`text-field ${inputBoxWrapperClassName}`}>
            <label 
                htmlFor={elementID} 
                className={`label ${labelWrapperClassName}`}
            >
                {labelText}
            </label>
            { children }
            <p className={`errorText ${erroWrapperClassName}`}>
                {errorMessage}
            </p>
        </div>
    )
}

export {
    InputElemnetWrapper
}