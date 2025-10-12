import React from "react";

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

export const OptionSelector: React.FC<OptionSelectorProps> = ({
  title,
  options,
  selectedOption,
  onSelectOption,
}) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3 style={{ marginBottom: "10px" }}>{title}</h3>
      <div style={{ display: "flex", gap: "10px" }}>
        {options.map((option) => (
          <div
            key={option.name}
            onClick={() => onSelectOption(option.name)}
            style={{
              padding: "8px",
              outline:
                selectedOption === option.name ? "1px solid #3C3C3C" : "none",
              borderRadius: "100px",
              cursor: "pointer",
              textAlign: "center",
              width: "50px",
              height: "50px",
            }}
          >
            <img
              src={option.icon}
              alt={option.name}
              style={{
                objectFit: "contain",
                objectPosition: "center",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
