import React from "react";
import whatsappIcon from "../assets/watsapp.png"; // Make sure this path is correct

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/9713220022?text=Hello%20I%20am%20interested%20in%20your%20product"
      className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded-full flex items-center shadow-lg hover:bg-green-600 transition duration-300 z-50"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={whatsappIcon}
        alt="WhatsApp"
        className="w-6 h-6 mr-2 rounded-full"
      />
      How can I help you?
    </a>
  );
};

export default WhatsAppButton;
