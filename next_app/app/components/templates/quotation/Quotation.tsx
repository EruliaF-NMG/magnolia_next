import { EditableArea } from '@magnolia/react-editor';

export interface QuotationProps {
    childElement: object|null,
}

const Quotation = ({
    childElement=null
}:QuotationProps): JSX.Element => {
    return(
        <div className="quote">
            <div className="content">
                    {childElement && <EditableArea content={childElement} className="" />}
            </div>
        </div>
    );
}

export {
    Quotation
}