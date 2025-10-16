export const ProductAfterSaleSection = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        padding: "1.5rem 0",
        marginBottom: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          border: "1px solid #eee",
          padding: "2rem",
          width: "15rem",
          aspectRatio: "19 / 6",
        }}
      >
        <img
          src="/icons/shippingIcon.png"
          alt=""
          style={{ height: "50px", marginBottom: "0.5rem" }}
        />
        <p style={{ margin: 0, fontSize: "0.8rem" }}>Free Shipping</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          border: "1px solid #eee",
          padding: "2rem",
          width: "15rem",
          aspectRatio: "19 / 6",
        }}
      >
        <img
          src="/icons/returnIcon.png"
          alt=""
          style={{ height: "50px", marginBottom: "0.5rem" }}
        />
        <p style={{ margin: 0, fontSize: "0.8rem" }}>Free 60 Day Returns</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          border: "1px solid #eee",
          padding: "2rem",
          width: "15rem",
          aspectRatio: "19 / 6",
        }}
      >
        <img
          src="/icons/exchangeIcon.png"
          alt=""
          style={{ height: "50px", marginBottom: "0.5rem" }}
        />
        <p style={{ margin: 0, fontSize: "0.8rem" }}>365 Day Exchange</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          border: "1px solid #eee",
          padding: "2rem",
          width: "15rem",
          aspectRatio: "19 / 6",
        }}
      >
        <img
          src="/icons/lifetimeWarrantyIcon.png"
          alt=""
          style={{ height: "50px", marginBottom: "0.5rem" }}
        />
        <p style={{ margin: 0, fontSize: "0.8rem" }}>Available on Finance</p>
      </div>
    </div>
  );
};
