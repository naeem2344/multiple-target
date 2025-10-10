import React, { useEffect } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import '../style.css';

const Home = () => {
  useEffect(() => {
     return () => {
      const sceneEl = document.querySelector("a-scene");
      if (sceneEl && sceneEl.systems && sceneEl.systems["mindar-image"]) {
        try {
          sceneEl.systems["mindar-image"].stop();
          sceneEl.systems["mindar-image"].renderer?.dispose?.();
        } catch (err) {
          console.warn("MindAR cleanup warning:", err);
        }
      }
      sceneEl?.parentNode?.removeChild(sceneEl);
    }
  },[])
  return (
    <div className='target__image__container'>
      <div className='target__image__sub__container'>
        <img src='/assets/target-image.jpg' height={400} width={600} alt='multiple-target-image' />
        <QRCodeSVG value={'https://multiple-target-pnur.vercel.app/landing'} size={200} />
      </div>
    </div>
  )
}

export default Home