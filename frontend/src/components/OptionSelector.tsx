import React from 'react';

interface Option {
  name: string;
  icon: string;
}

interface OptionSelectorProps {
  title: string;
  options: Option[];
  selectedOption: string;
  onSelectOption: (option: string) => void;
}

export const OptionSelector: React.FC<OptionSelectorProps> = ({ title, options, selectedOption, onSelectOption }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h3 style={{ marginBottom: '10px' }}>{title}</h3>
      <div style={{ display: 'flex', gap: '10px' }}>
        {options.map(option => (
          <div
            key={option.name}
            onClick={() => onSelectOption(option.name)}
            style={{
              padding: '10px',
              border: selectedOption === option.name ? '2px solid #6a0dad' : '1px solid #ccc',
              borderRadius: '8px',
              cursor: 'pointer',
              textAlign: 'center'
            }}
          >
            <img src={option.icon} alt={option.name} style={{ width: '40px', height: '40px' }} />
          </div>
        ))}
      </div>
    </div>
  );
};
