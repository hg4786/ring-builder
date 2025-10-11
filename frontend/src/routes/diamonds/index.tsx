import React from "react";
import { DiamondFilters } from "../../components/DiamondFilters";

export const DiamondsPage: React.FC = () => {
  const handleFiltersChange = (filters: any) => {
    console.log("Filters changed:", filters);
    // Here you would typically update your diamond search/filter logic
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>
      {/* Hero Section with Selected Setting */}
      <div
        style={{
          display: "flex",
          width: "100%",
          padding: "19px 0",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          background: "linear-gradient(180deg, #000 -30.8%, #2C003E 100%)",
          height: "152px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "1570px",
            padding: "0 11px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            borderRadius: "22px",
            border: "1px solid #FFF",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <span
              style={{
                fontFamily:
                  "EB Garamond, -apple-system, Roboto, Helvetica, sans-serif",
                fontSize: "36px",
                color: "#FFF",
              }}
            >
              Selected Setting
            </span>
            <svg width="109" height="16" viewBox="0 0 109 16" fill="none">
              <path
                d="M108.207 8.70711C108.598 8.31658 108.598 7.68342 108.207 7.29289L101.843 0.928932C101.453 0.538408 100.819 0.538408 100.429 0.928932C100.038 1.31946 100.038 1.95262 100.429 2.34315L106.086 8L100.429 13.6569C100.038 14.0474 100.038 14.6805 100.429 15.0711C100.819 15.4616 101.453 15.4616 101.843 15.0711L108.207 8.70711ZM0.5 8V9H107.5V8V7H0.5V8Z"
                fill="white"
              />
            </svg>

            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/69ecd53d15eca82bc413514589654da74936100a?width=458"
                alt="Classic Solitaire Ring"
                style={{ width: "229px", height: "114px" }}
              />
              <div
                style={{
                  display: "flex",
                  width: "560px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "5px",
                }}
              >
                <h2
                  style={{
                    fontFamily:
                      "EB Garamond, -apple-system, Roboto, Helvetica, sans-serif",
                    fontSize: "36px",
                    color: "#FFF",
                    margin: 0,
                  }}
                >
                  Classic Solitaire Ring
                </h2>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "28px" }}
                >
                  <span
                    style={{
                      fontFamily:
                        "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                      fontSize: "20px",
                      color: "#FFF",
                    }}
                  >
                    Metal : Rose Gold
                  </span>
                  <span
                    style={{
                      fontFamily:
                        "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                      fontSize: "20px",
                      color: "#FFF",
                    }}
                  >
                    Shape : Round
                  </span>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                width: "234px",
                padding: "10px",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "8px",
                background: "#FFF",
              }}
            >
              <span
                style={{
                  fontFamily:
                    "EB Garamond, -apple-system, Roboto, Helvetica, sans-serif",
                  fontSize: "24px",
                  color: "#50056E",
                }}
              >
                Modify
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Diamond Filters Section */}
      <DiamondFilters onFiltersChange={handleFiltersChange} />

      {/* Placeholder for diamond grid - you would replace this with actual diamond cards */}
      <div
        style={{
          display: "flex",
          width: "100%",
          padding: "40px",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "30px",
            maxWidth: "1875px",
          }}
        >
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "26px",
                padding: "24px 0",
              }}
            >
              <div
                style={{
                  width: "459px",
                  height: "460px",
                  background: "#FAFAFA",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/ed4074e7dfec4bfb335600d4849111aa9bbf662f?width=776"
                  alt="Diamond"
                  style={{ width: "388px", height: "389px" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "3px",
                }}
              >
                <h3
                  style={{
                    fontFamily:
                      "EB Garamond, -apple-system, Roboto, Helvetica, sans-serif",
                    fontSize: "24px",
                    color: "#000",
                    margin: 0,
                  }}
                >
                  2.01 Carat Round
                </h3>
                <p
                  style={{
                    fontFamily:
                      "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                    fontSize: "24px",
                    color: "#2C003E",
                    margin: 0,
                  }}
                >
                  From $3,793
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "42px",
                }}
              >
                <span
                  style={{
                    fontFamily:
                      "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                    fontSize: "20px",
                    color: "#000",
                  }}
                >
                  Color : D
                </span>
                <span
                  style={{
                    fontFamily:
                      "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                    fontSize: "20px",
                    color: "#000",
                  }}
                >
                  Clarity : VVS2
                </span>
                <span
                  style={{
                    fontFamily:
                      "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                    fontSize: "20px",
                    color: "#000",
                  }}
                >
                  Carat : 2.07
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
