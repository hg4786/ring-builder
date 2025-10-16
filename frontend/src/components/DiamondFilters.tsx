import React, { useState } from "react";
import "./DiamondFilters.css";
import { DualRangeSlider } from "./DualRangeSlider";
import { allDiamondShapesList } from "./DiamondFiltersModal";

interface DiamondFiltersProps {
  onFiltersChange?: (filters: FilterState) => void;
  handleShowFilterModal: () => void;
}

export interface FilterState {
  diamondType: "natural" | "lab";
  colorType: "white" | "fancy";
  shape: string[];
  colorGrade: string[];
  clarity: string[];
  caratRange: [number, number];
  quickship: boolean;
  sortBy: string;
  viewMode: "grid" | "list";
}

const colorGrades = ["D", "E", "F", "G", "H", "I", "J", "K", "L"];
const clarityGrades = ["FL", "VVS", "VS", "SI"];

export const DiamondFilters: React.FC<DiamondFiltersProps> = ({
  onFiltersChange,
  handleShowFilterModal,
}) => {
  const [filters, setFilters] = useState<FilterState>({
    diamondType: "natural",
    colorType: "white",
    shape: ["Round"],
    colorGrade: [],
    clarity: [],
    caratRange: [0, 500],
    quickship: false,
    sortBy: "Popular",
    viewMode: "grid",
  });

  const updateFilters = (newFilters: Partial<FilterState>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    onFiltersChange?.(updatedFilters);
  };

  const toggleColorGrade = (grade: string) => {
    const newGrades = filters.colorGrade.includes(grade)
      ? filters.colorGrade.filter((g) => g !== grade)
      : [...filters.colorGrade, grade];
    updateFilters({ colorGrade: newGrades });
  };

  const toggleClarity = (clarity: string) => {
    const newClarity = filters.clarity.includes(clarity)
      ? filters.clarity.filter((c) => c !== clarity)
      : [...filters.clarity, clarity];
    updateFilters({ clarity: newClarity });
  };

  const toggleArrayFilter = <T extends string>(
    key: keyof Pick<FilterState, "shape">,
    value: T
  ) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((item) => item !== value)
        : [...prev[key], value],
    }));
  };

  return (
    <div className="diamond-filters">
      <div className="filters-header">
        <h2 className="filters-title">
          Use the filters below to design your perfect engagement ring
        </h2>

        <div className="diamond-type-selector">
          <div className="diamond-type-container">
            <button
              className={`diamond-type-btn ${filters.diamondType === "natural" ? "active" : ""}`}
              onClick={() => updateFilters({ diamondType: "natural" })}
            >
              NATURAL DIAMONDS
            </button>
            <button
              className={`diamond-type-btn ${filters.diamondType === "lab" ? "active" : ""}`}
              onClick={() => updateFilters({ diamondType: "lab" })}
            >
              LAB DIAMONDS
            </button>
          </div>
        </div>
      </div>

      <div className="shape-grid">
        {allDiamondShapesList.map((shape) => (
          <button
            key={shape.name}
            className={`shape-option ${filters.shape.includes(shape.name) ? "selected" : ""}`}
            onClick={() => toggleArrayFilter("shape", shape.name)}
          >
            <img src={shape.image} alt={shape.name} className="shape-image" />
            <span className="shape-name">{shape.name}</span>
          </button>
        ))}
      </div>

      <div className="filter-controls">
        <div className="filter-sections">
          <div className="color-section">
            <div className="color-header">
              <span className="filter-label">Color:</span>
              <div className="color-type-selector">
                <button
                  className={`color-type-btn ${filters.colorType === "white" ? "active" : ""}`}
                  onClick={() => updateFilters({ colorType: "white" })}
                >
                  White Diamonds
                </button>
                <button
                  className={`color-type-btn ${filters.colorType === "fancy" ? "active" : ""}`}
                  onClick={() => updateFilters({ colorType: "fancy" })}
                >
                  Fancy
                </button>
              </div>
            </div>
            <div className="color-grades">
              {colorGrades.map((grade) => (
                <button
                  key={grade}
                  className={`grade-btn ${filters.colorGrade.includes(grade) ? "selected" : ""}`}
                  onClick={() => toggleColorGrade(grade)}
                >
                  {grade}
                </button>
              ))}
            </div>
          </div>

          <div className="clarity-section">
            <span className="filter-label">Clarity:</span>
            <div className="clarity-grades">
              {clarityGrades.map((clarity) => (
                <button
                  key={clarity}
                  className={`grade-btn ${filters.clarity.includes(clarity) ? "selected" : ""}`}
                  onClick={() => toggleClarity(clarity)}
                >
                  {clarity}
                </button>
              ))}
            </div>
          </div>

          <DualRangeSlider
            label="Carat:"
            min={0}
            max={500}
            defaultValue={filters.caratRange}
            onChange={(value) => updateFilters({ caratRange: value })}
          />
          {/* <div className="carat-section">
            <div className="carat-header">
              <span className="filter-label">Carat:</span>
            </div>
            <div className="carat-range">
              <div className="range-inputs">
                <input
                  type="text"
                  placeholder="$0"
                  className="range-input"
                  readOnly
                />
                <div className="range-separator"></div>
                <input
                  type="text"
                  placeholder="$500"
                  className="range-input"
                  readOnly
                />
              </div>
              <div className="range-slider-container">
                <div className="slider-track">
                  <div className="slider-range"></div>
                  <div className="slider-handle left"></div>
                  <div className="slider-handle right"></div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <div className="filter-bottom-controls">
        <div className="left-controls">
          <button
            className="advance-filter-btn"
            onClick={handleShowFilterModal}
          >
            <div>
              <span>Advance Filter</span>
              <svg className="dropdown-icon" viewBox="0 0 6 9" fill="none">
                <path
                  d="M5.5 4.5L1.13636 9L0.5 8.41121L4.31818 4.5L0.5 0.588785L1.13636 -2.78164e-08L5.5 4.5Z"
                  fill="black"
                />
              </svg>
            </div>
          </button>
        </div>

        <div className="right-controls">
          {/* <div className="quickship-control">
            <svg className="quickship-icon" viewBox="0 0 137 27" fill="none">
              <path
                d="M38.2885 3.93587C35.9436 1.59689 32.8197 0.203118 29.5127 0.0205153C26.2058 -0.162088 22.9473 0.879259 20.3592 2.94585H10.8223C10.6416 2.94585 10.4684 3.01762 10.3406 3.14537C10.2129 3.27312 10.1411 3.44639 10.1411 3.62706C10.1411 3.80772 10.2129 3.98099 10.3406 4.10874C10.4684 4.23649 10.6416 4.30826 10.8223 4.30826H18.906C18.1513 5.11946 17.4999 6.02097 16.9668 6.99221H6.2537C6.07303 6.99221 5.89976 7.06398 5.77201 7.19173C5.64426 7.31948 5.57249 7.49275 5.57249 7.67342C5.57249 7.85408 5.64426 8.02735 5.77201 8.1551C5.89976 8.28285 6.07303 8.35462 6.2537 8.35462H16.3128C15.4882 10.379 15.1657 12.5728 15.3728 14.7489H10.8314C10.6507 14.7489 10.4775 14.8206 10.3497 14.9484C10.222 15.0761 10.1502 15.2494 10.1502 15.4301C10.1502 15.6107 10.222 15.784 10.3497 15.9118C10.4775 16.0395 10.6507 16.1113 10.8314 16.1113H15.5771C15.7522 16.9908 16.0154 17.8504 16.3628 18.6772H6.2537C6.07303 18.6772 5.89976 18.7489 5.77201 18.8767C5.64426 19.0044 5.57249 19.1777 5.57249 19.3584C5.57249 19.539 5.64426 19.7123 5.77201 19.84C5.89976 19.9678 6.07303 20.0396 6.2537 20.0396H17.0304C17.5467 20.9751 18.175 21.8444 18.9014 22.6281H4.60064C4.41997 22.6281 4.2467 22.6999 4.11895 22.8277C3.9912 22.9554 3.91943 23.1287 3.91943 23.3094C3.91943 23.49 3.9912 23.6633 4.11895 23.791C4.2467 23.9188 4.41997 23.9906 4.60064 23.9906H19.9096C20.0289 23.9891 20.146 23.9579 20.2502 23.8997C22.923 26.1162 26.3487 27.2145 29.8121 26.9652C33.2754 26.716 36.5085 25.1385 38.8364 22.5621C41.1643 19.9857 42.4069 16.6097 42.3048 13.1389C42.2027 9.66813 40.7638 6.37096 38.2885 3.93587ZM37.3258 22.0151C35.6334 23.706 33.4777 24.8573 31.1311 25.3233C28.7846 25.7893 26.3525 25.5492 24.1424 24.6332C21.9324 23.7172 20.0435 22.1666 18.7145 20.1772C17.3856 18.1879 16.6763 15.8492 16.6763 13.4569C16.6763 11.0645 17.3856 8.7258 18.7145 6.73647C20.0435 4.74715 21.9324 3.19648 24.1424 2.28051C26.3525 1.36453 28.7846 1.12437 31.1311 1.59039C33.4777 2.0564 35.6334 3.20766 37.3258 4.89864C39.5912 7.17072 40.8633 10.2483 40.8633 13.4569C40.8633 16.6654 39.5912 19.743 37.3258 22.0151Z"
                fill="#C79F4B"
              />
              <path
                d="M28.7695 3.32281C26.7656 3.32281 24.8067 3.91703 23.1406 5.03033C21.4744 6.14363 20.1758 7.726 19.4089 9.57734C18.6421 11.4287 18.4414 13.4659 18.8324 15.4312C19.2233 17.3966 20.1883 19.2019 21.6052 20.6189C23.0222 22.0358 24.8275 23.0008 26.7929 23.3917C28.7583 23.7827 30.7954 23.582 32.6468 22.8152C34.4981 22.0483 36.0805 20.7497 37.1938 19.0835C38.3071 17.4174 38.9013 15.4585 38.9013 13.4546C38.8977 10.7686 37.8291 8.19363 35.9298 6.29433C34.0305 4.39503 31.4555 3.32642 28.7695 3.32281ZM29.4507 22.174V21.3793C29.4507 21.1986 29.3789 21.0254 29.2512 20.8976C29.1234 20.7699 28.9502 20.6981 28.7695 20.6981C28.5888 20.6981 28.4156 20.7699 28.2878 20.8976C28.1601 21.0254 28.0883 21.1986 28.0883 21.3793V22.174C26.01 22.0093 24.0583 21.1098 22.5829 19.6369C21.1075 18.164 20.2047 16.2138 20.0364 14.1358H20.8448C21.0255 14.1358 21.1987 14.064 21.3265 13.9363C21.4542 13.8085 21.526 13.6353 21.526 13.4546C21.526 13.2739 21.4542 13.1007 21.3265 12.9729C21.1987 12.8452 21.0255 12.7734 20.8448 12.7734H20.0364C20.2007 10.6927 21.1018 8.73873 22.5777 7.26284C24.0536 5.78694 26.0075 4.88586 28.0883 4.72156V5.52992C28.0883 5.71059 28.1601 5.88385 28.2878 6.01161C28.4156 6.13936 28.5888 6.21113 28.7695 6.21113C28.9502 6.21113 29.1234 6.13936 29.2512 6.01161C29.3789 5.88385 29.4507 5.71059 29.4507 5.52992V4.72156C31.5315 4.88586 33.4854 5.78694 34.9613 7.26284C36.4372 8.73873 37.3382 10.6927 37.5026 12.7734H36.6942C36.5135 12.7734 36.3403 12.8452 36.2125 12.9729C36.0848 13.1007 36.013 13.2739 36.013 13.4546C36.013 13.6353 36.0848 13.8085 36.2125 13.9363C36.3403 14.064 36.5135 14.1358 36.6942 14.1358H37.5026C37.3343 16.2138 36.4315 18.164 34.9561 19.6369C33.4807 21.1098 31.529 22.0093 29.4507 22.174Z"
                fill="#C79F4B"
              />
              <path
                d="M32.5118 15.0441L29.6553 13.2275L32.6208 7.32376C32.6751 7.16626 32.6699 6.99429 32.606 6.8404C32.5421 6.68651 32.424 6.56137 32.2741 6.48865C32.1242 6.41593 31.9528 6.40068 31.7924 6.44578C31.632 6.49088 31.4937 6.5932 31.4037 6.73339L28.1611 13.1503C28.085 13.3009 28.0675 13.4744 28.112 13.6372C28.1564 13.7999 28.2597 13.9404 28.4018 14.0314L31.7761 16.1931C31.8847 16.2619 32.0108 16.2982 32.1394 16.2975C32.2867 16.2981 32.4302 16.251 32.5484 16.1631C32.6666 16.0753 32.7532 15.9515 32.7952 15.8103C32.8371 15.6691 32.8322 15.5182 32.7811 15.38C32.73 15.2419 32.6355 15.124 32.5118 15.0441Z"
                fill="#C79F4B"
              />
            </svg>
            <span>Quickship</span>
          </div> */}

          <div className="sort-control">
            <span className="sort-label">Sort : </span>
            <span className="sort-value">Popular</span>
            <svg className="dropdown-icon" viewBox="0 0 9 5" fill="none">
              <path
                d="M4.5 5L0 0.636364L0.588786 0L4.5 3.81818L8.41121 0L9 0.636364L4.5 5Z"
                fill="black"
              />
            </svg>
          </div>
        </div>

        <div className="view-controls">
          <button
            className={`view-btn ${filters.viewMode === "grid" ? "active" : ""}`}
            onClick={() => updateFilters({ viewMode: "grid" })}
          >
            <svg viewBox="0 0 63 41" fill="none">
              <path
                d="M22.9795 21.8076H28.7109C29.5269 21.8078 30.1912 22.4722 30.1914 23.2881V29.0195C30.1912 29.8355 29.5269 30.4998 28.7109 30.5H22.9795C22.1636 30.4998 21.4992 29.8355 21.499 29.0195V23.2881C21.4993 22.4722 22.1636 21.8079 22.9795 21.8076ZM34.2871 21.8076H40.0186C40.8345 21.8078 41.4988 22.4722 41.499 23.2881V29.0195C41.4988 29.8355 40.8345 30.4998 40.0186 30.5H34.2871C33.4712 30.4997 32.8069 29.8355 32.8066 29.0195V23.2881C32.8069 22.4722 33.4712 21.8079 34.2871 21.8076ZM22.9795 22.4229C22.5018 22.4231 22.1145 22.8104 22.1143 23.2881V29.0195C22.1145 29.4973 22.5018 29.8845 22.9795 29.8848H28.7109C29.1887 29.8845 29.5759 29.4972 29.5762 29.0195V23.2881C29.5759 22.8103 29.1887 22.4231 28.7109 22.4229H22.9795ZM34.2871 22.4229C33.8094 22.4231 33.4221 22.8104 33.4219 23.2881V29.0195C33.4221 29.4973 33.8094 29.8845 34.2871 29.8848H40.0186C40.4963 29.8846 40.8836 29.4973 40.8838 29.0195V23.2881C40.8836 22.8103 40.4963 22.4231 40.0186 22.4229H34.2871ZM22.9795 10.5H28.7109C29.5268 10.5003 30.1912 11.1645 30.1914 11.9805V17.7119C30.1912 18.5278 29.5268 19.1921 28.7109 19.1924H22.9795C22.1636 19.1922 21.4993 18.5278 21.499 17.7119V11.9805C21.4992 11.1645 22.1635 10.5002 22.9795 10.5ZM34.2871 10.5H40.0186C40.8345 10.5002 41.4988 11.1645 41.499 11.9805V17.7119C41.4988 18.5278 40.8345 19.1921 40.0186 19.1924H34.2871C33.4712 19.1922 32.8069 18.5278 32.8066 17.7119V11.9805C32.8069 11.1645 33.4712 10.5002 34.2871 10.5ZM22.9795 11.1152C22.5017 11.1154 22.1145 11.5027 22.1143 11.9805V17.7119C22.1145 18.1896 22.5018 18.5769 22.9795 18.5771H28.7109C29.1886 18.5769 29.5759 18.1896 29.5762 17.7119V11.9805C29.576 11.5027 29.1886 11.1155 28.7109 11.1152H22.9795ZM34.2871 11.1152C33.8093 11.1155 33.4221 11.5027 33.4219 11.9805V17.7119C33.4221 18.1896 33.8094 18.5769 34.2871 18.5771H40.0186C40.4963 18.5769 40.8835 18.1896 40.8838 17.7119V11.9805C40.8836 11.5027 40.4963 11.1155 40.0186 11.1152H34.2871Z"
                fill="#2C003E"
              />
            </svg>
          </button>
          <button
            className={`view-btn ${filters.viewMode === "list" ? "active" : ""}`}
            onClick={() => updateFilters({ viewMode: "list" })}
          >
            <svg viewBox="0 0 38 31" fill="none">
              <path
                d="M8.83284 6C7.68178 6 6.74951 6.67123 6.74951 7.5C6.74951 8.32877 7.68178 9 8.83284 9H29.6662C30.8172 9 31.7495 8.32877 31.7495 7.5C31.7495 6.67123 30.8172 6 29.6662 6H8.83284Z"
                fill="#3C3C3C"
              />
              <path
                d="M8.83284 14C7.68178 14 6.74951 14.6712 6.74951 15.5C6.74951 16.3288 7.68178 17 8.83284 17H29.6662C30.8172 17 31.7495 16.3288 31.7495 15.5C31.7495 14.6712 30.8172 14 29.6662 14H8.83284Z"
                fill="#3C3C3C"
              />
              <path
                d="M6.74951 23.5C6.74951 22.6712 7.68178 22 8.83285 22H29.6662C30.8172 22 31.7495 22.6712 31.7495 23.5C31.7495 24.3288 30.8172 25 29.6662 25H8.83285C7.68178 25 6.74951 24.3288 6.74951 23.5Z"
                fill="#3C3C3C"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
