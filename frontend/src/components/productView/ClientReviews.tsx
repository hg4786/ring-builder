export const ClientReviews = () => {
  return (
    <div className="section reviews-section">
      <h2 className="section-title">Our Client Reviews</h2>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <p>Product Rating</p>
        <div style={{ color: "#4A0D67", fontSize: "1.5rem" }}>
          ★★★★★ 5 stars (28 reviews)
        </div>
      </div>
      <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: "1.5rem", fontStyle: "italic", color: "#555" }}>
          "I loved everything about Queensmith, especially being told all about
          the craftsmanship that goes into making the perfect rings, and the
          customer care going forwards!"
        </p>
        <p style={{ fontWeight: "600" }}>Lucy & Ionica, 10 August</p>
      </div>
    </div>
  );
};
