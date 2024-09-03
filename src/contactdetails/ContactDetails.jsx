import React from "react";
import "./ContactDetails.css";

import NavBar from "../navbar/NavBar";

const ContactDetails = () => {
  return (
    <>
      <NavBar />
      <div className="home-contact">
        <h2>Contact</h2>

        <div className="social-media">
          <a href="https://github.com/Ns48?tab=repositories">
            <i class="fa-brands fa-github fa-xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/namita-shah-b15923202/">
            <i class="fa-brands fa-linkedin-in fa-xl"></i>
          </a>
          <a href="mailto:namitashah1212@gmail.com">
            <i class="fa-solid fa-envelope fa-xl"></i>
          </a>
          <a href="https://api.whatsapp.com/send?phone=916352007588">
            <i class="fa-brands fa-whatsapp fa-xl"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
