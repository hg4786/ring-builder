import { useState } from "react";

export const FAQSection = () => {
  return (
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
  );
};

export const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid #eee", padding: "1rem 0" }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          textAlign: "left",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          padding: "0.5rem 0",
        }}
      >
        <span style={{ fontWeight: "600" }}>{question}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <div style={{ marginTop: "0.5rem", color: "#555" }}>{answer}</div>
      )}
    </div>
  );
};
