import React from 'react';

interface ColorOption {
  name: string;
  color: string;
}

interface ColorSelectorProps {
  title: string;
  options: ColorOption[];
  selectedOption: string;
  onSelectOption: (option: string) => void;
}

export const ColorSelector: React.FC<ColorSelectorProps> = ({ title, options, selectedOption, onSelectOption }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h3 style={{ marginBottom: '10px' }}>{title}</h3>
      <div style={{ display: 'flex', gap: '15px' }}>
        {options.map(option => (
          <div
            key={option.name}
            onClick={() => onSelectOption(option.name)}
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: option.color,
              borderRadius: '50%',
              outline: selectedOption === option.name ? '1px solid #3C3C3C' : 'none',
              outlineOffset: "4px",
              cursor: 'pointer',
            }}
          />
        ))}
      </div>
    </div>
  );
};
