import { useCallback, useMemo, useState } from "react";
import "./DualRangeSlider.css"

export type Props = {
  label: string;
  min: number;
  max: number;
  defaultValue: [number, number];
  onChange: (value: [number, number]) => void;
};

export const DualRangeSlider = ({
  label,
  min,
  max,
  defaultValue,
  onChange,
}: Props) => {
  // Use state to manage the current min and max values of the range
  const [minVal, setMinVal] = useState(defaultValue[0] || min);
  const [maxVal, setMaxVal] = useState(defaultValue[1] || max);

  // Calculate the percentage offset for the background track fill
  const minPercent = useMemo(
    () => ((minVal - min) / (max - min)) * 100,
    [minVal, min, max]
  );
  const maxPercent = useMemo(
    () => ((maxVal - min) / (max - min)) * 100,
    [maxVal, min, max]
  );

  // Style for the custom track fill (the purple bar)
  const rangeBarFillStyle = useMemo(
    () => ({
      background: `linear-gradient(to right, #ccc ${minPercent}%, #50056E ${minPercent}%, #50056E ${maxPercent}%, #ccc ${maxPercent}%)`,
    }),
    [minPercent, maxPercent]
  );

  // Handler for slider input changes (range input)
  const handleRangeChange = useCallback(
    (isMinSlider: boolean, event: React.ChangeEvent<HTMLInputElement>) => {
      let newValue = Number(event.target.value);

      // Enforce constraints (min cannot exceed max, max cannot be less than min)
      if (isMinSlider) {
        newValue = Math.min(newValue, maxVal);
        setMinVal(newValue);
      } else {
        newValue = Math.max(newValue, minVal);
        setMaxVal(newValue);
      }

      // Call external onChange handler
      if (onChange) {
        onChange(isMinSlider ? [newValue, maxVal] : [minVal, newValue]);
      }
    },
    [minVal, maxVal, onChange]
  );

  // Handler for keyboard input changes (text boxes)
  const handleKeyboardChange = useCallback(
    (isMinInput: boolean, event: React.ChangeEvent<HTMLInputElement>) => {
      let newValue: string | number = event.target.value.replace(
        /[^0-9.]/g,
        ""
      ); // Clean non-numeric input
      newValue = Number(newValue) || (isMinInput ? min : max);

      // Enforce min/max bounds and internal constraints
      newValue = Math.min(Math.max(newValue, min), max);

      if (isMinInput) {
        newValue = Math.min(newValue, maxVal);
        setMinVal(newValue);
      } else {
        newValue = Math.max(newValue, minVal);
        setMaxVal(newValue);
      }

      // Call external onChange handler
      if (onChange) {
        onChange(isMinInput ? [newValue, maxVal] : [minVal, newValue]);
      }
    },
    [min, max, minVal, maxVal, onChange]
  );

  return (
    <div className="dual-range-slider-container">
      <div className="range-label-group">
        <label className="range-label">{label}</label>

        {/* Min Value Input */}
        <div className="input-box">
          <span className="currency-prefix">$</span>
          <input
            type="text"
            className="input-field"
            value={minVal}
            onChange={(e) => handleKeyboardChange(true, e)}
          />
        </div>
        <span className="separator">-</span>

        {/* Max Value Input */}
        <div className="input-box">
          <span className="currency-prefix">$</span>
          <input
            type="text"
            className="input-field"
            value={maxVal}
            onChange={(e) => handleKeyboardChange(false, e)}
          />
        </div>
      </div>

      {/* Dual Range Slider */}
      <div className="multi-range-slider" style={rangeBarFillStyle}>
        {/* Min Slider (Controls the left thumb) */}
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={(e) => handleRangeChange(true, e)}
          className="range-input min-slider"
        />

        {/* Max Slider (Controls the right thumb) */}
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={(e) => handleRangeChange(false, e)}
          className="range-input max-slider"
        />
      </div>
    </div>
  );
};
