import React from "react";
import facebookIcon from "../assets/Fb_logo.png"; // Update the path as needed
import instagramIcon from "../assets/insta_logo.png";
import twitterIcon from "../assets/twit_png.png";
import whatsappIcon from "../assets/watsapp.png"; // Optional, if using an icon for WhatsApp

function Footer() {
  return (
    <footer className="bg-dark text-white text-center text-lg-start mt-auto py-6">
      <div className="container p-2 gy-6">
        <div className="row">
          {/* About Section */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">About</h5>
            <p>
              Star Classic Home Appliances, the largest residential, commercial,
              and industrial air cooler manufacturer.
            </p>
          </div>

          {/* Contact Section */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact</h5>
            <ul className="list-unstyled">
              <li>📞 Phone: 0123456789</li>
              <li>✉️ Email: marketing@starClassic.in</li>
              <li>📍 Address: Shop No. 11, Gada Ji Trust Complex, Gujarati Bazaar, Sagar, Madhya Pradesh 470002</li>
            </ul>
          </div>

          {/* More Links Section */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0 text-white">
            <h5 className="text-uppercase">More</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-secondary">Privacy Policy</a></li>
              <li><a href="#" className="text-secondary">Terms & Conditions</a></li>
              <li><a href="#" className="text-secondary">Return Policy</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Follow Us</h5>
            <ul className="list-unstyled mb-4">
              <li>
                <a href="https://www.facebook.com" className="fw-bold text-white text-decoration-none" target="_blank" rel="noopener noreferrer">
                  <img src={facebookIcon} alt="Facebook" width="20" height="20" className="me-2 mb-2" />
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" className="fw-bold text-white text-decoration-none" target="_blank" rel="noopener noreferrer">
                  <img src={instagramIcon} alt="Instagram" width="20" height="20" className="me-2 mb-2" />
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" className="fw-bold text-white text-decoration-none" target="_blank" rel="noopener noreferrer">
                  <img src={twitterIcon} alt="Twitter" width="20" height="20" className="me-2 mb-2" />
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://wa.me/9713220022" className="fw-bold text-success text-decoration-none" target="_blank" rel="noopener noreferrer">
                  <img src={whatsappIcon} alt="WhatsApp" width="20" height="20" className="me-2 mb-2" />
                  WhatsApp (Chat Now)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="text-center p-3 bg-dark text-white">
        &copy; {new Date().getFullYear()} Star Classic. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
