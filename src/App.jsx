import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Home from "./home/Home";
import Menu from "./menu/Menu";

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={2}>
            <Menu />
          </Col>
          <Col md={10}>
            <Home />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
