import { useState } from "react";
import styles from "./DiamondDetailSection.module.css";
import { ChevronDownIcon } from "../lib/svgIcons";
import { useNavigate } from "react-router-dom";

export const DiamondDetailSection = () => {
  const navigate = useNavigate();

  const [expandedSpec, setExpandedSpec] = useState<string | null>(null);
  const [email, setEmail] = useState("");

  const toggleSpec = (spec: string) => {
    setExpandedSpec(expandedSpec === spec ? null : spec);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  const PlusIcon = () => (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 9.5H18M9.5 1V18"
        stroke="#030303"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const BackArrowIcon = () => (
    <svg
      width="15"
      height="8"
      viewBox="0 0 15 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.93396 7.63207L15 1.29245L14.0755 0.36792L7.93396 5.91509L1.79245 0.367921L0.867923 1.29245L7.93396 7.63207Z"
        fill="white"
      />
      <path
        d="M16.1 23.5L23.769 31.1672C23.9426 31.3408 24.0401 31.5763 24.0401 31.8218C24.0401 32.0674 23.9426 32.3028 23.769 32.4765C23.5954 32.6501 23.3599 32.7476 23.1143 32.7476C22.8688 32.7476 22.6333 32.6501 22.4597 32.4765L14.1379 24.1546C14.0518 24.0688 13.9834 23.9667 13.9368 23.8544C13.8902 23.742 13.8662 23.6216 13.8662 23.5C13.8662 23.3784 13.8902 23.2579 13.9368 23.1456C13.9834 23.0333 14.0518 22.9312 14.1379 22.8453L22.4597 14.5235C22.6333 14.3499 22.8688 14.2524 23.1143 14.2524C23.3599 14.2524 23.5954 14.3499 23.769 14.5235C23.9426 14.6972 24.0401 14.9326 24.0401 15.1782C24.0401 15.4237 23.9426 15.6592 23.769 15.8328L16.1 23.5Z"
        fill="white"
      />
    </svg>
  );

  return (
    <div className={styles.diamondDetailSection}>
      {/* Main Content */}
      <div className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          {/* Navigation */}
          <div className={styles.navigationSection}>
            <button
              className={styles.browseDiamondsBtn}
              onClick={() => navigate("/diamonds")}
            >
              <BackArrowIcon />
              <span>Browse other Diamonds</span>
            </button>
          </div>

          {/* Product Layout */}
          <div className={styles.productLayout}>
            {/* Image Gallery */}
            <div className={styles.imageGallery}>
              <div className={styles.imageColumnLeft}>
                <div className={`${styles.imageView} ${styles.view360}`}>
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/9a9876fe462c332574d05c013cab59040dc98ad6?width=856"
                    alt="Diamond ring"
                    className={styles.mainImage}
                  />

                  <div className={styles.viewOverlay}>
                    <span className={styles.viewLabel}>360° VIEW</span>
                  </div>
                </div>
                <div className={`${styles.imageView} ${styles.viewFront}`}>
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/9a9876fe462c332574d05c013cab59040dc98ad6?width=856"
                    alt="Diamond ring"
                    className={styles.mainImage}
                  />
                  <div className={styles.viewOverlay}>
                    <span className={styles.viewLabel}>FRONT VIEW</span>
                  </div>
                </div>
                <div className={`${styles.imageView} ${styles.viewBack}`}>
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/9a9876fe462c332574d05c013cab59040dc98ad6?width=856"
                    alt="Diamond ring"
                    className={styles.mainImage}
                  />
                  <div className={styles.viewOverlay}>
                    <span className={styles.viewLabel}>BACK VIEW</span>
                  </div>
                </div>
              </div>

              <div className={styles.imageColumnRight}>
                <div className={styles.mainImageContainer}>
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/9a9876fe462c332574d05c013cab59040dc98ad6?width=856"
                    alt="Diamond ring"
                    className={styles.mainImage}
                  />
                  <div className={styles.mainViewOverlay}>
                    <span className={styles.viewLabel}>ROTATE VIEW</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Information */}
            <div className={styles.productInfo}>
              <div className={styles.productHeader}>
                <h1 className={styles.productTitle}>
                  2.41ct – E – VS1 – Radiant
                </h1>
                <p className={styles.productType}>Lab Grown Diamond</p>
                <p className={styles.productPrice}>From $3,530</p>
              </div>

              <div className={styles.specifications}>
                <div className={styles.specItem}>
                  <button
                    className={styles.specButton}
                    onClick={() => toggleSpec("size")}
                  >
                    <span>Diamond Size : 1.31 CT</span>
                    <ChevronDownIcon />
                  </button>
                </div>

                <div className={styles.specItem}>
                  <button
                    className={styles.specButton}
                    onClick={() => toggleSpec("color")}
                  >
                    <span>Diamond Color : D</span>
                    <ChevronDownIcon />
                  </button>
                </div>

                <div className={styles.specItem}>
                  <button
                    className={styles.specButton}
                    onClick={() => toggleSpec("clarity")}
                  >
                    <span>Diamond Clarity : VS1</span>
                    <ChevronDownIcon />
                  </button>
                </div>

                <div className={styles.specItem}>
                  <button
                    className={styles.specButton}
                    onClick={() => toggleSpec("cut")}
                  >
                    <span>Diamond Cut : Super Ideal</span>
                    <ChevronDownIcon />
                  </button>
                </div>

                <div className={styles.specsSection}>
                  <button
                    className={styles.specsButton}
                    onClick={() => toggleSpec("specs")}
                  >
                    <span>Specs</span>
                    <PlusIcon />
                  </button>
                </div>
              </div>

              <div className={styles.actionButtons}>
                <button className={styles.viewCertificateBtn}>
                  View Certificate
                </button>
                <button className={styles.chooseDiamondBtn}>
                  Choose the Diamond
                </button>
              </div>

              <div className={styles.emailSection}>
                <div className={styles.emailHeader}>
                  <h3 className={styles.emailTitle}>Need More time to think</h3>
                  <p className={styles.emailSubtitle}>
                    Email this piece to yourself or drop a hint.
                  </p>
                </div>
                <form className={styles.emailForm} onSubmit={handleEmailSubmit}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.emailInput}
                    required
                  />
                  <button type="submit" className={styles.emailSubmitBtn}>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
