import React from 'react';

const ProductCard = ({ imageSrc, title, description }) => {
  return (
    <div className="product-card">
      <img src={imageSrc} alt={title} />
      <div className="product-details">
        <h2 style={{ textAlign: 'center' }}>
          {title}
          <br />
          <span style={{ display: 'block', textAlign: 'left' ,marginLeft: '37px' }}>Stand</span>
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
