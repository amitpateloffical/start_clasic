import React from "react";
import { Link } from "react-router-dom";
import { CircleSmall } from "lucide-react";
import products from "../components/products"; // categorized product data

const categories = [
  { key: "commercial", label: "Commercial Coolers" },
  { key: "glassTop", label: "Glass-Top Coolers" },
  { key: "domestic", label: "Domestic Coolers" },
  { key: "metal", label: "Metal Coolers" },
];

function ProductList() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-white px-4 pt-20 pb-10 flex flex-col items-center">
      {categories.map((category) => (
        <div key={category.key} className="mb-16 w-full max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 tracking-wide">
            {category.label}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-6">
            {products[category.key].map((product) => (
              <Link
                to={`/product/${product.id}/details`}
                key={product.id}
                className="bg-white border border-gray-200 p-4 rounded-lg shadow-md flex flex-col hover:shadow-lg bg-gray-800 transition-shadow duration-300 ease-in-out transform hover:scale-105"
              >
                <div className="relative w-full h-52 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain rounded-lg mx-auto"
                  />
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {product.discount}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-left w-full truncate">
                  {product.name}
                </h3>
                <p className="text-red-500 text-left w-full text-sm sm:text-base">
                  {product.price}
                </p>
                <div className="flex items-start mt-2 text-sm">
                  <CircleSmall className="text-black mt-1" size={16} />
                  <span className="ml-2 truncate">{product.tank}</span>
                </div>
                <div className="flex items-start mt-2 text-sm">
                  <CircleSmall className="text-black mt-1" size={16} />
                  <span className="ml-2 truncate">{product.modelNumber}</span>
                </div>
                <div className="flex items-start mt-2 text-sm">
                  <CircleSmall className="text-black mt-1" size={16} />
                  <span className="ml-2 truncate">{product.brand}</span>
                </div>
                <button className="mt-4 mx-auto bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded self-start">
                  Buy Now
                </button>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
