import React, { useState } from "react";

export default function Navbar() {

  const [show, setShow] = useState(false)

  return (
    <nav className="navbar navbar-expand-sm navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <i className="uil uil-confused" /> Tongla :)
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setShow((show) => !show)}
        >
          <span className="navbar-toggler-icon" />
          <span className="navbar-toggler-icon" />
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse ${show ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a href="#about" className="nav-link">
                <span data-hover="About">About</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#project" className="nav-link">
                <span data-hover="Projects">Projects</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#resume" className="nav-link">
                <span data-hover="Resume">Resume</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                <span data-hover="Contact">Contact</span>
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-lg-auto">
            <div className="ml-lg-4">
              <div className="color-mode d-lg-flex justify-content-center align-items-center">
                <i className="color-mode-icon" />
                Color mode
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
