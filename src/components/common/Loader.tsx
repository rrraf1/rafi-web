// src/components/Loader.tsx
import React, { useEffect, useState } from "react";
import introVideo from "@assets/introkomp.mp4";
import introTabVideo from "@assets/intro-tab.mp4";
import introMobileVideo from "@assets/intro-mobile.mp4";

const Loader = React.forwardRef<HTMLVideoElement>((_, ref) => {
  const [videoSrc, setVideoSrc] = useState(introVideo);

  useEffect(() => {
    const updateVideoSrc = () => {
      const width = window.innerWidth;
      if (width < 481) {
        setVideoSrc(introMobileVideo);
      } else if (width < 900) {
        setVideoSrc(introTabVideo);
      } else {
        setVideoSrc(introVideo);
      }
    };

    updateVideoSrc(); // Set the initial video source
    window.addEventListener("resize", updateVideoSrc);
    return () => {
      window.removeEventListener("resize", updateVideoSrc);
    };
  }, []);

  return (
    <div style={loaderStyle}>
      <video ref={ref} style={videoStyle} src={videoSrc} autoPlay muted />
    </div>
  );
});

const loaderStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100vw",
  overflow: "hidden",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 9999,
  backgroundColor: "black",
};

const videoStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

export default Loader;
