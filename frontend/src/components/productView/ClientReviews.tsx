export const ClientReviews = () => {
  return (
    <div className="section reviews-section">
      <h2 className="section-title" style={{ marginBottom: "0", fontSize: "48px" }}>
        Our Client Reviews
      </h2>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <p className="font-secondary-500" style={{ fontSize: "20px" }}>
          Product Rating
        </p>
        <div style={{ color: "#4A0D67", fontSize: "1.5rem" }}>
          ★★★★★{" "}
          <span style={{ color: "#8B8B8B", fontSize: "16px" }}>
            5 stars (28 reviews)
          </span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ maxWidth: "min(700px, 95vw)" }}>
          <p
            className="font-secondary-500"
            style={{
              fontSize: "1.5rem",
              fontStyle: "italic",
              fontWeight: 400,
              color: "#000000",
              marginBottom: "2rem",
            }}
          >
            {/* <div style={{ display: "inline-block", transform: " scale(5)" }}>
              &quot;
            </div> */}
            I loved everything about Queensmith, especially being told all about
            the craftsmanship that goes into making the perfect rings, and the
            customer care going forwards!
          </p>
          <div style={{ color: "#4A0D67", fontSize: "1.5rem" }}>★★★★★ </div>
          <p style={{ fontWeight: "600" }}>Lucy & Ionica, 10 August</p>
        </div>
        <div
          style={{
            position: "relative",
          }}
          >
          <div
            style={{
              position: "absolute",
              width: "calc(100% + 2rem)",
              height: "80%",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#50056E12",
            }}
            />
          <img
            style={{
              width: "calc(100% - 4rem)",
              margin: "2rem",
            }}
            src="https://images.unsplash.com/photo-1753911203780-91ba109f977f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdpcmwlMjBkaWFtb25kJTIwc2hvd2luZyUyMHJpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
