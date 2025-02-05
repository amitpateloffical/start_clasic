import React from 'react';

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start mt-auto py-3">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">About</h5>
            <p>Star Classic Home Appliances,  largest residential, commercial, and industrial air cooler manufacturer.</p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact</h5>
            <ul className="list-unstyled">
              <li>Phone: 0123456789</li>
              <li>Email: marketing@starClassic.in</li>
              <li>Address: Shop No. 11, Gada Ji Trust Complex, Gujarati Bazaar, Sagar, Madhya Pradesh 470002</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">More</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark">Privacy Policy</a></li>
              <li><a href="#" className="text-dark">Terms & Conditions</a></li>
              <li><a href="#" className="text-dark">Return Policy</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark">Facebook</a></li>
              <li><a href="#" className="text-dark">Instagram</a></li>
              <li><a href="#" className="text-dark">Twitter</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3 bg-dark text-white">
        &copy; 2025 Star Classic. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
