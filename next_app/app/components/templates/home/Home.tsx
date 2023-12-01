import { EditableArea } from '@magnolia/react-editor';

export interface HomeProps {
    introSlider: object|null,
    infoTopContent: object|null,
    infoArticles: object|null
}

const Home = ({
  introSlider=null,
  infoTopContent=null,
  infoArticles=null
}:HomeProps): JSX.Element => {
    return(
        <>
            {introSlider && <EditableArea content={introSlider} className="ghost-section" />}
            {infoTopContent && <EditableArea content={infoTopContent} className="accolades" />}
            <div className="slot-container-wrapper">
                <div className="slot-container-2">
                    {infoArticles && <EditableArea content={infoArticles} className="card-row" />}
                </div>
            </div>
        </>
    )
}

export {
    Home
}