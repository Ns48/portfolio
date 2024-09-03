import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <nav>
        <ul>
          <div className="menu">
            <div className="menu-content">
              <Link to="/">
                <h2 className="btn btn-border-4">
                  <i class="fa-solid fa-house"></i>
                  Home
                </h2>
              </Link>
              <Link to="/about">
                <h2 className="btn btn-border-4">
                  <i class="fa-solid fa-user"></i>
                  About
                </h2>
              </Link>
              <Link to="/projects">
                <h2 className="btn btn-border-4">
                  <i class="fa-solid fa-paperclip"></i>
                  Projects
                </h2>
              </Link>
              <Link to="/resume">
                <h2 className="btn btn-border-4">
                  <i class="fa-duotone fa-solid fa-file"></i>
                  Resume
                </h2>
              </Link>
              <Link to="/contact">
                <h2 className="btn btn-border-4">
                  <i class="fa-regular fa-address-book"></i>
                  Contact
                </h2>
              </Link>
            </div>
          </div>
        </ul>
      </nav>

      {/* MObile View Navbar */}
      <div className="menu-icon" onClick={handleShow}>
        <i class="fa-solid fa-bars"></i>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="menu-content">
            <Link to="/" className="menu-link">
              <h2 className="btn btn-border-4">
                <i class="fa-solid fa-house"></i>
                Home
              </h2>
            </Link>
            <Link to="/about" className="menu-link">
              <h2 className="btn btn-border-4">
                <i class="fa-solid fa-user"></i>
                About
              </h2>
            </Link>
            <Link to="/projects" className="menu-link">
              <h2 className="btn btn-border-4">
                <i class="fa-solid fa-paperclip"></i>
                Projects
              </h2>
            </Link>
            <Link to="/resume" className="menu-link">
              <h2 className="btn btn-border-4">
                <i class="fa-duotone fa-solid fa-file"></i>
                Resume
              </h2>
            </Link>
            <Link to="/contact" className="menu-link">
              <h2 className="btn btn-border-4">
                <i class="fa-regular fa-address-book"></i>
                Contact
              </h2>
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavBar;
