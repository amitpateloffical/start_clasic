import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="card product-card">
      <div className="image-container">
        <img src={product.image} className="card-img-top product-image" alt={product.name} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Price: {product.price}</p>
        <p className="card-text text-success">Discount: {product.discount}</p>
      </div>
      <div className="card-footer">
        <button className="btn btn-primary w-100">Buy Now</button>
      </div>
    </div>
  );
}

export default ProductCard;
