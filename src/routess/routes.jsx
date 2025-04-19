import React from "react";
import Home from "../components/Home";
import Aircoolers from "../components/Air-coolers";
import Ledtvs from "../components/Led-tvs";
import Contactus from "../components/Contact-us";
import ProductDetails from "../components/Product-Details";
import ProductList from "../components/ProductList"; // Ensure this path is correct
import { Routes, Route } from "react-router-dom"; // "react-router" should be "react-router-dom"

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<ProductList />} />
      <Route path="/product/:id/details" element={<ProductDetails />} />
      <Route path="/air-coolers" element={<Aircoolers />} />
      <Route path="/led-tvs" element={<Ledtvs />} />
      <Route path="/contact-us" element={<Contactus />} />
    </Routes>
  );
};

export default RoutesComponent;
