
import { EditableArea } from '@magnolia/react-editor';

export interface IntroSliderProps {
    inforBannerSubHeading: object|null,
    inforBannerMainHeading: object|null,
    linkButton: object|null,
    backgroundImg: object|null,
}

const IntroSlider = ({
    inforBannerSubHeading=null,
    inforBannerMainHeading=null,
    linkButton=null,
    backgroundImg=null,
}:IntroSliderProps): JSX.Element =>{
    return(
        <>
            <div className="slot-container" data-semantic-colours-mode="inverse">
                <div className="hero">
                    {inforBannerSubHeading && <EditableArea content={inforBannerSubHeading} className="information-banner-2" />}
                    {backgroundImg && <EditableArea content={backgroundImg} className={"fullWidth"} />}
                    <div className="text-container">
                        <div className="content">
                            {inforBannerMainHeading && <EditableArea content={inforBannerMainHeading} className="text-container-2" />}
                            {linkButton && <EditableArea content={linkButton} className="button-container" />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export {
    IntroSlider
}