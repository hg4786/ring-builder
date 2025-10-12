import React from 'react';
import demoRing from "../assets/Frame 8512.png"

const images = [
  demoRing,
  demoRing,
  demoRing,
  demoRing,
];

const galleryStyles: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '16px',
};

const imageStyle: React.CSSProperties = {
  width: '100%',
  height: 'auto',
  aspectRatio: '5 / 6',
  objectFit: 'cover',
  borderRadius: '8px'
};

export const ProductGallery: React.FC = () => {
  return (
    <div style={galleryStyles}>
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Product image ${index + 1}`} style={imageStyle} />
      ))}
    </div>
  );
};
