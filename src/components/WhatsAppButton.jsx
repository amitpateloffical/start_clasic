import React from "react";
import whatsappIcon from "../assets/watsapp.png"; // Update with correct path

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/9713220022"
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
      How can I help you?
    </a>
  );
};

export default WhatsAppButton;
