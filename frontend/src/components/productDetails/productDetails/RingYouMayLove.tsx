export const RingYouMayLove = () => {
  return (
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
  );
};
