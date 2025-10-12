import React from "react";
import { DiamondFilters } from "../../components/DiamondFilters";
import "./diamonds.css";

export const DiamondsPage: React.FC = () => {
  const handleFiltersChange = (filters: any) => {
    console.log("Filters changed:", filters);
    // Here you would typically update your diamond search/filter logic
  };

  return (
    <div className="diamondsPage">
      {/* Hero Section with Selected Setting */}
      <div className="heroSection">
        <div className="heroContent">
          {/* Setting Title and Separator */}
          <div className="settingTitleGroup">
            <span className="settingTitle">Selected Setting</span>
            {/* Arrow SVG - visibility controlled by CSS */}
            <svg
              width="109"
              height="16"
              viewBox="0 0 109 16"
              fill="none"
              className="heroArrow"
            >
              <path
                d="M108.207 8.70711C108.598 8.31658 108.598 7.68342 108.207 7.29289L101.843 0.928932C101.453 0.538408 100.819 0.538408 100.429 0.928932C100.038 1.31946 100.038 1.95262 100.429 2.34315L106.086 8L100.429 13.6569C100.038 14.0474 100.038 14.6805 100.429 15.0711C100.819 15.4616 101.453 15.4616 101.843 15.0711L108.207 8.70711ZM0.5 8V9H107.5V8V7H0.5V8Z"
                fill="white"
              />
            </svg>
          </div>

          {/* Ring Image and Text Details */}
          <div className="ringDetailsContainer">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/69ecd53d15eca82bc413514589654da74936100a?width=458"
              alt="Classic Solitaire Ring"
              className="ringImage"
            />

            <div className="ringTextBox">
              <h2 className="ringHeading">Classic Solitaire Ring</h2>
              <div className="ringAttributes">
                <span className="ringAttribute">Metal : Rose Gold</span>
                <span className="ringAttribute">Shape : Round</span>
              </div>
            </div>
          </div>

          {/* Modify Button */}
          <button className="modifyButton">
            <span className="modifyButtonText">Modify</span>
          </button>
        </div>
      </div>

      {/* Diamond Filters Section */}
      <DiamondFilters onFiltersChange={handleFiltersChange} />

      {/* Diamond Grid */}
      <div className="diamondGridWrapper">
        <div className="diamondGrid">
          {Array.from({ length: 20 }, (_, i) => (
            <DiamondCard key={i} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Helper component for the Diamond Card placeholder
const DiamondCard = ({ index }: { index: number }) => (
  <div className="diamondCard">
    {/* Diamond Image Container */}
    <div className="cardImageBox">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/ed4074e7dfec4bfb335600d4849111aa9bbf662f?width=776"
        alt={`Diamond ${index}`}
        className="cardImage"
      />
    </div>

    {/* Diamond Details */}
    <div className="cardDetails">
      <h3 className="cardTitle">2.01 Carat Round</h3>
      <p className="cardPrice">From $3,793</p>
    </div>

    {/* 4Cs Details */}
    <div className="card4Cs">
      <span>Color : D</span>
      <span>Clarity : VVS2</span>
      <span>Carat : 2.07</span>
    </div>
  </div>
);
