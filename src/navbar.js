import React from 'react';
import logo from './assets/Logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top">
      <div className="container-fluid" style={{ borderBottom: '1px white solid' }}>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Left side buttons */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-but">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Expertise</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">People</a>
            </li>
          </ul>

          {/* Logo */}
          <div className="navbar-brand d-flex justify-content-center align-items-center">
            <img src={logo} alt="Logo" class='Navbar-logo'/>
          </div>

          {/* Right side buttons */}
          <ul className="navbar-nav navbar-but">
            <li className="nav-item">
              <a className="nav-link" href="#">Careers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">AU</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
