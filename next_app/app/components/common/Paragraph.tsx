
export interface ParagraphProps {  
    styleClass?: string,
    text?: string,
}

const Paragraph = ({
    styleClass="",
    text="",
}:ParagraphProps): JSX.Element => {
   return (
    <p className={`paragraph ${styleClass}`}>{text}</p>
   )
}

export {
    Paragraph,
}