import React from 'react'

const TargetLessVideo = () => {
    return (
        <div className="video__wrapper">
            <video 
                className="responsive__video" 
                controls 
                poster="/assets/thumbnails/atal-bihari-vajpayee.jpg"
            >
                <source src="/assets/videos/dr-manmohan-singh.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default TargetLessVideo