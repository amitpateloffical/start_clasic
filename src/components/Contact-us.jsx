import React, { useState } from "react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Contactus = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send formData to your database here (e.g., via fetch or axios)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] p-6 pt-24 md:pt-32 ">
      <h3 className="text-2xl sm:text-3xl text-white font-semibold  text-center mb-6">
        Contact Us
      </h3>
      <div className="max-w-3xl mx-auto flex flex-col gap-10">
        {/* Map */}
        <div className="rounded-2xl overflow-hidden shadow-md h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.2752896938277!2d78.73831507506314!3d23.844356385163408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3978d7e51917c2f5%3A0xc798da38e99ba3cd!2sStar%20Classic!5e0!3m2!1sen!2sin!4v1744866403048!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-100 p-8 rounded-2xl shadow-md">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Get in Touch
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Phone Number</label>
              <input
                type="text" // ✅ Fixed input type from "email" to "text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      {/* Other content */}
      <div className="max-w-3xl mx-auto mt-10 text-left flex flex-col gap-5">
        {/* Address */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-white font-semibold">Address</h2>
          <p className="text-white">
            Shop No. 11, Gada Ji Trust Complex, Gujarati Bazaar, Sagar, Madhya
            Pradesh 470002
          </p>
        </div>
        {/* Contact Information */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-white font-semibold">Contact </h2>
          <p className="text-white flex items-center gap-2">
            <Phone className="text-green-500" /> +91 9713220022
          </p>
        </div>
        {/* Email */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-white font-semibold">Email</h2>
          <p className="text-white flex items-center gap-2">
            <Mail className="text-red-500" />
            <Link to="mailto:info@starclassic.in"> info@starclassic.in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
