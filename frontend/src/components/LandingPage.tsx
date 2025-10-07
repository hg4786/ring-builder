import { jewelryCategories, products } from '../lib/constants';
import { ChevronDownIcon, GridIcon, ListIcon, QuickshipIcon, StarIcon } from '../lib/svgIcons';
import './LandingPage.css';

const LandingPage = () => {

  return (
    <div className="landing-page">
      {/* Category Navigation */}
      <div className="category-nav">
        <div className="category-grid">
          {jewelryCategories.map((category, index) => (
            <div key={index} className={`category-item ${category.isSelected ? 'selected' : ''}`}>
              <div className="category-content">
                <img src={category.image} alt={category.name} />
                <div className="category-name">{category.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="filters-container">
          <div className="filter-options">
            <div className="filter-group">
              <div className="filter-item">
                <span>Metal</span>
                <ChevronDownIcon />
              </div>
              <div className="filter-item">
                <span>Style</span>
                <ChevronDownIcon />
              </div>
              <div className="filter-item">
                <span>Shape</span>
                <ChevronDownIcon />
              </div>
              <div className="filter-item">
                <span>Carat Weight</span>
                <ChevronDownIcon />
              </div>
            </div>
            <div className="advance-property">
              <span>Advance Property</span>
              <ChevronDownIcon />
              {/* <div className="chevron-right">
                <ChevronRightIcon />
              </div> */}
            </div>
          </div>
          <div className="sort-options">
            <div className="quickship">
              <QuickshipIcon />
            </div>
            <div className="sort-by">
              <span className="sort-label">Sort : </span>
              <span className="sort-value">Popular</span>
              <ChevronDownIcon />
            </div>
          </div>
          <div className="view-controls">
            <div className="view-grid selected">
              <GridIcon />
            </div>
            <div className="verticle-line"></div>
            <div className="view-list">
              <ListIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {products.map((product, index) => (
          <div key={product.id} className="product-card">
            {index === 5 && (
              <div className="best-seller-badge">
                <StarIcon />
                <span>Best Seller</span>
              </div>
            )}
            <div className="product-image-container">
              <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <div className="product-info">
              <div className="product-header">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-price">From {product.price}</div>
              </div>
              <div className="product-options">
                <div className="metal-section">
                  <div className="option-label">Metal : {product.metal}</div>
                  <div className="metal-swatches">
                    {product.metalColors.map((color, colorIndex) => (
                      <div
                        key={colorIndex}
                        className={`metal-swatch ${colorIndex === product.selectedMetal ? 'selected' : ''}`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
                <div className="shape-section">
                  <div className="option-label">Shape : {product.shape}</div>
                  <div className="shape-options">
                    <div className="shape-option selected">
                      <svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="0.5" width="44" height="44" stroke="#3C3C3C" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M39.9935 21.9937C39.9935 31.3788 32.3853 38.9875 22.9998 38.9875C13.6147 38.9875 6.00653 31.3788 6.00653 21.9937C6.00653 12.6087 13.6147 5 22.9998 5C32.3853 5 39.9935 12.6087 39.9935 21.9937Z" stroke="#2C2C2C" strokeWidth="0.5" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="shape-option">
                      <svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.5 41.5H41.3496V5.00024H5.5V41.5Z" stroke="#2C2C2C" strokeWidth="0.5" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="shape-option">
                      <svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M35.2675 23.3439C35.7005 26.5224 36.4926 32.3346 32.8023 37.2743C31.7241 38.7178 28.1266 42.9462 22.4536 42.9381C16.5984 42.9294 12.9593 38.4134 11.8974 36.9143C8.43937 32.0302 9.20443 26.4963 9.64028 23.3439C10.708 15.6221 22.4536 3.75024 22.4536 3.75024C22.4536 3.75024 34.209 15.5752 35.2675 23.3439Z" stroke="#2C2C2C" strokeWidth="0.5" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Lifetime Warranty Card */}
        <div className="warranty-card">
          <div className="warranty-image">
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/3d4fa598d67a20966c6fd6353e3140a42c9a38e9?width=1120" alt="Lifetime Warranty" />
          </div>
          <div className="warranty-content">
            <div className="warranty-text">
              <h2>Lifetime Waranty</h2>
              <p>Peace of mind, for a lifetime.</p>
            </div>
            <button className="warranty-button">LEARN MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
