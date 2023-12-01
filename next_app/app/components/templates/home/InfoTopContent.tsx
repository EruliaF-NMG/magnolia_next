import { EditableArea } from '@magnolia/react-editor';

export interface InfoTopContentProps {
    infoContent: object|null,
    imageList: object|null,
}

const InfoTopContent=({
    infoContent=null,
    imageList=null,
}:InfoTopContentProps): JSX.Element=>{
    return(
        <>
            {infoContent && <EditableArea content={infoContent} className="info-container-2" />}
            <div className="accolades-container">
                {imageList && <EditableArea content={imageList} className="mini" />}
            </div>
        </>
    );
}

export {
    InfoTopContent
}