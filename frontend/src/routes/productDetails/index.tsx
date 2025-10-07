import React, { useState } from 'react';
import { ProductGallery } from '../../components/ProductGallery';
import { OptionSelector } from '../../components/OptionSelector';
import { ColorSelector } from '../../components/ColorSelector';
import { EmailForm } from '../../components/EmailForm';

const shapes = [
  { name: 'Oval', icon: '/assets/shapes/oval.svg' },
  { name: 'Cushion', icon: '/assets/shapes/cushion.svg' },
  { name: 'Emerald', icon: '/assets/shapes/emerald.svg' },
];

const bandWidths = [
  { name: 'Standard', icon: '/assets/shapes/oval.svg' },
  { name: 'Thin', icon: '/assets/shapes/cushion.svg' },
];

const metals = [
  { name: '18k Yellow Gold', color: '#FFD700' },
  { name: '14k White Gold', color: '#E5E4E2' },
  { name: '18k Rose Gold', color: '#E0C0B1' },
  { name: 'Platinum', color: '#E5E4E2' },
];

const bands = [
  { name: 'Plain', color: '#E5E4E2' },
  // Add other band options here
];

const mainContainerStyles: React.CSSProperties = {
  display: 'flex',
  padding: '2rem',
  gap: '2rem',
  maxWidth: '1200px',
  margin: '0 auto',
};

const leftColumnStyles: React.CSSProperties = {
  flex: '1 1 50%',
};

const rightColumnStyles: React.CSSProperties = {
  flex: '1 1 50%',
  display: 'flex',
  flexDirection: 'column',
};

export const ProductDetails = () => {
  const [shape, setShape] = useState('Oval');
  const [bandWidth, setBandWidth] = useState('Standard');
  const [metal, setMetal] = useState('18k Yellow Gold');
  const [band, setBand] = useState('Plain');

  return (
    <div style={mainContainerStyles}>
      <div style={leftColumnStyles}>
        <ProductGallery />
      </div>
      <div style={rightColumnStyles}>
        <h1>The Signature Oval Yellow Gold Engagement Ring</h1>
        <p>Classic Solitaire Ring</p>
        <p>From $16,570</p>
        <OptionSelector title="Shape" options={shapes} selectedOption={shape} onSelectOption={setShape} />
        <OptionSelector title="Band Width" options={bandWidths} selectedOption={bandWidth} onSelectOption={setBandWidth} />
        <ColorSelector title="Metal" options={metals} selectedOption={metal} onSelectOption={setMetal} />
        <ColorSelector title="Band" options={bands} selectedOption={band} onSelectOption={setBand} />
        
        <button style={{ padding: '15px 0', backgroundColor: '#6a0dad', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: '1rem' }}>Select Stone For Your Ring</button>
        <button style={{ padding: '15px 0', backgroundColor: 'transparent', color: '#6a0dad', border: '1px solid #6a0dad', borderRadius: '4px', cursor: 'pointer' }}>Book a Virtual Or In-Person Appointment</button>
        
        <EmailForm />
      </div>
    </div>
  );
};
