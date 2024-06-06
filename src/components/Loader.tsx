// src/components/Loader.tsx
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div style={loaderStyle}>
      <div>Loading...</div>
    </div>
  );
};

const loaderStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  fontSize: '24px',
};

export default Loader;
