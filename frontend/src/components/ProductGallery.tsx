import React from 'react';

const images = [
  "https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
  "https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
  "https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
  "https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
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
