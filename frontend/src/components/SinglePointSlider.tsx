import { useCallback, useMemo, useState } from "react";
import "./SinglePointSlider.css";

export type Props = {
  label?: string;
  min: number;
  max: number;
  defaultValue: number;
  onChange: (value: number) => void;
};

export const SinglePointSlider = ({
  label,
  min,
  max,
  defaultValue,
  onChange,
}: Props) => {
  const [value, setValue] = useState(defaultValue || min);

  const percent = useMemo(
    () => ((value - min) / (max - min)) * 100,
    [value, min, max]
  );

  const rangeBarFillStyle = useMemo(
    () => ({
      background: `linear-gradient(to right, #50056E ${percent}%, #ccc ${percent}%)`,
    }),
    [percent]
  );

  const handleRangeChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      let newValue = Number(event.target.value);
      setValue(newValue);
      if (onChange) {
        onChange(newValue);
      }
    },
    [onChange]
  );

  const handleKeyboardChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      let newValue: string | number = event.target.value.replace(
        /[^0-9.]/g,
        ""
      );
      newValue = Number(newValue) || min;

      newValue = Math.min(Math.max(newValue, min), max);
      setValue(newValue);

      if (onChange) {
        onChange(newValue);
      }
    },
    [min, max, onChange]
  );

  return (
    <div className="single-point-slider-container">
      {!!label && (
        <div className="range-label-group">
          <label className="range-label">{label}</label>
          <div className="input-box">
            <input
              type="text"
              className="input-field"
              value={value}
              onChange={handleKeyboardChange}
            />
          </div>
        </div>
      )}
      <div className="single-range-slider" style={rangeBarFillStyle}>
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={handleRangeChange}
          className="range-input"
        />
      </div>
    </div>
  );
};
