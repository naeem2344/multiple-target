// import { useEffect, useRef } from "react";
// import "aframe";
// import "mind-ar/dist/mindar-image-aframe.prod.js";


// if (typeof AFRAME !== "undefined" && !AFRAME.components["fix-ios-webgl"]) {
//   AFRAME.registerComponent("fix-ios-webgl", {
//     init: function () {
//       const sceneEl = this.el;
//       if (sceneEl.renderer) return;
//       sceneEl.renderer = new THREE.WebGLRenderer({
//         antialias: true,
//         powerPreference: "high-performance",
//       });
//       sceneEl.renderer.outputEncoding = THREE.sRGBEncoding;
//     },
//   });
// }

// const ShowTarget = () => {
//   const videoRef = useRef(null);
//   const videoEntityRef = useRef(null);
//   useEffect(() => {
//     const videoEl = videoRef.current;
//     const videoEntityEl = videoEntityRef.current;

//     if (!videoEl || !videoEntityEl) return;

//     const handleTargetFound = () => {
//       videoEl.play();
//     };

//     const handleUserInteraction = () => {
//       if(!videoEl) return;
//       videoEl.muted = false;
//       videoEl.play();
//       window.removeEventListener("click", handleUserInteraction);
//     };

//     window.addEventListener("click", handleUserInteraction);
//     videoEntityEl.addEventListener("targetFound", handleTargetFound);
//     videoEntityEl.addEventListener("targetLost", () => videoEl.pause());

//     return () => {
//       videoEntityEl.removeEventListener("targetFound", handleTargetFound);
//       videoEntityEl.removeEventListener("targetLost", () => videoEl.pause());
//       window.removeEventListener("click", handleUserInteraction);
//     };
//   }, []);



//   return (
//     <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0, overflow: "hidden" }}>
//       <a-scene
//         fix-ios-webgl
//         mindar-image="imageTargetSrc: /assets/targets.mind; autoStart: true;"
//         embedded
//         color-space="sRGB"
//         renderer="colorManagement: true, physicallyCorrectLights"
//         vr-mode-ui="enabled: false"
//         device-orientation-permission-ui="enabled: false"

//         style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}
//       >
//         <a-assets>
//           <video
//             id="myVideo"
//             ref={videoRef}
//             src="/assets/target-image/atal-bihari-vajpayee.mp4"
//             preload="auto"
//             playsInline
//             loop
//             muted
//             crossOrigin="anonymous"
//             style={{ height: '400px', border: '1px solid red' }}
//           ></video>
//         </a-assets>

//         <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

//         <a-video
//           ref={videoEntityRef}
//           src="#myVideo"
//           mindar-image-target="targetIndex: 0"
//           loop="true"
//           width="1"
//           height="0.5625"
//           position="0 1 0"
//         ></a-video>
//       </a-scene>
//     </div>
//   )
// }

// export default ShowTarget

// import { useEffect, useRef } from "react";
// import "aframe";
// import "mind-ar/dist/mindar-image-aframe.prod.js";

// if (typeof AFRAME !== "undefined" && !AFRAME.components["fix-ios-webgl"]) {
//   AFRAME.registerComponent("fix-ios-webgl", {
//     init: function () {
//       const sceneEl = this.el;
//       if (sceneEl.renderer) return;
//       sceneEl.renderer = new THREE.WebGLRenderer({
//         antialias: true,
//         powerPreference: "high-performance",
//       });
//       sceneEl.renderer.outputEncoding = THREE.sRGBEncoding;
//     },
//   });
// }

// const ShowTarget = () => {
//   const videoRef = useRef(null);
//   const videoEntityRef = useRef(null);

//   useEffect(() => {
//     const videoEl = videoRef.current;
//     const videoEntityEl = videoEntityRef.current;
//     if (!videoEl || !videoEntityEl) return;

//     const handleTargetFound = () => {
//       console.log("Target found");
//       videoEl.play().catch(err => console.warn("Autoplay blocked:", err));
//     };

//     const handleTargetLost = () => {
//       console.log("Target lost");
//       videoEl.pause();
//     };

//     const handleUserInteraction = () => {
//       videoEl.muted = false;
//       videoEl.play().catch(err => console.warn("User play error:", err));
//       window.removeEventListener("click", handleUserInteraction);
//     };

//     window.addEventListener("click", handleUserInteraction);
//     videoEntityEl.addEventListener("targetFound", handleTargetFound);
//     videoEntityEl.addEventListener("targetLost", handleTargetLost);

//     return () => {
//       window.removeEventListener("click", handleUserInteraction);
//       videoEntityEl.removeEventListener("targetFound", handleTargetFound);
//       videoEntityEl.removeEventListener("targetLost", handleTargetLost);

//     };
//   }, []);

//   return (
//     <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0, overflow: "hidden" }}>
//       <a-scene
//         fix-ios-webgl
//         mindar-image="imageTargetSrc: /assets/targets.mind; autoStart: true;"
//         embedded
//         color-space="sRGB"
//         renderer="colorManagement: true, physicallyCorrectLights"
//         vr-mode-ui="enabled: false"
//         device-orientation-permission-ui="enabled: false"
//         style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}
//       >
//         <a-assets>
//           <video
//             id="myVideo"
//             ref={videoRef}
//             src="/assets/videos/atal-bihari-vajpayee.mp4"
//             preload="auto"
//             playsInline
//             loop
//             muted
//             crossOrigin="anonymous"
//           ></video>
//         </a-assets>

//         <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
        

//         <a-video
//           ref={videoEntityRef}
//           src="#myVideo"
//           mindar-image-target="targetIndex: 0"
//           loop="true"
//           width="1"
//           height="0.5625"
//           position="0 1 0"
//         ></a-video>
//       </a-scene>
//     </div>
//   );
// };

// export default ShowTarget;


import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "aframe";
import "mind-ar/dist/mindar-image-aframe.prod.js";

// ✅ Register fix for iOS WebGL (same as before)
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
  const { id } = useParams();
  const videoRef = useRef(null);
  const videoEntityRef = useRef(null);

  // ✅ Your same video list from Landing page
  const content = [
    {
      banner: "/assets/categroies/Narendra-modi.webp",
      video: "/assets/videos/narendra-modi.mp4",
      name: "Narendra Modi",
    },
    {
      banner: "/assets/categroies/dr-manmohan-singh.jpg",
      video: "/assets/videos/dr-manmohan-singh.mp4",
      name: "Dr. Manmohan Singh",
    },
    {
      banner: "/assets/categroies/atal-bihari.jpg",
      video: "/assets/videos/atal-bihari-vajpayee.mp4",
      name: "Atal Bihari Vajpayee",
    },
    {
      banner: "/assets/categroies/rajiv_gandhi.avif",
      video: "/assets/videos/rajiv-gandhi.mp4",
      name: "Rajiv Gandhi",
    },
  ];

  const selectedVideo = content[id]?.video || content[0].video;
  console.log(selectedVideo, id)

  useEffect(() => {
    const videoEl = videoRef.current;
    const videoEntityEl = videoEntityRef.current;
    if (!videoEl || !videoEntityEl) return;

    // 🎯 Play when target found
    const handleTargetFound = () => {
      videoEl.play().catch(() => console.warn("Video play blocked"));
    };

    const handleTargetLost = () => {
      videoEl.pause();
    };

    // 🧠 Browser autoplay restrictions
    const handleUserInteraction = () => {
      videoEl.muted = false;
      videoEl.play().catch(() => console.warn("Autoplay blocked"));
      window.removeEventListener("click", handleUserInteraction);
    };

    window.addEventListener("click", handleUserInteraction);
    videoEntityEl.addEventListener("targetFound", handleTargetFound);
    videoEntityEl.addEventListener("targetLost", handleTargetLost);

    // ✅ Cleanup (prevents stopProcessVideo error)
    return () => {
      videoEntityEl.removeEventListener("targetFound", handleTargetFound);
      videoEntityEl.removeEventListener("targetLost", handleTargetLost);
      window.removeEventListener("click", handleUserInteraction);

      // Stop MindAR controller before scene unmounts
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
    };
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <a-scene
        fix-ios-webgl
        mindar-image="imageTargetSrc: /assets/targets.mind; autoStart: true;"
        embedded
        color-space="sRGB"
        renderer="colorManagement: true, physicallyCorrectLights"
        vr-mode-ui="enabled: false"
        device-orientation-permission-ui="enabled: false"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <a-assets>
          <video
            id="myVideo"
            ref={videoRef}
            src={selectedVideo}
            preload="auto"
            playsInline
            loop
            muted
            crossOrigin="anonymous"
            style={{ display: "none" }}
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
  );
};

export default ShowTarget;
