// import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";

import { useEffect } from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import Typed from "typed.js";
import "./Intro.css";

function Intro() {
  useEffect(() => {
    const options = {
      strings: ["Full Stack Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    };

    const typed = new Typed(".multi-text", options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Row className="background-color">
      <Col>
        <div
          style={{
            backgroundColor: "#FCF8F3",
            borderRadius: 10,
            marginTop: 55,
            color: "#FFD3B6",
          }}
        >
          <div style={{ marginTop: 20 }}>
            <h2
              class="btn btn-border-4"
              href="#"
              style={{ fontFamily: "monospace" }}
            >
              Home
            </h2>
          </div>
          <div style={{ marginTop: 20 }}>
            <h2
              class="btn btn-border-4"
              href="#"
              style={{ fontFamily: "monospace" }}
            >
              Home
            </h2>
          </div>
          <div style={{ marginTop: 20 }}>
            <h2
              class="btn btn-border-4"
              href="#"
              style={{ fontFamily: "monospace" }}
            >
              Home
            </h2>
          </div>
          <div style={{ marginTop: 20 }}>
            <h2
              class="btn btn-border-4"
              href="#"
              style={{ fontFamily: "monospace" }}
            >
              Home
            </h2>
          </div>
          <div style={{ marginTop: 20 }}>
            <h2
              class="btn btn-border-4"
              href="#"
              style={{ fontFamily: "monospace" }}
            >
              Home
            </h2>
          </div>
        </div>
      </Col>
      <Col xs={4}>
        <Card.Title
          style={{
            fontSize: 50,
            marginTop: 200,
            fontFamily: "cursive",
            color: "#677D6A",
          }}
        >
          Namita Shah
        </Card.Title>
        <h2
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 20,
            paddingLeft: 35,
            fontFamily: "cursive",
            color: "#677D6A",
          }}
        >
          I am a
          <span
            className="multi-text"
            style={{
              fontSize: 30,
              marginLeft: 10,
              fontFamily: "cursive",
              color: "#405D72",
            }}
          ></span>
        </h2>
        <p className="font-poppins" style={{ marginTop: 20 }}>
          My expertise lies both in front-end and back-end development, making
          sure the end product meets the client satisfaction.
        </p>
      </Col>

      <Col xs={6}>
        <Image src="/bannercodeimg.png" fluid />
      </Col>
    </Row>
  );
}

export default Intro;
