import { DeliveryIcon } from "../../lib/svgIcons";

export const ProductAfterSaleSection = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "1.5rem 0",
        marginBottom: "2rem",
      }}
    >
      <div
        style={{
          textAlign: "center",
          border: "1px solid #eee",
          padding: "2rem",
        }}
      >
        <DeliveryIcon />
        <p style={{ margin: 0, fontSize: "0.8rem" }}>Free Shipping</p>
      </div>
      <div
        style={{
          textAlign: "center",
          border: "1px solid #eee",
          padding: "2rem",
        }}
      >
        <img
          src="/assets/icons/shield.png"
          alt="Lifetime Warranty"
          style={{ height: "24px", marginBottom: "0.5rem" }}
        />
        <p style={{ margin: 0, fontSize: "0.8rem" }}>Lifetime Warranty</p>
      </div>
      <div
        style={{
          textAlign: "center",
          border: "1px solid #eee",
          padding: "2rem",
        }}
      >
        <img
          src="/assets/icons/return.png"
          alt="We Do Exchanges"
          style={{ height: "24px", marginBottom: "0.5rem" }}
        />
        <p style={{ margin: 0, fontSize: "0.8rem" }}>We Do Exchanges</p>
      </div>
      <div
        style={{
          textAlign: "center",
          border: "1px solid #eee",
          padding: "2rem",
        }}
      >
        <img
          src="/assets/icons/cert.png"
          alt="Available on Finance"
          style={{ height: "24px", marginBottom: "0.5rem" }}
        />
        <p style={{ margin: 0, fontSize: "0.8rem" }}>Available on Finance</p>
      </div>
    </div>
  );
};
