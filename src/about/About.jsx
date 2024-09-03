import React from "react";
import { Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import abtImage from "../assets/namitaimg.jpeg";
import NavBar from "../navbar/NavBar";
import "./About.css";

const About = () => {
  return (
    <>
      <NavBar />
      <div>
        <Row className="about-container" xl={6}>
          <Col xs={5} xl={2} md={3}>
            <Image
              src={abtImage}
              roundedCircle
              className="about-content-image"
            />
          </Col>

          <Col xl={9} md={9} className="about-content">
            <h1>Namita Shah</h1>
            <h4>Full Stack Developer</h4>

            <p>
              I am a Full Stack Developer specializing in building both web and
              mobile applications. I ensure that applications are delivered
              smoothly and effectively to clients, besides I have a keen
              interest in design, I am dedicated to enhancing my expertise in
              UI/UX.
            </p>
          </Col>
        </Row>

        <Row style={{ marginLeft: "20rem" }}>
          <Col xl={4}>
            <Card
              style={{
                width: "18rem",
                backgroundColor: "rgb(239, 253, 219)",
                marginTop: "2rem",
                marginLeft: "6rem",
                height: "21rem",
              }}
            >
              <Card.Body>
                <Card.Title style={{ color: "#959564" }}>
                  Technical Skills
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Languages
                </Card.Subtitle>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <i
                      class="fa-brands fa-html5"
                      style={{ color: "#d26d2e", marginRight: 5 }}
                    ></i>
                    HTML5
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <i
                      class="fa-brands fa-css3"
                      style={{ color: "#522ed2", marginRight: 5 }}
                    ></i>
                    CSS3
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <i
                      class="fa-brands fa-js"
                      style={{ color: "#887604", marginRight: 5 }}
                    ></i>
                    JavaScript
                  </ListGroup.Item>
                  <ListGroup.Item>TypeScript</ListGroup.Item>
                  <ListGroup.Item>GraphQL</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          <Col xl={3}>
            <Card
              style={{
                width: "18rem",
                backgroundColor: "#e8eff6",
                marginTop: "2rem",
                marginBottom: "2rem",
              }}
            >
              <Card.Body>
                <Card.Title style={{ color: "#959564" }}>
                  Technical Skills
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  FrameWorks/Libraries
                </Card.Subtitle>
                <ListGroup variant="flush" className="ListGroup-Item">
                  <ListGroup.Item>
                    <i
                      class="fa-brands fa-html5"
                      style={{ color: "#d26d2e", marginRight: 5 }}
                    ></i>
                    .NET
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <i
                      class="fa-brands fa-react fa-xl"
                      style={{ color: "#887604", marginRight: 5 }}
                    ></i>
                    ReactJS
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <i
                      class="fa-brands fa-react fa-xl"
                      style={{ color: "#887604", marginRight: 5 }}
                    ></i>
                    React-Native
                  </ListGroup.Item>
                  <ListGroup.Item>Express</ListGroup.Item>
                  <ListGroup.Item>Expo</ListGroup.Item>

                  <ListGroup.Item>NodeJS</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={3}>
            <Card
              style={{
                width: "18rem",
                backgroundColor: "#fdfddb",
                marginTop: "2rem",
                marginBottom: "2rem",
                height: "21rem",
              }}
            >
              <Card.Body>
                <Card.Title style={{ color: "#959564" }}>
                  Technical Skills
                </Card.Title>
                <Card.Subtitle
                  className="mb-2 text-muted"
                  style={{ marginTop: "1rem" }}
                >
                  Database
                </Card.Subtitle>
                <ListGroup variant="flush">
                  <ListGroup.Item>MongoDB</ListGroup.Item>
                  <ListGroup.Item>Postgres</ListGroup.Item>
                  <Card.Title style={{ color: "#959564" }}>
                    Cloud Deployment
                  </Card.Title>
                  <ListGroup.Item>
                    <i
                      class="fa-brands fa-aws fa-xl"
                      style={{ color: "#887604", marginRight: 5 }}
                    ></i>
                    AWS
                  </ListGroup.Item>
                  <ListGroup.Item>Azure</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={3}>
            <Card
              style={{
                width: "18rem",
                backgroundColor: "#fdfddb",
                marginTop: "2rem",
                marginBottom: "2rem",
                marginLeft: "6rem",
              }}
            >
              <Card.Body>
                <Card.Title style={{ color: "#959564" }}>
                  Technical Skills
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Tools</Card.Subtitle>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <i
                      class="fa-brands fa-npm fa-xl"
                      style={{ color: "#d22e3e", marginRight: 5 }}
                    ></i>
                    npm
                  </ListGroup.Item>
                  {/* <ListGroup.Item>
                    <i
                      class="fa-brands fa-css3"
                      style={{ color: "#522ed2", marginRight: 5 }}
                    ></i>
                    WeSocket
                  </ListGroup.Item> */}

                  {/* <ListGroup.Item>
                    <i
                      class="fa-brands fa-js"
                      style={{ color: "#887604", marginRight: 5 }}
                    ></i>
                    Firebase
                  </ListGroup.Item> */}
                  <ListGroup.Item>
                    <i
                      class="fa-brands fa-git fa-xl"
                      style={{ color: "#101010", marginRight: 5 }}
                    ></i>
                    Git
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <i
                      class="fa-brands fa-github fa-xl"
                      style={{ color: "#0d0488", marginRight: 5 }}
                    ></i>
                    GitHub
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default About;
