import React, { useState } from "react";
import logo from "../assets/starLogo.png";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Optional: using Lucide icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Top Navbar */}
      <nav className="navbar bg-white h-14 md:h-20 w-full flex items-center justify-between shadow-lg fixed top-0 z-50 shadow-gray-500 py-4 pl-3 pr-2 md:pl-10 md:pr-16 ">
        <NavLink to="/" className="flex items-center">
          <img
            src={logo}
            alt="Cooling Solution Logo"
            className=" h-10 w-24 md:h-16 md:w-32 mr-4 rounded"
          />
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-12 text-black font-semibold text-lg capitalize">
          <NavLink
            to="/"
            className="hover:text-gray-300 "
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
          >
            Home
          </NavLink>
          <NavLink
            to="/air-coolers"
            className="hover:text-gray-300"
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
          >
            Air Coolers
          </NavLink>
          <NavLink
            to="/led-tvs"
            className="hover:text-gray-300"
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
          >
            Led Tv
          </NavLink>
          <NavLink
            to="/contact-us"
            className="hover:text-gray-300"
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
          >
            Contact Us
          </NavLink>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden text-black">
          {isOpen ? (
            <X size={34} onClick={toggleMenu} />
          ) : (
            <Menu size={34} onClick={toggleMenu} />
          )}
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 ">
          <img src={logo} alt="Cooling Solution Logo" className="h-10 w-28" />
          <button onClick={toggleMenu} className="text-black">
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col space-y-4 p-6 text-black font-medium text-lg">
          <NavLink
            to="/"
            onClick={toggleMenu}
            className="hover:text-gray-300"
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
          >
            Home
          </NavLink>
          <NavLink
            to="/air-coolers"
            onClick={toggleMenu}
            className="hover:text-gray-300"
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
          >
            Air Coolers
          </NavLink>
          <NavLink
            to="/led-tvs"
            onClick={toggleMenu}
            className="hover:text-gray-300"
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
          >
            Led Tv
          </NavLink>
          <NavLink
            to="/contact-us"
            onClick={toggleMenu}
            className="hover:text-gray-300"
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
          >
            Contact Us
          </NavLink>
        </div>
      </div>

      {/* Background overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMenu}
        />
      )}
    </>
  );
}

export default Navbar;
