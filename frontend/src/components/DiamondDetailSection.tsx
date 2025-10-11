import { useState } from 'react';
import './DiamondDetailSection.css';
import { ChevronDownIcon } from '../lib/svgIcons';

export const DiamondDetailSection = () => {
  const [expandedSpec, setExpandedSpec] = useState<string | null>(null);
  const [email, setEmail] = useState('');

  const toggleSpec = (spec: string) => {
    setExpandedSpec(expandedSpec === spec ? null : spec);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  const PlusIcon = () => (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 9.5H18M9.5 1V18" stroke="#030303" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const DeliveryIcon = () => (
    <svg width="63" height="42" viewBox="0 0 63 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M63.0002 22.1249C63.0002 20.746 62.6174 19.3983 61.9025 18.2187L55.8517 8.94139C54.8087 7.68359 53.2579 6.96089 51.6251 6.96089H43.0001L43.004 1.49609V1.5C43.004 0.66797 42.3321 0 41.504 0H9.5C8.67188 0 8 0.66797 8 1.5V5.4648L1.5 5.46089C0.67188 5.46089 0 6.13277 0 6.96089C0 7.79292 0.67188 8.46089 1.5 8.46089H8V13.9257H1.5C0.67188 13.9257 0 14.5976 0 15.4257C0 16.2577 0.67188 16.9257 1.5 16.9257H8V22.3905H4.2266C3.39848 22.3905 2.7266 23.0624 2.7266 23.8905C2.7266 24.7186 3.39848 25.3905 4.2266 25.3905H8V35.4605C8 36.2925 8.67188 36.9605 9.5 36.9605H14.2383C14.9297 39.8902 17.5391 41.9605 20.5469 41.9605C23.5547 41.9605 26.168 39.8902 26.8555 36.9605H43.1955C43.883 39.8902 46.4963 41.9605 49.5041 41.9605C52.5119 41.9605 55.1213 39.8902 55.8088 36.9605H61.5041C62.3322 36.9605 63.0041 36.2925 63.0041 35.4605L63.0002 22.1249ZM42.9962 9.96089H51.6251C52.3087 9.95308 52.9689 10.2265 53.4415 10.7187L58.8087 18.9609H42.9927L42.9962 9.96089ZM20.5472 38.9609C19.1331 38.9609 17.8558 38.1093 17.3128 36.8007C16.7737 35.496 17.0706 33.9882 18.0745 32.9882C19.0745 31.9882 20.5784 31.6874 21.887 32.2304C23.1956 32.7694 24.0472 34.0468 24.0472 35.4609C24.0472 37.3945 22.4808 38.9609 20.5472 38.9609ZM49.5002 38.9609C48.0861 38.9609 46.8088 38.1093 46.2697 36.8007C45.7267 35.496 46.0275 33.9882 47.0275 32.9882C48.0275 31.9882 49.5314 31.6874 50.84 32.2304C52.1486 32.7694 53.0002 34.0468 53.0002 35.4609C53.0002 37.3945 51.4338 38.9609 49.5002 38.9609ZM60.0002 33.9609H55.8088C55.1213 31.0351 52.508 28.9648 49.5002 28.9648C46.4924 28.9648 43.883 31.0351 43.1955 33.9609H26.8555C26.168 31.0351 23.5547 28.9648 20.5469 28.9648C17.5391 28.9648 14.9258 31.0351 14.2383 33.9609H11V25.3906H13.7695C14.5976 25.3906 15.2695 24.7187 15.2695 23.8906C15.2695 23.0625 14.5976 22.3906 13.7695 22.3906H11V16.9258H16.5C17.3281 16.9258 18 16.2578 18 15.4258C18 14.5977 17.3281 13.9258 16.5 13.9258H11V8.46099H13.7734C14.6015 8.46099 15.2734 7.79302 15.2734 6.96099C15.2734 6.13287 14.6015 5.46099 13.7734 5.46099H11V3.00009H40L39.9883 24.4101C39.9883 25.2382 40.6602 25.9101 41.4883 25.9101C42.3203 25.9101 42.9883 25.2382 42.9883 24.4101V21.9648L59.9803 21.9609C59.9842 22.0156 60.0037 22.0664 60.0037 22.1249L60.0002 33.9609Z" fill="#50056E"/>
    </svg>
  );

  const BackArrowIcon = () => (
    <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.93396 7.63207L15 1.29245L14.0755 0.36792L7.93396 5.91509L1.79245 0.367921L0.867923 1.29245L7.93396 7.63207Z" fill="white"/>
      <path d="M16.1 23.5L23.769 31.1672C23.9426 31.3408 24.0401 31.5763 24.0401 31.8218C24.0401 32.0674 23.9426 32.3028 23.769 32.4765C23.5954 32.6501 23.3599 32.7476 23.1143 32.7476C22.8688 32.7476 22.6333 32.6501 22.4597 32.4765L14.1379 24.1546C14.0518 24.0688 13.9834 23.9667 13.9368 23.8544C13.8902 23.742 13.8662 23.6216 13.8662 23.5C13.8662 23.3784 13.8902 23.2579 13.9368 23.1456C13.9834 23.0333 14.0518 22.9312 14.1379 22.8453L22.4597 14.5235C22.6333 14.3499 22.8688 14.2524 23.1143 14.2524C23.3599 14.2524 23.5954 14.3499 23.769 14.5235C23.9426 14.6972 24.0401 14.9326 24.0401 15.1782C24.0401 15.4237 23.9426 15.6592 23.769 15.8328L16.1 23.5Z" fill="white"/>
    </svg>
  );

  return (
    <div className="diamond-detail-section">
      {/* Benefits Banner Top */}
      <div className="benefits-banner">
        <div className="benefits-container">
          <div className="benefits-grid">
            <span className="benefit-text">Free Fast Shipping</span>
            <span className="benefit-text">Free 60 Day Returns</span>
            <span className="benefit-text">365 Day Exchange</span>
            <span className="benefit-text">Free Lifetime Warranty</span>
          </div>
          <DeliveryIcon />
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="content-wrapper">
          {/* Navigation */}
          <div className="navigation-section">
            <button className="browse-diamonds-btn">
              <BackArrowIcon />
              <span>Browse other Diamonds</span>
            </button>
          </div>

          {/* Product Layout */}
          <div className="product-layout">
            {/* Image Gallery */}
            <div className="image-gallery">
              <div className="image-column-left">
                <div className="image-view view-360">
                  <div className="view-overlay">
                    <span className="view-label">360° VIEW</span>
                  </div>
                </div>
                <div className="image-view view-front">
                  <div className="view-overlay">
                    <span className="view-label">FRONT VIEW</span>
                  </div>
                </div>
                <div className="image-view view-back">
                  <div className="view-overlay">
                    <span className="view-label">BACK VIEW</span>
                  </div>
                </div>
              </div>

              <div className="image-column-right">
                <div className="main-image-container">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/9a9876fe462c332574d05c013cab59040dc98ad6?width=856" 
                    alt="Diamond ring"
                    className="main-image"
                  />
                  <div className="main-view-overlay">
                    <span className="view-label">ROTATE VIEW</span>
                  </div>
                </div>
                <div className="zoom-overlay">
                  <span className="view-label">ZOOM</span>
                </div>
              </div>
            </div>

            {/* Product Information */}
            <div className="product-info">
              <div className="product-header">
                <h1 className="product-title">2.41ct – E – VS1 – Radiant</h1>
                <p className="product-type">Lab Grown Diamond</p>
                <p className="product-price">From $3,530</p>
              </div>

              <div className="specifications">
                <div className="spec-item">
                  <button className="spec-button" onClick={() => toggleSpec('size')}>
                    <span>Diamond Size : 1.31 CT</span>
                    <ChevronDownIcon />
                  </button>
                </div>

                <div className="spec-item">
                  <button className="spec-button" onClick={() => toggleSpec('color')}>
                    <span>Diamond Color : D</span>
                    <ChevronDownIcon />
                  </button>
                </div>

                <div className="spec-item">
                  <button className="spec-button" onClick={() => toggleSpec('clarity')}>
                    <span>Diamond Clarity : VS1</span>
                    <ChevronDownIcon />
                  </button>
                </div>

                <div className="spec-item">
                  <button className="spec-button" onClick={() => toggleSpec('cut')}>
                    <span>Diamond Cut : Super Ideal</span>
                    <ChevronDownIcon />
                  </button>
                </div>

                <div className="specs-section">
                  <button className="specs-button" onClick={() => toggleSpec('specs')}>
                    <span>Specs</span>
                    <PlusIcon />
                  </button>
                </div>
              </div>

              <div className="action-buttons">
                <button className="view-certificate-btn">View Certificate</button>
                <button className="choose-diamond-btn">Choose the Diamond</button>
              </div>

              <div className="email-section">
                <div className="email-header">
                  <h3 className="email-title">Need More time to think</h3>
                  <p className="email-subtitle">Email this piece to yourself or drop a hint.</p>
                </div>
                <form className="email-form" onSubmit={handleEmailSubmit}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="email-input"
                    required
                  />
                  <button type="submit" className="email-submit-btn">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Banner Bottom */}
      <div className="benefits-banner">
        <div className="benefits-container">
          <div className="benefits-grid">
            <span className="benefit-text">Free Fast Shipping</span>
            <span className="benefit-text">Free 60 Day Returns</span>
            <span className="benefit-text">365 Day Exchange</span>
            <span className="benefit-text">Free Lifetime Warranty</span>
          </div>
          <DeliveryIcon />
        </div>
      </div>
    </div>
  );
};
