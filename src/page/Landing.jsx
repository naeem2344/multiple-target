import React, { useEffect, useState } from 'react'
import '../style.css'
import { useNavigate } from 'react-router-dom';
import videos from '../content/videoData';

const Landing = () => {
  const [content, setContent] = useState(videos);
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