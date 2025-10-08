import { useState } from 'react';
import { ProductGallery } from '../../components/ProductGallery';
import { OptionSelector } from '../../components/OptionSelector';
import { ColorSelector } from '../../components/ColorSelector';
import { EmailForm } from '../../components/EmailForm';
import { diamondShapes } from '../../lib/constants';

const metals = [
  { name: '18k Yellow Gold', color: '#FFD700' },
  { name: '14k White Gold', color: '#E5E4E2' },
  { name: '18k Rose Gold', color: '#E0C0B1' },
  { name: 'Platinum', color: '#E5E4E2' },
];

const bands = [
  { name: 'Plain', color: '#E5E4E2' },
  { name: 'Diamond', color: '#E5E4E2' },
];

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid #eee', padding: '1rem 0' }}>
      <button onClick={() => setIsOpen(!isOpen)} style={{ width: '100%', background: 'none', border: 'none', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', padding: '0.5rem 0' }}>
        <span style={{ fontWeight: '600' }}>{question}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <div style={{ marginTop: '0.5rem', color: '#555' }}>{answer}</div>}
    </div>
  );
}

export const ProductDetails = () => {
  const [shape, setShape] = useState('Oval');
  const [bandWidth, setBandWidth] = useState('Standard (2.7 mm)');
  const [metal, setMetal] = useState('18k Yellow Gold');
  const [band, setBand] = useState('Plain');

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
        .custom-rings-section {
          background-color: #000;
          color: #fff;
          text-align: center;
          padding: 4rem 2rem;
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

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              padding: "1.5rem 0",
              borderTop: "1px solid #eee",
              borderBottom: "1px solid #eee",
              marginBottom: "2rem",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <img
                src="/assets/icons/quickship.png"
                alt="Free Shipping"
                style={{ height: "24px", marginBottom: "0.5rem" }}
              />
              <p style={{ margin: 0, fontSize: "0.8rem" }}>Free Shipping</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <img
                src="/assets/icons/shield.png"
                alt="Lifetime Warranty"
                style={{ height: "24px", marginBottom: "0.5rem" }}
              />
              <p style={{ margin: 0, fontSize: "0.8rem" }}>Lifetime Warranty</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <img
                src="/assets/icons/return.png"
                alt="We Do Exchanges"
                style={{ height: "24px", marginBottom: "0.5rem" }}
              />
              <p style={{ margin: 0, fontSize: "0.8rem" }}>We Do Exchanges</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <img
                src="/assets/icons/cert.png"
                alt="Available on Finance"
                style={{ height: "24px", marginBottom: "0.5rem" }}
              />
              <p style={{ margin: 0, fontSize: "0.8rem" }}>
                Available on Finance
              </p>
            </div>
          </div>

          <EmailForm />
        </div>
      </div>

      <div className="section reviews-section">
        <h2 className="section-title">Our Client Reviews</h2>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <p>Product Rating</p>
          <div style={{ color: "#4A0D67", fontSize: "1.5rem" }}>
            ★★★★★ 5 stars (28 reviews)
          </div>
        </div>
        <div
          style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}
        >
          <p style={{ fontSize: "1.5rem", fontStyle: "italic", color: "#555" }}>
            "I loved everything about Queensmith, especially being told all
            about the craftsmanship that goes into making the perfect rings, and
            the customer care going forwards!"
          </p>
          <p style={{ fontWeight: "600" }}>Lucy & Ionica, 10 August</p>
        </div>
      </div>

      <div className="custom-rings-section">
        <h2 className="section-title" style={{ color: "#fff" }}>
          Custom Engagement Rings
        </h2>
        <p style={{ maxWidth: "600px", margin: "0 auto 2rem auto" }}>
          If you still haven't found exactly what you have in mind, our Diamond
          Experts will help you design your very own unique ring, using only
          GIA-certified diamonds.
        </p>
        <button
          style={{
            padding: "12px 24px",
            backgroundColor: "transparent",
            color: "#fff",
            border: "1px solid #fff",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Create Your Own
        </button>
      </div>

      <div className="section">
        <h2 className="section-title">Rings You May Love</h2>
        <div className="rings-grid">
          {[
            {
              img: "/assets/rings/r2.png",
              name: "Classic Solitaire Ring",
              price: "$18,400",
            },
            {
              img: "/assets/rings/r3.png",
              name: "Signature Oval Ring",
              price: "$15,250",
            },
            {
              img: "/assets/rings/r4.png",
              name: "Vintage Halo Ring",
              price: "$21,100",
            },
            {
              img: "/assets/rings/rose-1.png",
              name: "Rose Gold Solitaire",
              price: "$17,800",
            },
          ].map((ring) => (
            <div key={ring.name} style={{ textAlign: "center" }}>
              <img
                src={ring.img}
                alt={ring.name}
                style={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "1rem",
                }}
              />
              <p style={{ margin: 0, fontWeight: "600" }}>{ring.name}</p>
              <p style={{ margin: "0.25rem 0 0 0", color: "#4A0D67" }}>
                {ring.price}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="section" style={{ background: "#f9f9f9" }}>
        <h2 className="section-title">You Said Yes</h2>
        <div className="gallery-grid">
          {[...Array(6)].map((_, i) => (
            <img
              key={i}
              src={`/assets/Frame-${i + 18}.png`}
              alt={`Gallery image ${i + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          ))}
        </div>
      </div>

      <div className="section faq-section">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <FAQItem
          question="What defines a signature solitaire oval engagement ring in yellow gold symmetry?"
          answer="It's defined by its elegant simplicity, featuring a single, beautifully cut oval diamond set on a classic yellow gold band, crafted with perfect symmetry to enhance its brilliance."
        />
        <FAQItem
          question="Why are yellow gold solitaire engagement rings so popular?"
          answer="Their timeless appeal, durability, and the warm, flattering glow of yellow gold complement all skin tones, making them a classic and cherished choice for generations."
        />
        <FAQItem
          question="Why choose an 18k yellow gold engagement ring?"
          answer="18k yellow gold offers a rich, vibrant color and is more durable and resistant to tarnishing than higher karat golds, making it an ideal choice for a piece of jewelry meant to last a lifetime."
        />
        <FAQItem
          question="Is the signature oval engagement ring secure?"
          answer="Absolutely. Our rings are crafted with precision and feature secure settings, such as prong or bezel, to ensure your precious diamond is held firmly in place."
        />
      </div>
    </div>
  );
};
