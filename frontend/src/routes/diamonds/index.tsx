import React, { useState } from "react";
import { DiamondFilters } from "../../components/DiamondFilters";
import { SelectedSettingBanner } from "../../components/SelectedSettingBanner";
import "./diamonds.css";
import { useNavigate } from "react-router-dom";
import DiamondFiltersModal from "../../components/DiamondFiltersModal";

const DiamondsPage: React.FC = () => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const navigate = useNavigate();
  const handleFiltersChange = (filters: any) => {
    console.log("Filters changed:", filters);
    // Here you would typically update your diamond search/filter logic
  };

  const handleModify = () => {
    navigate("/rings/1");
  };

  return (
    <div className="diamondsPage">
      {/* Hero Section with Selected Setting */}
      <SelectedSettingBanner
        metal="Rose Gold"
        shape="Round"
        onModify={handleModify}
      />

      {/* Diamond Filters Section */}
      <DiamondFilters
        onFiltersChange={handleFiltersChange}
        handleShowFilterModal={() => setShowFilterModal(true)}
      />

      {/* Diamond Grid */}
      <div className="diamondGridWrapper">
        <div className="diamondGrid">
          {Array.from({ length: 20 }, (_, i) => (
            <DiamondCard
              key={i}
              index={i}
              onClick={() => navigate("/diamonds/1")}
            />
          ))}
        </div>
      </div>

      <DiamondFiltersModal
        show={showFilterModal}
        onClose={() => setShowFilterModal(false)}
      />
    </div>
  );
};

export default DiamondsPage;

// Helper component for the Diamond Card placeholder
const DiamondCard = ({
  index,
  onClick,
}: {
  index: number;
  onClick?: () => void;
}) => (
  <div className="diamondCard" onClick={onClick}>
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
