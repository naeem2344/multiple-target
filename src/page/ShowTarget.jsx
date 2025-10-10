import { useEffect, useRef, useState } from "react";
import "aframe";
import "mind-ar/dist/mindar-image-aframe.prod.js";
import { useParams } from "react-router-dom";
import videos from "../content/videoData";


if (typeof AFRAME !== "undefined" && !AFRAME.components["fix-ios-webgl"]) {
  AFRAME.registerComponent("fix-ios-webgl", {
    init: function () {
      const sceneEl = this.el;
      if (sceneEl.renderer) return;
      sceneEl.renderer = new THREE.WebGLRenderer({
        antialias: true,
        powerPreference: "high-performance",
      });
      sceneEl.renderer.outputEncoding = THREE.sRGBEncoding;
    },
  });
}

const ShowTarget = () => {
  const videoRef = useRef(null);
  const videoEntityRef = useRef(null);
  const [targetVideo, setTargetVideo] = useState();
  const { id } = useParams();


  useEffect(() => {
    if (!id) return;

    if (videos) {
      const { video } = videos[id]
      setTargetVideo(video);
    }
  }, [id, videos])



  useEffect(() => {
    const videoEl = videoRef.current;
    const videoEntityEl = videoEntityRef.current;

    if (!videoEl || !videoEntityEl) return;

    const handleTargetFound = () => {
      videoEl.play();
    };

    const handleUserInteraction = () => {
      if (!videoEl) return;
      videoEl.muted = false;
      videoEl.play();
      window.removeEventListener("click", handleUserInteraction);
    };

    window.addEventListener("click", handleUserInteraction);
    videoEntityEl.addEventListener("targetFound", handleTargetFound);
    videoEntityEl.addEventListener("targetLost", () => videoEl.pause());

    return () => {
      videoEntityEl.removeEventListener("targetFound", handleTargetFound);
      videoEntityEl.removeEventListener("targetLost", () => videoEl.pause());
      window.removeEventListener("click", handleUserInteraction);
    };
  }, []);



  return (
    <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0, overflow: "hidden" }}>
      <a-scene
        fix-ios-webgl
        mindar-image="imageTargetSrc: /targets.mind; autoStart: true;"
        embedded
        color-space="sRGB"
        renderer="colorManagement: true, physicallyCorrectLights"
        vr-mode-ui="enabled: false"
        device-orientation-permission-ui="enabled: false"

        style={{ width: "100vw", height: "100vh", position: "absolute", top: 0, left: 0 }}
      >
        <a-assets>
          <video
            id="myVideo"
            ref={videoRef}
            // src="/assets/videos/atal-bihari-vajpayee.mp4"
            src={targetVideo}
            preload="auto"
            playsInline
            loop
            muted
            crossOrigin="anonymous"
          ></video>
        </a-assets>

        <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

        <a-video
          ref={videoEntityRef}
          src="#myVideo"
          mindar-image-target="targetIndex: 0"
          loop="true"
          width="1"
          height="0.5625"
          position="0 1 0"
        ></a-video>
      </a-scene>
    </div>
  )
}

export default ShowTarget
