export const YouSaidYes = () => {
  return (
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
  );
};
