import { useState } from "react";
import { StarIcon } from "../lib/svgIcons";
import type { Product } from "../types/product";
import { diamondShapes } from "../lib/constants";

export const ProductCard = ({
  product,
  onClick,
}: {
  product: Product;
  onClick: () => void;
}) => {
  const [selectedShape, setSelectedShape] = useState(diamondShapes[0].name);
  // const [selectedMetal, setSelectedMetal] = useState(product.metalColors[0]

  return (
    <div
      className="product-card"
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
    >
      {product.isBestSeller && (
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
                  className={`metal-swatch ${
                    colorIndex === product.selectedMetal ? "selected" : ""
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
          <div className="shape-section">
            <div className="option-label">Shape : {product.shape}</div>
            <div className="shape-options">
              {diamondShapes.map((shape) => (
                <div
                  key={shape.name}
                  className={
                    "shape-option" +
                    (selectedShape === shape.name ? " selected" : "")
                  }
                  onClick={(event) => {
                    event.stopPropagation();
                    setSelectedShape(shape.name);
                  }}
                >
                  <img src={`/${shape}.png`} alt="" width="45" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
