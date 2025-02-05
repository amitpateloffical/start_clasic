import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="card h-100 me-5">
      <img src={product.image} className="card-img-top" alt={product.name} />
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
