import { useState } from "react";
import { jewelryCategories, products } from "../../lib/constants";
import {
  ChevronDownIcon,
  GridIcon,
  ListIcon,
  QuickshipIcon,
} from "../../lib/svgIcons";
import "./LandingPage.css";
import { ProductCard } from "../../components/ProductCard";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    jewelryCategories[0].id
  );

  const navigate = useNavigate();

  return (
    <div className="landing-page">
      {/* Category Navigation */}
      <div className="category-nav">
        <div className="category-grid">
          {jewelryCategories.map((category, index) => (
            <div
              key={index}
              className={`category-item ${selectedCategory === category.id ? "selected" : ""}`}
              onClick={() => setSelectedCategory(category.id)}
            >
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
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => navigate(`/rings/${product.id}`)}
          />
        ))}

        {/* Lifetime Warranty Card */}
        <div className="warranty-card">
          <div className="warranty-image">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/3d4fa598d67a20966c6fd6353e3140a42c9a38e9?width=1120"
              alt="Lifetime Warranty"
            />
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
