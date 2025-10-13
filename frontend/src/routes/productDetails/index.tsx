import { useState } from "react";
import { ProductGallery } from "../../components/ProductGallery";
import { OptionSelector } from "../../components/OptionSelector";
import { ColorSelector } from "../../components/ColorSelector";
import { EmailForm } from "../../components/EmailForm";
import { diamondShapes } from "../../lib/constants";
import { ProductAfterSaleSection } from "../../components/productDetails/ProductAfterSaleSection";
import { ClientReviews } from "../../components/productDetails/ClientReviews";
import { CustomRing } from "../../components/productDetails/CustomRing";
import { RingYouMayLove } from "../../components/productDetails/productDetails/RingYouMayLove";
import { YouSaidYes } from "../../components/productDetails/YouSaidYes";
import { FAQSection } from "../../components/productDetails/FAQSection";

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

export const ProductDetails = () => {
  const [shape, setShape] = useState(diamondShapes[0].name);
  const [bandWidth, setBandWidth] = useState(diamondShapes[0].name);
  const [metal, setMetal] = useState("18k Yellow Gold");
  const [band, setBand] = useState("Plain");

  return (
    <div className="product-details-page">
      <style>{`
        .product-details-page {
          font-family: 'Poppins', sans-serif;
          color: #111;
        }
        .main-container {
          display: flex;
          padding: 2rem;
          gap: 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }
        .left-column {
          flex: 1 1 60%;
        }
        .right-column {
          flex: 1 1 40%;
          display: flex;
          flex-direction: column;
        }
        .section {
          padding: 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }
        .section-title {
          text-align: center;
          font-size: 2rem;
          font-weight: 500;
          margin-bottom: 2rem;
          font-family: 'Serif', 'Times New Roman';
        }
        .reviews-section {
          background-color: #f9f9f9;
        }
        .rings-grid, .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        .faq-section {
          max-width: 900px;
        }

        @media (max-width: 992px) {
          .main-container {
            flex-direction: column;
          }
          .left-column, .right-column {
            flex: 1 1 100%;
          }
        }
      `}</style>

      <div className="main-container">
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

      <ProductAfterSaleSection />

      <ClientReviews />

      <CustomRing />

      <RingYouMayLove />

      <YouSaidYes />

      <FAQSection />
    </div>
  );
};
