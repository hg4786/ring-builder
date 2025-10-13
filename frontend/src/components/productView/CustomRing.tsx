export const CustomRing = () => {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        textAlign: "center",
        padding: "4rem 2rem",
      }}
    >
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
  );
};
