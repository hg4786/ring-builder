import { ProductAfterSaleSection } from "./ProductAfterSaleSection";
import { ClientReviews } from "./ClientReviews";
import { CustomRing } from "./CustomRing";
import { RingYouMayLove } from "./RingYouMayLove";
import { YouSaidYes } from "./YouSaidYes";
import { FAQSection } from "./FAQSection";

type Props = {
  children: React.ReactNode;
};

export const ProductView = (props: Props) => {

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

      {props.children}

      <ProductAfterSaleSection />

      <ClientReviews />

      <CustomRing />

      <RingYouMayLove />

      <YouSaidYes />

      <FAQSection />
    </div>
  );
};
