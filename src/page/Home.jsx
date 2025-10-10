import React from 'react'
import { QRCodeSVG } from 'qrcode.react'
import '../style.css';

const Home = () => {
  return (
    <div className='target__image__container'>
      <div className='target__image__sub__container'>
        <img src='/assets/target-image.jpg' height={400} width={600} alt='multiple-target-image' />
        <QRCodeSVG value={'https://multiple-target.vercel.app/'} size={200} />
      </div>
    </div>
  )
}

export default Home