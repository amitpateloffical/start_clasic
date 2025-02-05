import React from 'react';
import logo from '../assets/starLogo.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark mb-10 fixed-top shadow-sm" style={{ paddingTop: '5px', paddingBottom: '5px' }}>
      <div className="container-fluid">
        <a className="navbar-brand rounded-circle" href="#"><img src={logo} alt="logo" style={{ width: '130px', height: '60px' }} className="rounded-circle" /></a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav m-0">
            <li className="nav-item"><a className="nav-link text-white fs-5 me-5" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link text-white fs-5 me-5" href="#">Air Coolers</a></li>
            <li className="nav-item"><a className="nav-link text-white fs-5 me-5" href="#">LED TVs</a></li>
            <li className="nav-item"><a className="nav-link text-white fs-5 me-5" href="#">Washing Machines</a></li>
            <li className="nav-item"><a className="nav-link text-white fs-5 me-5" href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
