import React from 'react';

interface Shape {
  name: string;
  src: string;
}

interface ShapeSelectorProps {
  shapes: Shape[];
  selectedShape: string;
  onSelectShape: (shape: string) => void;
}

export const ShapeSelector: React.FC<ShapeSelectorProps> = ({ shapes, selectedShape, onSelectShape }) => {
  return (
    <div>
      <h3>Shape</h3>
      <div style={{ display: 'flex' }}>
        {shapes.map((shape) => (
          <div
            key={shape.name}
            style={{
              border: selectedShape === shape.name ? '2px solid blue' : '1px solid #ccc',
              padding: '5px',
              margin: '5px',
              cursor: 'pointer'
            }}
            onClick={() => onSelectShape(shape.name)}
          >
            <img src={shape.src} alt={shape.name} style={{ width: '50px', height: '50px' }} />
            <p>{shape.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
