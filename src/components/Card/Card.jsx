import React from 'react';
import './Card.css';

const ProductCard = ({ 
  id = 'product-1',
  image = 'logo512.png', 
  title = 'Product Name', 
  description = 'Product description goes here', 
  price = '0.00', 
  onAddToCart = null
}) => {
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart({ id, title, price, image });
    }
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={image} 
          alt={title}
          className="product-image"
        />
      </div>
      
      <div className="product-content">
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{description}</p>
        
        <div className="product-footer">
          <span className="product-price">₹{price}</span>
          <button 
            className="add-to-cart-btn"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;