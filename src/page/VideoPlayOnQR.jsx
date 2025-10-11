import React from 'react'
import { QRCodeSVG } from 'qrcode.react'
import '../style.css'

const VideoPlayOnQR = () => {
    return (
        <div className='qrcode__container'>
            <h2>Scan to play Video</h2>
            <QRCodeSVG value={"https://multiple-target.vercel.app/single-video"} size={150} />
        </div>
    )
}

export default VideoPlayOnQR