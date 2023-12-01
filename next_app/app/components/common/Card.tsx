import { EditableArea } from '@magnolia/react-editor';

export interface CardProps{
    styleClass?: string,
    children?: any,
    title?: string,
}
const Card = ({ 
    styleClass="",
    children=null,
    title="",
}:CardProps): JSX.Element => {
    return (
        <div className={`section ${styleClass}`}>
          <div className="section-header" data-semantic-colours-mode="inverse">
            <div className="text-wrapper-5">{title}</div>
          </div>
          <div className="section-content">
            { children }
          </div>
        </div>
    )
}

export interface EditableCardProps extends CardProps{
    childElement?: any,
}

const EditableCard = ({ 
    styleClass="",
    title="",
    childElement=null,
}:EditableCardProps): JSX.Element => {
    return (
        <Card
            styleClass={styleClass}
            title={title}
        >
         {childElement && <EditableArea content={childElement} className="fullWidth" />}
        </Card>
    )
}

export {
    Card,
    EditableCard
}