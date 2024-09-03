import ResumePdf from "../assets/NamitaShahCV.pdf";
import NavBar from "../navbar/NavBar";
import "./Resume.css";

import React from "react";

const Resume = () => {
  return (
    <>
      <NavBar />
      <div
        id="Iframe-Master-CC-and-Rs"
        className="set-margin set-padding set-border set-box-shadow center-block-horiz"
      >
        <div
          className="responsive-wrapper 
       responsive-wrapper-wxh-572x612"
          style={{ WebkitOverflowScrolling: "touch", overflow: "auto" }}
        >
          <iframe
            title="Resume"
            src={ResumePdf}
            width="100%"
            height="100%"
            style={{ border: "none" }}
          >
            <p tyle={{ fontSize: "110%" }}>
              <em>
                <strong>ERROR: </strong>
                An &#105;frame should be displayed here but your browser version
                does not support &#105;frames.{" "}
              </em>
              Please update your browser to its most recent version and try
              again.
            </p>
          </iframe>
        </div>
      </div>
    </>
  );
};

export default Resume;
