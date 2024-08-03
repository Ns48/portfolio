import { useEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";
import Typed from "typed.js";
import "./Home.css";

function Home() {
  //Creates a new instance of Typed with the selector .multi-text and the specified options. Typed.js will apply the typing effect to any elements with the class .multi-text.
  useEffect(() => {
    const options = {
      strings: ["Full Stack Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
      showCursor: false,
    };

    const typed = new Typed(".multi-text", options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div>
        <Row className="home-container">
          <Col className="home-content" md={4} xl={6}>
            <h1>Namita Shah</h1>
            <h2>
              I am a<span className="multi-text" />
            </h2>
            <p className="font-poppins" xs={2} xl={5}>
              My expertise lies both in front-end and back-end development,
              making sure the end product meets the client satisfaction.
            </p>
          </Col>

          <Col xs={12} md={8} xl={6}>
            <Image src="/bannercodeimg.png" fluid />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;

//Typing Effect
//This useEffect hook sets up a Typewriter effect on elements with the class .multi-text when the component mounts, and ensures that any resources used by Typed.js are cleaned up when the component unmounts. The effect will type out the string "Full Stack Developer" with a specific typing and deleting speed and will repeat indefinitely.
