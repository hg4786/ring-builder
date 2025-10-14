import { useState } from "react";
import { ProductGallery } from "../../components/ProductGallery";
import { OptionSelector } from "../../components/OptionSelector";
import { ColorSelector } from "../../components/ColorSelector";
import { EmailForm } from "../../components/EmailForm";
import { diamondShapes } from "../../lib/constants";
import { ProductView } from "../../components/productView";
import { useNavigate } from "react-router-dom";
import StepModal from "../../components/StepModal";

const metals = [
  { name: "18k Yellow Gold", color: "#FFD700" },
  { name: "14k White Gold", color: "#E5E4E2" },
  { name: "18k Rose Gold", color: "#E0C0B1" },
  { name: "Platinum", color: "#E5E4E2" },
];

const bands = [
  { name: "Plain", color: "#E5E4E2" },
  { name: "Diamond", color: "#E5E4E2" },
];

export default function RingView() {
  const navigate = useNavigate();
  const [shape, setShape] = useState(diamondShapes[0].name);
  const [bandWidth, setBandWidth] = useState(diamondShapes[0].name);
  const [metal, setMetal] = useState("18k Yellow Gold");
  const [band, setBand] = useState("Plain");

  const [stepModalStep, setStepModalStep] = useState(0);

  return (
    <ProductView>
      <style>{`
        .ring-view-page.main-container {
          display: flex;
          gap: 2rem;
          max-width: calc(100% - 5rem);
          margin: 0 auto;
        }
        .ring-view-page .left-column {
          flex: 1 1 60%;
        }
        .ring-view-page .right-column {
          flex: 1 1 40%;
          display: flex;
          flex-direction: column;
        }
        .ring-view-page .reviews-section {
          background-color: #f9f9f9;
        }
        .ring-view-page .rings-grid, .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        @media (max-width: 992px) {
          .ring-view-page.main-container {
            flex-direction: column;
          }
          .ring-view-page .left-column, .right-column {
            flex: 1 1 100%;
          }
        }
      `}</style>

      <div className="ring-view-page main-container">
        <div className="left-column">
          <ProductGallery />
        </div>
        <div className="right-column">
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "500",
              margin: "0 0 0.5rem 0",
              fontFamily: '"Times New Roman", serif',
            }}
          >
            The Signature Oval Yellow Gold Engagement Ring
          </h1>
          <p style={{ margin: "0 0 1rem 0", fontSize: "1rem" }}>
            Classic Solitaire Ring
          </p>
          <p
            style={{
              margin: "0 0 2rem 0",
              fontSize: "1.2rem",
              fontWeight: "600",
            }}
          >
            From $16,570
          </p>

          <OptionSelector
            title="Shape"
            options={diamondShapes}
            selectedOption={shape}
            onSelectOption={setShape}
          />
          <OptionSelector
            title="Band Width"
            options={diamondShapes}
            selectedOption={bandWidth}
            onSelectOption={setBandWidth}
          />
          <ColorSelector
            title="Metal"
            options={metals}
            selectedOption={metal}
            onSelectOption={setMetal}
          />
          <ColorSelector
            title="Band"
            options={bands}
            selectedOption={band}
            onSelectOption={setBand}
          />

          <button
            style={{
              padding: "15px 0",
              backgroundColor: "#4A0D67",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              marginBottom: "1rem",
              fontSize: "1rem",
              fontWeight: "600",
            }}
            onClick={() => setStepModalStep(2)}
          >
            Select Stone For Your Ring
          </button>
          <button
            style={{
              padding: "15px 0",
              backgroundColor: "transparent",
              color: "#4A0D67",
              border: "1px solid #4A0D67",
              borderRadius: "4px",
              cursor: "pointer",
              marginBottom: "2rem",
              fontSize: "1rem",
              fontWeight: "600",
            }}
          >
            Book a Virtual Or In-Person Appointment
          </button>
          <EmailForm />
        </div>
      </div>

      <StepModal
        show={stepModalStep > 0}
        step={stepModalStep}
        totalStep={3}
        title="Select your Stone"
        description="Every love story shines differently — so should your ring. The right stone captures the moment and makes it unforgettable. Let’s find the perfect one for your setting."
        buttonText="Select Stone For Your Ring"
        onButtonClick={() => navigate("/diamonds")}
        onClose={() => setStepModalStep(0)}
      />
    </ProductView>
  );
}
