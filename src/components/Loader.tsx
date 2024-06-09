// src/components/Loader.tsx
import React from "react";
import introVideo from "../assets/intro.mp4";

const Loader = React.forwardRef<HTMLVideoElement>((_, ref) => {
  return (
    <div style={loaderStyle}>
      <video ref={ref} style={videoStyle} src={introVideo} autoPlay muted />
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
