import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../components/products";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Truck } from "lucide-react";
import { Ban } from "lucide-react";
import Warrenty from "../assets/warrenty.webp";
import "swiper/css";
import "swiper/css/pagination";

const ProductDetails = () => {
  const { id } = useParams();

  // Find the product by iterating over categories
  let product = null;
  Object.values(products).forEach((categoryProducts) => {
    const found = categoryProducts.find((p) => p.id === parseInt(id));
    if (found) product = found;
  });

  if (!product)
    return (
      <div className="p-6 text-red-500 text-base sm:text-lg">
        Product not found.
      </div>
    );

  const technicalDetails = {
    Brand: product.brand,
    "Model-Name": product.modelName,
    "Model-Number": product.modelNumber,
    Color: product.color || "N/A",
    Specification: product.specification || "N/A",
    Material: product.material || "N/A",
    "Tank-Capacity": product.tank,
    Category: product.category,
    Warranty: product.warranty || "1 Year Manufacturer Warranty",
  };

  const relatedProducts = Object.values(products)
    .flat()
    .filter((p) => p.category === product.category && p.id !== product.id);

  return (
    <div className="w-full min-h-screen bg-white p-4 pt-24 md:pt-28 pb-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-center gap-8 px-2">
        <div className="w-full md:w-1/2">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            className="rounded-2xl overflow-hidden w-full h-auto bg-white md:mt-5 max-w-md mx-auto"
          >
            {[product.image, product.image2].map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-[60vh] sm:h-[70vh]">
                  <img
                    src={src}
                    alt={`Product ${index + 1}`}
                    className="max-h-full max-w-full object-contain rounded-2xl mx-auto"
                  />
                  <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 w-[80%] h-20 bg-black opacity-50 blur-2xl rounded-full pointer-events-none"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-3 mt-2 md:mt-0">
          <h1 className="text-lg sm:text-2xl md:text-3xl font-semibold">
            {product.name}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-700">
            {product.description}
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-700">
            {product.specification}
          </p>
          <p className="text-base sm:text-lg md:text-xl font-bold text-green-600">
            Price: {product.price}
          </p>
          <p className="text-xs sm:text-sm text-red-500">
            Discount: {product.discount} OFF
          </p>

          <div className="flex items-center gap-2 mt-2">
            <Truck className="text-black" size={22} />
            <span className="text-sm sm:text-base text-gray-700 font-medium">
              Estimated Delivery: 5 days
            </span>
          </div>

          {[
            { label: "Model", value: product.modelName },
            { label: "Model-No", value: product.modelNumber },
            { label: "Tank Capacity", value: product.tank },
            { label: "Brand", value: product.brand },
            {
              label: "Category",
              value: product.category,
              color: "text-blue-400",
            },
          ].map(({ label, value, color }, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <h2 className="text-sm sm:text-base md:text-lg font-semibold">
                {label}:
              </h2>
              <p
                className={`text-sm sm:text-base text-gray-700 ${color || ""}`}
              >
                {value}
              </p>
            </div>
          ))}

          {/* No Refund Policy */}
          <div className="flex items-center gap-2 mt-4">
            <Ban className="text-red-600" size={18} />
            <p className="text-xs sm:text-sm text-red-600 font-semibold">
              No Refund Policy: All purchases are final and non-refundable.
            </p>
          </div>

          {/* Secure Checkout */}
          <div className="mt-4 flex flex-col items-center">
            <img
              src="https://moonair.in/wp-content/uploads/2022/08/text.png"
              alt="Secure Checkout"
              className="w-full object-cover rounded"
            />
            <p className="text-xs sm:text-sm md:text-base text-gray-700 mt-2 text-center">
              Guaranteed safe & secure checkout
            </p>
          </div>

          <a
            href={`https://wa.me/9713220022?text=${encodeURIComponent(
              `Hello, I'm interested in buying the following product:\n\n` +
                `Product: ${product.name || "N/A"}\n` +
                `Price: ${product.price || "N/A"}\n` +
                `Model: ${product.modelName || "N/A"}\n` +
                `Model Number: ${product.modelNumber || "N/A"}\n` +
                `Tank Capacity: ${product.tank || "N/A"}\n` +
                `Brand: ${product.brand || "N/A"}\n` +
                `Category: ${product.category || "N/A"}\n\n` +
                `Please provide more details.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded mt-2 w-full text-sm sm:text-base block text-center"
          >
            Buy Now
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-10 px-2 md:flex md:justify-center md:gap-20">
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-left mb-6 tracking-wide">
            About this Item
          </h2>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
            <li>
              {product.name} Air Cooler with 5 Fin Climatizer for efficient
              cooling
            </li>
            <li>High-efficiency blades for powerful air throw</li>
            <li>Auto swing function for even air distribution</li>
            <li>High-efficiency honeycomb cooling pads</li>
            <li>Compatible with inverters and consumes very low electricity</li>
            <li>Up to 80% savings on electricity bills</li>
            <li>High-accuracy water level indicator</li>
            <li>Large {product.tank} water tank for extended usage</li>
            <li>Attractive looks with a premium quality finish</li>
            <li>Equipped with castor wheels for easy movement</li>
            <li>Comes with a 1 Year Manufacturer Warranty</li>
          </ul>
        </div>

        <div className="md:block mx-auto w-full md:w-1/2">
          <img
            src={Warrenty}
            alt="Warranty"
            className="max-w-full object-cover rounded md:mt-0"
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-5 md:mt-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-left mb-6 tracking-wide">
          Technical Details
        </h2>
        <div className="flex flex-col divide-y border rounded-lg text-sm sm:text-base">
          {Object.entries(technicalDetails).map(([label, value], idx) => (
            <div
              key={idx}
              className="flex flex-row justify-between p-4 text-center"
            >
              <span className="font-medium text-gray-700 w-1/2">{label}</span>
              <span className="text-gray-900 w-1/2">{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto mt-10 px-2">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-6 tracking-wide">
          Related Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {relatedProducts.map((relatedProduct) => (
            <div
              key={relatedProduct.id}
              className="w-[260px] sm:w-[240px] md:w-[300px] rounded-lg shadow-xl border-dashed border-2 border-gray-300 p-4 flex flex-col items-center mx-auto"
            >
              <div className="w-full h-58 overflow-hidden rounded">
                <img
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                  className="max-h-full max-w-full object-contain rounded mx-auto"
                />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mt-2">
                {relatedProduct.name}
              </h3>
              <p className="text-green-600 font-bold text-sm sm:text-base">
                {relatedProduct.price}
              </p>
              <Link
                to={`/product/${relatedProduct.id}/details`}
                className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded text-sm text-center"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
