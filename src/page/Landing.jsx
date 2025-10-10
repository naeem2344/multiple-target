import React, { useEffect, useState } from 'react'
import '../style.css'
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const [content, setContent] = useState([
    {
      banner: '/assets/categroies/Narendra-modi.webp',
      video: '/assets/videos/narendra-modi.mp4',
      name: "Narendra modi"
    },
    {
      banner: '/assets/categroies/dr-manmohan-singh.jpg',
      video: '/assets/videos/dr-manmohan-singh.mp4',
      name: 'dr Manmohan singh'
    },
    {
      banner: '/assets/categroies/atal-bihari.jpg',
      video: '/assets/videos/atal-bihari-vajpayee.mp4',
      name: 'Atal Bihari Vajpayee'
    },
    {
      banner: '/assets/categroies/rajiv_gandhi.avif',
      video: '/assets/videos/rajiv-gandhi.mp4',
      name: 'Rajiv gandhi'
    },
  ]);
  const navigate = useNavigate();

  const handleClick = url => {
    const id = content.findIndex(item => item.video === url)
    navigate(`/show-content/${id}`)
  }

  useEffect(() => {
    const overlays = document.getElementsByClassName('mindar-ui-overlay');
    if (overlays && overlays.length > 0) {
      Array.from(overlays).forEach(el => el.remove());
    }

    return () =>{
       const sceneEl = document.querySelector("a-scene");
      if (sceneEl?.systems?.["mindar-image"]) {
        const mindarSystem = sceneEl.systems["mindar-image"];
        if (mindarSystem?.mindarThree?.controller) {
          try {
            mindarSystem.mindarThree.controller.stop();
          } catch (e) {
            console.warn("MindAR cleanup warning:", e);
          }
        }
      }
    }
  }, []);


  return (
    <div className='landing__page__container'>
      <div><h1>Select the Categories</h1></div>
      <div className='landing__page__sub__container'>
        {content.map((item, index) => {
          return (
            <div className='landing__page__items' key={index} onClick={() => handleClick(item.video)}>
              <img src={item.banner} height={150} width={200} />
              <p style={{
                fontSize: 20,
              }}>{item.name}</p>
              <p>Click here to listen</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Landing