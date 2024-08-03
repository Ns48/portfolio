import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <>
      <div className="menu">
        <div className="menu-content">
          <h2 className="btn btn-border-4">
            <i class="fa-solid fa-house"></i>
            Home
          </h2>

          <h2 className="btn btn-border-4">
            <i class="fa-solid fa-user"></i>
            About
          </h2>

          <h2 className="btn btn-border-4">
            <i class="fa-solid fa-paperclip"></i>
            Projects
          </h2>

          <h2 className="btn btn-border-4">
            <i class="fa-duotone fa-solid fa-file"></i>
            Resume
          </h2>

          <h2 className="btn btn-border-4">
            <i class="fa-regular fa-address-book"></i>
            Contact
          </h2>
        </div>
      </div>

      <div className="menu-icon">
        <i class="fa-solid fa-bars"></i>
      </div>
    </>
  );
};

export default Menu;
