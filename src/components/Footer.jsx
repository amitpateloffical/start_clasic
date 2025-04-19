import React from "react";
import { Link } from "react-router-dom";
import facebookIcon from "../assets/Fb_logo.png";
import instagramIcon from "../assets/insta_logo.png";
import twitterIcon from "../assets/twit_png.png";
import whatsappIcon from "../assets/watsapp.png";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h5 className="text-lg font-semibold mb-4">About</h5>
            <p className="text-sm text-gray-300">
              Star Classic Home Appliances, the largest residential, commercial,
              and industrial air cooler manufacturer.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Contact</h5>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>📞 Phone: +91 9713220022</li>
              <li>✉️ Email: info@starclassic.in</li>
              <li>
                📍 Address: Shop No. 11, Gada Ji Trust Complex, Gujarati Bazaar,
                Sagar, MP 470002
              </li>
            </ul>
          </div>

          {/* More Links Section */}
          <div>
            <h5 className="text-lg font-semibold mb-4">More</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to={"/"}
                  className="text-gray-400 hover:text-white transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/air-coolers"}
                  className="text-gray-400 hover:text-white transition"
                >
                  Air-Coolers
                </Link>
              </li>
              <li>
                <Link
                  to={"/led-tvs"}
                  className="text-gray-400 hover:text-white transition"
                >
                  Led-Tvs
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact-us"}
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact-Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="https://www.facebook.com"
                  className="flex items-center text-white hover:text-blue-500 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={facebookIcon}
                    alt="Facebook"
                    width="20"
                    height="20"
                    className="mr-2"
                  />
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.instagram.com/singhaitelecomsagar?igsh=MTk1d3JuY2NzM3gyMQ=="
                  className="flex items-center text-white hover:text-pink-500 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={instagramIcon}
                    alt="Instagram"
                    width="20"
                    height="20"
                    className="mr-2"
                  />
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.twitter.com"
                  className="flex items-center text-white hover:text-sky-400 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={twitterIcon}
                    alt="Twitter"
                    width="20"
                    height="20"
                    className="mr-2"
                  />
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  to="https://wa.me/9713220022"
                  className="flex items-center text-white hover:text-green-300 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={whatsappIcon}
                    alt="WhatsApp"
                    width="20"
                    height="20"
                    className="mr-2"
                  />
                  WhatsApp (Chat Now)
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-800 text-center py-4 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Star Classic. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
