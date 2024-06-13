import React from "react";

type LazyImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} />;
};

export default LazyImage;
