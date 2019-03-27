import React from 'react'
import CenteredGridA from './Grid'

export const Ramka=(props)=>{
    return(
        <div>  
            <CenteredGridA ImgStatus={props.ImgStatus} 
                           VideoStatus={props.VideoStatus} 
                           mediaType={props.mediaType} 
                           changePrevious={props.changePrevious} 
                           changeNext={props.changeNext} 
                           VideoSource={props.VideoSource}
                           source={props.source} />
        </div>
    )
}
