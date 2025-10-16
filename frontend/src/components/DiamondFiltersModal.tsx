import { useEffect, useRef, useState } from "react";

export interface DiamondFilterState {
  // Priority filters
  priority: "Most Brilliant" | "Best Color" | "Best Balance" | null;
  
  // Diamond type
  diamondType: "natural" | "lab";
  
  // Shape
  shape: string[];
  
  // Range filters
  caratRange: [number, number];
  priceRange: [number, number];
  ratioRange: [number, number];
  tableRange: [number, number];
  depthRange: [number, number];
  
  // Selection filters
  cut: string[];
  clarity: string[];
  color: string[];
  fancyColors: string[];
  
  // Sorting
  sortBy: string;
}

type Props = {
  show?: boolean;
  onClose: () => void;
  onApplyFilters?: (filters: DiamondFilterState) => void;
};

const diamondShapes = [
  { name: "Round", image: "https://api.builder.io/api/v1/image/assets/TEMP/8641dbf14ecf64c9f304e74c609fa3203e64c5b0?width=150" },
  { name: "Oval", image: "https://api.builder.io/api/v1/image/assets/TEMP/be45a5ae02dea54f20094e0fd9cb2f235dfca375?width=180" },
  { name: "Emerald", image: "https://api.builder.io/api/v1/image/assets/TEMP/3b60bcc82069a23b2b97d5dda769276f45aab184?width=180" },
  { name: "Pear", image: "https://api.builder.io/api/v1/image/assets/TEMP/785522df8f556957cfc46ba2fdaaa9f1003fa147?width=180" },
  { name: "Radiant", image: "https://api.builder.io/api/v1/image/assets/TEMP/e84dd6b002f8bbb8c2b72601f942bb4835f4f548?width=180" },
  { name: "Cushion", image: "https://api.builder.io/api/v1/image/assets/TEMP/09375c5d667d3010be7d592df9cbea115f1b041e?width=180" },
  { name: "Asscher", image: "https://api.builder.io/api/v1/image/assets/TEMP/60ae7bf28ba3cb01489718249dc6ea11385ec220?width=180" },
  { name: "Marquise", image: "https://api.builder.io/api/v1/image/assets/TEMP/5144283bb6ae469b5c4acddc3f5af617f24c71ef?width=180" },
  { name: "Princess", image: "https://api.builder.io/api/v1/image/assets/TEMP/a4b8acc853b815157c6ca95155bb25a9fe4f5765?width=180" }
];

const cutOptions = [
  { name: "Ideal + Hearts", image: "https://api.builder.io/api/v1/image/assets/TEMP/9a09298b2656869f315b9cbd49f1e845ae45b4c9?width=246" },
  { name: "Ideal", image: "https://api.builder.io/api/v1/image/assets/TEMP/4590c200a3628fca5a62c964afc3ce1bf3a79b6c?width=246" },
  { name: "Excellent", image: "https://api.builder.io/api/v1/image/assets/TEMP/471543cd2bd0045cad36b1c1c85425235ce521c7?width=246" }
];

const clarityOptions = [
  { name: "VVS1", description: "Very Very Slightly (Not Eye Visible)", image: "https://api.builder.io/api/v1/image/assets/TEMP/9d250a3a2533c3f0a2956b398d4c092372d64e55?width=240" },
  { name: "VVS2", description: "Very Very Slightly (Not Eye Visible)", image: "https://api.builder.io/api/v1/image/assets/TEMP/2c1083989bd7759b84ecc7b630ff5d046e8a818d?width=240" },
  { name: "VS1", description: "Very Slightly (Not Eye Visible)", image: "https://api.builder.io/api/v1/image/assets/TEMP/45259280bd8f9cd338e57dd0c5d7f77b9ea96b25?width=240" },
  { name: "VS2", description: "Very Slightly (Not Eye Visible)", image: "https://api.builder.io/api/v1/image/assets/TEMP/9d250a3a2533c3f0a2956b398d4c092372d64e55?width=240" },
  { name: "SI1", description: "Slightly included", image: "https://api.builder.io/api/v1/image/assets/TEMP/2c1083989bd7759b84ecc7b630ff5d046e8a818d?width=240" }
];

const colorOptions = [
  { name: "D", description: "Colorless", image: "https://api.builder.io/api/v1/image/assets/TEMP/cf4d826ef148c1bac361d55364beb9e890074bf5?width=306" },
  { name: "E", description: "Colorless", image: "https://api.builder.io/api/v1/image/assets/TEMP/dfc282e3f6d48e01fe29e1036fbf1d4b2aa9f273?width=306" },
  { name: "F", description: "Colorless", image: "https://api.builder.io/api/v1/image/assets/TEMP/125b8ebad754624520ed2846ede6981e7686b6e8?width=306" },
  { name: "G", description: "Near Colorless", image: "https://api.builder.io/api/v1/image/assets/TEMP/cf4d826ef148c1bac361d55364beb9e890074bf5?width=306" },
  { name: "H", description: "Near Colorless", image: "https://api.builder.io/api/v1/image/assets/TEMP/dfc282e3f6d48e01fe29e1036fbf1d4b2aa9f273?width=306" },
  { name: "I", description: "Colorless", image: "https://api.builder.io/api/v1/image/assets/TEMP/125b8ebad754624520ed2846ede6981e7686b6e8?width=306" }
];

const fancyColorOptions = [
  { name: "Blue", image: "https://api.builder.io/api/v1/image/assets/TEMP/a0ebcaa76fa21b9b2ece19036127c46e76b51a30?width=180" },
  { name: "Pink", image: "https://api.builder.io/api/v1/image/assets/TEMP/2488836190b77f28e3e77b63f77146c8cd1a5e1d?width=180" }
];

const sortingOptions = [
  "Featured",
  "Price Descending", 
  "Price Ascending",
  "Carat Descending",
  "Carat Ascending"
];

const RangeSlider = ({ 
  min, 
  max, 
  value, 
  onChange,
  formatValue,
  unit = ""
}: {
  min: number;
  max: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
  formatValue?: (val: number) => string;
  unit?: string;
}) => {
  const minPercent = ((value[0] - min) / (max - min)) * 100;
  const maxPercent = ((value[1] - min) / (max - min)) * 100;

  return (
    <div className="range-slider-section">
      <div className="range-slider-track">
        <div 
          className="range-slider-fill"
          style={{
            left: `${minPercent}%`,
            width: `${maxPercent - minPercent}%`
          }}
        />
        <div 
          className="range-slider-thumb"
          style={{ left: `${minPercent}%` }}
        />
        <div 
          className="range-slider-thumb"
          style={{ left: `${maxPercent}%` }}
        />
      </div>
      <div className="range-inputs">
        <input
          type="text"
          className="range-input"
          value={formatValue ? formatValue(value[0]) : `${unit}${value[0]}`}
          onChange={(e) => {
            const newVal = parseFloat(e.target.value.replace(/[^0-9.]/g, '')) || min;
            onChange([Math.max(min, Math.min(newVal, value[1])), value[1]]);
          }}
        />
        <div className="range-separator" />
        <input
          type="text"
          className="range-input"
          value={formatValue ? formatValue(value[1]) : `${unit}${value[1]}`}
          onChange={(e) => {
            const newVal = parseFloat(e.target.value.replace(/[^0-9.]/g, '')) || max;
            onChange([value[0], Math.min(max, Math.max(newVal, value[0]))]);
          }}
        />
      </div>
    </div>
  );
};

export default function DiamondFiltersModal(props: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  
  const [filters, setFilters] = useState<DiamondFilterState>({
    priority: null,
    diamondType: "natural",
    shape: ["Round"],
    caratRange: [0, 500],
    priceRange: [0, 500],
    ratioRange: [0, 500],
    tableRange: [4, 88],
    depthRange: [34, 100],
    cut: [],
    clarity: [],
    color: [],
    fancyColors: [],
    sortBy: "Featured"
  });

  const updateFilters = (newFilters: Partial<DiamondFilterState>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const toggleArrayFilter = <T extends string>(
    key: keyof Pick<DiamondFilterState, 'shape' | 'cut' | 'clarity' | 'color' | 'fancyColors'>,
    value: T
  ) => {
    setFilters(prev => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter(item => item !== value)
        : [...prev[key], value]
    }));
  };

  const clearFilters = () => {
    setFilters({
      priority: null,
      diamondType: "natural",
      shape: [],
      caratRange: [0, 500],
      priceRange: [0, 500],
      ratioRange: [0, 500],
      tableRange: [4, 88],
      depthRange: [34, 100],
      cut: [],
      clarity: [],
      color: [],
      fancyColors: [],
      sortBy: "Featured"
    });
  };

  const applyFilters = () => {
    props.onApplyFilters?.(filters);
    props.onClose();
  };

  useEffect(() => {
    if (!dialogRef.current) return;
    
    if (dialogRef.current.open === props.show) return;
    
    if (props.show) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [props.show]);

  return (
    <dialog className="filters-modal" ref={dialogRef}>
      <div className="filters-modal-container">
        {/* Header */}
        <div className="filters-header">
          <div className="filters-header-content">
            <div className="filters-title-section">
              <h1 className="filters-title">FILTER</h1>
              <div className="priority-section">
                <h2 className="priority-title">What's most important to you?</h2>
                <div className="priority-options">
                  {(["Most Brilliant", "Best Color", "Best Balance"] as const).map(option => (
                    <button
                      key={option}
                      className={`priority-btn ${filters.priority === option ? 'selected' : ''}`}
                      onClick={() => updateFilters({ priority: filters.priority === option ? null : option })}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <button className="close-btn" onClick={props.onClose}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M13.125 13L35 34.875" stroke="black" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.125 34.875L35 13" stroke="black" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Diamond Type Toggle */}
          <div className="diamond-type-toggle">
            <button
              className={`diamond-type-btn ${filters.diamondType === 'natural' ? 'active' : ''}`}
              onClick={() => updateFilters({ diamondType: 'natural' })}
            >
              NATURAL DIAMONDS
            </button>
            <button
              className={`diamond-type-btn ${filters.diamondType === 'lab' ? 'active' : ''}`}
              onClick={() => updateFilters({ diamondType: 'lab' })}
            >
              LAB DIAMONDS
            </button>
          </div>
        </div>

        {/* Filter Sections */}
        <div className="filters-content">
          {/* Shape Section */}
          <div className="filter-section">
            <div className="section-header">
              <h3 className="section-title">Shape</h3>
              <svg width="19" height="3" viewBox="0 0 19 3" fill="none">
                <path d="M1 1.50876H18M9.4375 1.49121V1.5" stroke="#030303" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="shape-grid">
              {diamondShapes.map(shape => (
                <button
                  key={shape.name}
                  className={`shape-option ${filters.shape.includes(shape.name) ? 'selected' : ''}`}
                  onClick={() => toggleArrayFilter('shape', shape.name)}
                >
                  <img src={shape.image} alt={shape.name} className="shape-image" />
                  <span className="shape-name">{shape.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Carat Section */}
          <div className="filter-section">
            <div className="section-header">
              <h3 className="section-title">cARAT</h3>
              <svg width="19" height="4" viewBox="0 0 19 4" fill="none">
                <path d="M1 1.98438H18M9.5 2V2.01562" stroke="#030303" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="section-description">
              Carat refers to a diamond's weight. One carat equals 0.2 grams.
            </p>
            <RangeSlider
              min={0}
              max={500}
              value={filters.caratRange}
              onChange={(value) => updateFilters({ caratRange: value })}
              unit="$"
            />
          </div>

          {/* Price Section */}
          <div className="filter-section">
            <div className="section-header">
              <h3 className="section-title">price</h3>
              <svg width="19" height="4" viewBox="0 0 19 4" fill="none">
                <path d="M1 1.96094H18M9.5 2V2.03906" stroke="#030303" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <RangeSlider
              min={0}
              max={500}
              value={filters.priceRange}
              onChange={(value) => updateFilters({ priceRange: value })}
              unit="$"
            />
          </div>

          {/* Cut Section */}
          <div className="filter-section">
            <div className="section-header">
              <h3 className="section-title">cut</h3>
              <svg width="19" height="20" viewBox="0 0 19 20" fill="none">
                <path d="M1 10H18M9.5 1.5V18.5" stroke="#030303" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="section-description">
              Cut refers to how well a diamond's facets are cut to reflect light. We always cut for maximum brilliance. <span className="learn-more">Learn more.</span>
            </p>
            <div className="cut-options">
              {cutOptions.map(cut => (
                <button
                  key={cut.name}
                  className={`cut-option ${filters.cut.includes(cut.name) ? 'selected' : ''}`}
                  onClick={() => toggleArrayFilter('cut', cut.name)}
                >
                  <img src={cut.image} alt={cut.name} className="cut-image" />
                  <span className="cut-name">{cut.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Clarity Section */}
          <div className="filter-section">
            <div className="section-header">
              <h3 className="section-title">clarity</h3>
              <svg width="19" height="2" viewBox="0 0 19 2" fill="none">
                <path d="M1 0.992188H18M9.5 1.00781V0.996704" stroke="#030303" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="section-description">
              Cut refers to how well a diamond's facets are cut to reflect light. We always cut for maximum brilliance. <span className="learn-more">Learn more.</span>
            </p>
            <div className="clarity-grid">
              {clarityOptions.map(clarity => (
                <button
                  key={clarity.name}
                  className={`clarity-option ${filters.clarity.includes(clarity.name) ? 'selected' : ''}`}
                  onClick={() => toggleArrayFilter('clarity', clarity.name)}
                >
                  <img src={clarity.image} alt={clarity.name} className="clarity-image" />
                  <div className="clarity-info">
                    <span className="clarity-name">{clarity.name}</span>
                    <span className="clarity-description">{clarity.description}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Color Section */}
          <div className="filter-section">
            <div className="section-header">
              <h3 className="section-title">color</h3>
              <svg width="19" height="4" viewBox="0 0 19 4" fill="none">
                <path d="M1 2.04688H18M9.5 1.95312V2" stroke="#030303" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="color-grid">
              {colorOptions.map(color => (
                <button
                  key={color.name}
                  className={`color-option ${filters.color.includes(color.name) ? 'selected' : ''}`}
                  onClick={() => toggleArrayFilter('color', color.name)}
                >
                  <img src={color.image} alt={color.name} className="color-image" />
                  <div className="color-info">
                    <span className="color-name">{color.name}</span>
                    <span className="color-description">{color.description}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Fancy Colors Section */}
          <div className="filter-section">
            <div className="section-header">
              <h3 className="section-title">fancy Colors</h3>
              <svg width="19" height="4" viewBox="0 0 19 4" fill="none">
                <path d="M1 1.98535H18M9.5 2V2.01489" stroke="#030303" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="fancy-colors">
              {fancyColorOptions.map(color => (
                <button
                  key={color.name}
                  className={`fancy-color-option ${filters.fancyColors.includes(color.name) ? 'selected' : ''}`}
                  onClick={() => toggleArrayFilter('fancyColors', color.name)}
                >
                  <img src={color.image} alt={color.name} className="fancy-color-image" />
                  <span className="fancy-color-name">{color.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Ratio Section */}
          <div className="filter-section">
            <div className="section-header">
              <h3 className="section-title">Ratio</h3>
              <svg width="19" height="2" viewBox="0 0 19 2" fill="none">
                <path d="M1 1H18" stroke="#030303" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="section-description">
              Ratio describes the proportions of a diamond It measures length over width when viewed from the top and is considered a matter of personal preference.
            </p>
            <RangeSlider
              min={0}
              max={500}
              value={filters.ratioRange}
              onChange={(value) => updateFilters({ ratioRange: value })}
              unit="$"
            />
          </div>

          {/* Table Section */}
          <div className="filter-section">
            <div className="section-header">
              <h3 className="section-title">table</h3>
              <svg width="19" height="4" viewBox="0 0 19 4" fill="none">
                <path d="M1 1.9375H18M9.5 2V2.0625" stroke="#030303" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="section-description">
              The table describes the top, flat surface of the diamond. Table % is calculated as the table width divided by the girdle diameter.
            </p>
            <RangeSlider
              min={4}
              max={88}
              value={filters.tableRange}
              onChange={(value) => updateFilters({ tableRange: value })}
              unit=""
              formatValue={(val) => `${val}%`}
            />
          </div>

          {/* Depth Section */}
          <div className="filter-section">
            <div className="section-header">
              <h3 className="section-title">Depth</h3>
              <svg width="19" height="4" viewBox="0 0 19 4" fill="none">
                <path d="M1 2.03125L9.5 2M18 2.03125L9.5 2M9.5 2V1.96875" stroke="#030303" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="section-description">
              The overall height of the diamond. Depth % is calculated as the height of the diamond divided by the girdle diameter.
            </p>
            <RangeSlider
              min={34}
              max={100}
              value={filters.depthRange}
              onChange={(value) => updateFilters({ depthRange: value })}
              unit=""
              formatValue={(val) => `${val}%`}
            />
          </div>

          {/* Sorting Section */}
          <div className="filter-section">
            <div className="section-header">
              <h3 className="section-title">Sorting By</h3>
              <svg width="19" height="4" viewBox="0 0 19 4" fill="none">
                <path d="M1 1.96875H18M9.5 2.03125V2" stroke="#030303" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="sorting-options">
              {sortingOptions.map(option => (
                <button
                  key={option}
                  className={`sorting-option ${filters.sortBy === option ? 'selected' : ''}`}
                  onClick={() => updateFilters({ sortBy: option })}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="clear-filters-btn" onClick={clearFilters}>
            Clear Filters
          </button>
          <button className="apply-filters-btn" onClick={applyFilters}>
            Apply Filters
          </button>
        </div>
      </div>

      <style>{`
        .filters-modal {
          position: fixed;
          top: 0;
          right: 0;
          width: 717px;
          height: 100vh;
          max-width: 100vw;
          margin: 0;
          padding: 0;
          border: none;
          background: #fff;
          box-shadow: 0 4px 22px 0 rgba(0, 0, 0, 0.25);
          overflow: hidden;
        }

        .filters-modal::backdrop {
          background: rgba(0, 0, 0, 0.5);
        }

        .filters-modal-container {
          display: flex;
          width: 100%;
          height: 100%;
          padding: 69px 28px;
          flex-direction: column;
          align-items: center;
          gap: 66px;
          overflow-y: auto;
        }

        .filters-modal-container .filters-header {
          display: flex;
          width: 649px;
          flex-direction: column;
          align-items: flex-start;
          gap: 48px;
        }

        .filters-modal-container .filters-header-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          align-self: stretch;
        }

        .filters-modal-container .filters-title-section {
          display: flex;
          width: 369px;
          flex-direction: column;
          align-items: flex-start;
          gap: 45px;
        }

        .filters-modal-container .filters-title {
          align-self: stretch;
          color: #000;
          font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 36px;
          font-weight: 500;
          line-height: normal;
          margin: 0;
        }

        .filters-modal-container .priority-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 15px;
          align-self: stretch;
        }

        .filters-modal-container .priority-title {
          align-self: stretch;
          color: #000;
          font-family: 'EB Garamond', -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 24px;
          font-weight: 400;
          line-height: normal;
          margin: 0;
        }

        .filters-modal-container .priority-options {
          display: flex;
          align-items: flex-start;
          gap: 15px;
        }

        .filters-modal-container .priority-btn {
          display: flex;
          padding: 8px 16px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          border-radius: 4px;
          border: 1px solid rgba(139, 139, 139, 0.32);
          background: transparent;
          color: #000;
          font-family: 'EB Garamond', -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 18px;
          font-weight: 400;
          line-height: normal;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filters-modal-container .priority-btn.selected {
          background: #50056E;
          color: #fff;
          border-color: #50056E;
        }

        .filters-modal-container .close-btn {
          display: flex;
          padding: 13px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          background: transparent;
          border: none;
          cursor: pointer;
        }

        .filters-modal-container .diamond-type-toggle {
          display: flex;
          height: 66px;
          justify-content: center;
          align-items: center;
          align-self: stretch;
          border: 1px solid #000;
        }

        .filters-modal-container .diamond-type-btn {
          display: flex;
          height: 66px;
          padding: 0 17px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex: 1 0 0;
          background: transparent;
          border: none;
          color: #3C3C3C;
          text-align: center;
          font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 18px;
          font-weight: 400;
          line-height: normal;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filters-modal-container .diamond-type-btn.active {
          background: #50056E;
          color: #FFF;
        }

        .filters-modal-container .filters-content {
          display: flex;
          width: 633px;
          flex-direction: column;
          align-items: flex-start;
          gap: 29px;
        }

        .filters-modal-container .filter-section {
          display: flex;
          padding: 18px 0;
          flex-direction: column;
          align-items: flex-start;
          gap: 25px;
          align-self: stretch;
          border-bottom: 0.8px solid #000;
        }

        .filters-modal-container .section-header {
          display: flex;
          width: 633px;
          justify-content: space-between;
          align-items: center;
        }

        .filters-modal-container .section-title {
          color: #000;
          text-align: center;
          font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 24px;
          font-weight: 400;
          line-height: normal;
          text-transform: lowercase;
          margin: 0;
        }

        .filters-modal-container .section-description {
          color: #6E6E6E;
          font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 18px;
          font-weight: 400;
          line-height: normal;
          margin: 0;
        }

        .filters-modal-container .section-description .learn-more {
          color: #50056E;
          text-decoration: underline;
        }

        .filters-modal-container .shape-grid {
          display: flex;
          width: 633px;
          justify-content: space-between;
          align-items: center;
          align-content: center;
          row-gap: 15px;
          flex-wrap: wrap;
        }

        .filters-modal-container .shape-option {
          display: flex;
          width: 142px;
          height: 155px;
          padding: 0 5px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 4px;
          border: 1px solid rgba(217, 217, 217, 0.41);
          background: rgba(217, 217, 217, 0.27);
          cursor: pointer;
          transition: all 0.2s ease;
          flex-direction: column;
        }

        .filters-modal-container .shape-option.selected {
          border-color: #1D0129;
          background: transparent;
        }

        .filters-modal-container .shape-option.selected .shape-name {
          color: #50056E;
        }

        .filters-modal-container .shape-image {
          width: 75px;
          height: 75px;
          object-fit: contain;
        }

        .filters-modal-container .shape-name {
          color: #000;
          text-align: center;
          font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 18px;
          font-weight: 400;
          line-height: normal;
        }

        .filters-modal-container .range-slider-section {
          display: flex;
          height: 126px;
          padding-bottom: 27px;
          flex-direction: column;
          align-items: flex-start;
          gap: 30px;
          align-self: stretch;
        }

        .filters-modal-container .range-slider-track {
          display: flex;
          padding: 0 7px;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          align-self: stretch;
          border-radius: 5px;
          background: rgba(22, 57, 80, 0.10);
          position: relative;
          height: 24px;
        }

        .filters-modal-container .range-slider-fill {
          height: 10px;
          border-radius: 5px;
          background: #50056E;
          position: absolute;
          top: 7px;
        }

        .filters-modal-container .range-slider-thumb {
          width: 25px;
          height: 24px;
          border-radius: 12px;
          background: #50056E;
          border: 4px solid #50056E;
          position: absolute;
          top: 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .filters-modal-container .range-slider-thumb::after {
          content: '';
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #50056E;
        }

        .filters-modal-container .range-inputs {
          display: flex;
          padding: 13px 0;
          align-items: center;
          gap: 22px;
          flex: 1 0 0;
          align-self: stretch;
        }

        .filters-modal-container .range-input {
          display: flex;
          height: 61px;
          padding: 10px 12px;
          align-items: center;
          gap: 10px;
          flex: 1 0 0;
          border-radius: 8px;
          border: 1px solid #8B8B8B;
          color: #8B8B8B;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: normal;
          background: transparent;
        }

        .filters-modal-container .range-separator {
          width: 8px;
          height: 1px;
          border-radius: 1px;
          background: #8B8B8B;
        }

        .filters-modal-container .cut-options {
          display: flex;
          align-items: flex-start;
          gap: 25px;
          align-self: stretch;
        }

        .filters-modal-container .cut-option {
          display: flex;
          height: 155px;
          padding: 0 5px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex: 1 0 0;
          border-radius: 4px;
          border: 1px solid rgba(217, 217, 217, 0.41);
          background: rgba(217, 217, 217, 0.27);
          cursor: pointer;
          transition: all 0.2s ease;
          flex-direction: column;
        }

        .filters-modal-container .cut-option.selected {
          border-color: #1D0129;
          background: transparent;
        }

        .filters-modal-container .cut-image {
          width: 123px;
          height: 90px;
          object-fit: contain;
        }

        .filters-modal-container .cut-name {
          color: #000;
          text-align: center;
          font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 18px;
          font-weight: 400;
          line-height: normal;
        }

        .filters-modal-container .clarity-grid {
          display: flex;
          align-items: flex-start;
          align-content: flex-start;
          gap: 25px;
          align-self: stretch;
          flex-wrap: wrap;
        }

        .filters-modal-container .clarity-option {
          display: flex;
          height: 203px;
          padding: 22px 5px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex: 1 0 0;
          border-radius: 4px;
          border: 1px solid rgba(217, 217, 217, 0.41);
          background: rgba(217, 217, 217, 0.27);
          cursor: pointer;
          transition: all 0.2s ease;
          flex-direction: column;
          min-width: 180px;
        }

        .filters-modal-container .clarity-option.selected {
          border-color: #1D0129;
          background: transparent;
        }

        .filters-modal-container .clarity-image {
          width: 120px;
          height: 88px;
          object-fit: contain;
        }

        .filters-modal-container .clarity-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .filters-modal-container .clarity-name {
          color: #000;
          text-align: center;
          font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 18px;
          font-weight: 400;
          line-height: normal;
        }

        .filters-modal-container .clarity-description {
          width: 151px;
          color: #8B8B8B;
          text-align: center;
          font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: normal;
        }

        .filters-modal-container .color-grid {
          display: flex;
          align-items: flex-start;
          align-content: flex-start;
          gap: 25px;
          align-self: stretch;
          flex-wrap: wrap;
        }

        .filters-modal-container .color-option {
          display: flex;
          height: 203px;
          padding: 22px 5px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex: 1 0 0;
          border-radius: 4px;
          border: 1px solid rgba(217, 217, 217, 0.41);
          background: rgba(217, 217, 217, 0.27);
          cursor: pointer;
          transition: all 0.2s ease;
          flex-direction: column;
          min-width: 180px;
        }

        .filters-modal-container .color-option.selected {
          border-color: #1D0129;
          background: transparent;
        }

        .filters-modal-container .color-image {
          width: 153px;
          height: 112px;
          object-fit: contain;
        }

        .filters-modal-container .color-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .filters-modal-container .color-name {
          color: #000;
          text-align: center;
          font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 18px;
          font-weight: 400;
          line-height: normal;
        }

        .filters-modal-container .color-description {
          width: 151px;
          color: #8B8B8B;
          text-align: center;
          font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: normal;
        }

        .filters-modal-container .fancy-colors {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .filters-modal-container .fancy-color-option {
          display: flex;
          width: 142px;
          height: 155px;
          padding: 0 5px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          border-radius: 4px;
          border: 1px solid rgba(217, 217, 217, 0.41);
          background: rgba(217, 217, 217, 0.27);
          cursor: pointer;
          transition: all 0.2s ease;
          flex-direction: column;
        }

        .filters-modal-container .fancy-color-option.selected {
          border-color: #1D0129;
          background: transparent;
        }

        .filters-modal-container .fancy-color-image {
          width: 90px;
          height: 90px;
          object-fit: contain;
        }

        .filters-modal-container .fancy-color-name {
          color: #000;
          text-align: center;
          font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 18px;
          font-weight: 400;
          line-height: normal;
        }

        .filters-modal-container .sorting-options {
          display: flex;
          width: 636px;
          height: 136px;
          align-items: flex-start;
          align-content: flex-start;
          gap: 16px;
          flex-shrink: 0;
          flex-wrap: wrap;
        }

        .filters-modal-container .sorting-option {
          display: flex;
          padding: 10px 12px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          border-radius: 8px;
          border: 1px solid #8B8B8B;
          background: transparent;
          color: #8B8B8B;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: normal;
          cursor: pointer;
          transition: all 0.2s ease;
          height: 61px;
        }

        .filters-modal-container .sorting-option.selected {
          background: #50056E;
          color: #FFF;
          border-color: #50056E;
        }

        .filters-modal-container .action-buttons {
          display: flex;
          width: 649px;
          align-items: center;
          gap: 26px;
        }

        .filters-modal-container .clear-filters-btn,
        .filters-modal-container .apply-filters-btn {
          display: flex;
          height: 65px;
          padding: 10px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex: 1 0 0;
          border-radius: 4px;
          font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 24px;
          font-weight: 400;
          line-height: normal;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filters-modal-container .clear-filters-btn {
          border: 1px solid #000;
          background: transparent;
          color: #000;
        }

        .filters-modal-container .apply-filters-btn {
          border: 1px solid #50056E;
          background: transparent;
          color: #50056E;
        }

        .filters-modal-container .clear-filters-btn:hover {
          background: #f5f5f5;
        }

        .filters-modal-container .apply-filters-btn:hover {
          background: #50056E;
          color: #fff;
        }
      `}</style>
    </dialog>
  );
}
