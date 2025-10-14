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
          --main-section-width: calc(100% - 5rem);
        }
        .product-details-page .section {
          padding: 2rem;
          max-width: 100%;
          margin: 0 auto;
        }
        .product-details-page .section-title {
          text-align: center;
          font-size: 2rem;
          font-weight: 500;
          margin-bottom: 2rem;
          font-family: 'Serif', 'Times New Roman';
        }
        .product-details-page .reviews-section {
          background-color: #f9f9f9;
        }
        .product-details-page .rings-grid, .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        .product-details-page .faq-section {
          max-width: 900px;
        }
        @media (max-width: 600px) {
          .product-details-page {
            --main-section-width: calc(100% - 1rem);
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
