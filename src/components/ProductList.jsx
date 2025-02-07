import React from 'react';
import ProductCard from './ProductCard';
import cooler1 from '../assets/cooler1.png';
import cooler2 from '../assets/cooler2.png';
import cooler3 from '../assets/cooler3.png';
import cooler4 from '../assets/cooler4.png';
import cooler5 from '../assets/cooler5.png';

const products = [
  { id: 1, name: 'Star Classic Plastic Cyclone 200L', price: '₹35,000.00', discount: '20%', image: cooler1 },
  { id: 2, name: 'Star Classic Plastic Dhoomanta', price: '₹21,000.00', discount: '15%', image: cooler2 },
  { id: 3, name: 'Star Classic Plastic Diamond 160L', price: '₹30,000.00', discount: '10%', image: cooler3 },
  { id: 4, name: 'Star Classic Plastic Diamond 160L', price: '₹30,000.00', discount: '10%', image: cooler4 },
  { id: 5, name: 'MoonAir Plastic Diamond 160L', price: '₹30,000.00', discount: '10%', image: cooler5 },
  { id: 6, name: 'Star Classic Plastic Cyclone 200L', price: '₹35,000.00', discount: '20%', image: cooler1 },
  { id: 7, name: 'Star Classic Plastic Dhoomanta', price: '₹21,000.00', discount: '15%', image: cooler2 },
  { id: 8, name: 'Star Classic Plastic Diamond 160L', price: '₹30,000.00', discount: '10%', image: cooler4 },
  { id: 9, name: 'Star Classic Plastic Cyclone 200L', price: '₹35,000.00', discount: '20%', image: cooler1 },
  { id: 10, name: 'Star Classic Plastic Dhoomanta', price: '₹21,000.00', discount: '15%', image: cooler2 },
  { id: 11, name: 'Star Classic Plastic Diamond 160L', price: '₹30,000.00', discount: '10%', image: cooler3 },
  { id: 12, name: 'Star Classic Plastic Diamond 160L', price: '₹30,000.00', discount: '10%', image: cooler4 },
  { id: 13, name: 'MoonAir Plastic Diamond 160L', price: '₹30,000.00', discount: '10%', image: cooler5 },
  { id: 14, name: 'MoonAir Plastic Diamond 160L', price: '₹30,000.00', discount: '10%', image: cooler5 },
  { id: 15, name: 'Star Classic Plastic Cyclone 200L', price: '₹35,000.00', discount: '20%', image: cooler1 },
  { id: 16, name: 'Star Classic Plastic Dhoomanta', price: '₹21,000.00', discount: '15%', image: cooler2 },
];

function ProductList() {
  return (
    <div className="container py-4">
      <div className="row g-4 justify-content-center">
        {products.map(product => (
          <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
