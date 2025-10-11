import React from 'react'

const TargetLessVideo = () => {

    return (
        <div>
            <video width="640" height="360" controls>
                <source src="/assets/videos/atal-bihari-vajpayee.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default TargetLessVideo