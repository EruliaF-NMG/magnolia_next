
export interface HeadlineProps{
    text?: string,
    styleClass?: string,
}

const Headline = ({
    text="",
    styleClass="",
}:HeadlineProps): JSX.Element => 

<h2 className={`Headline ${styleClass}`}>{text}</h2>;

export { 
    Headline
};
