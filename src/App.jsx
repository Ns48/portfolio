import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import About from "./about/About";
import ContactDetails from "./contactdetails/ContactDetails";
import Home from "./home/Home";
import NavBar from "./navbar/NavBar";
import ProjectDetails from "./projectdetails/ProjectDetails";
import Projects from "./projects/Projects";
import Resume from "./resume/Resume";

function App() {
  return (
    <>
      <Container fluid>
        <Routes>
          <Route element={<NavBar />} />

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<ContactDetails />} />
          <Route path="/projectDetails" element={<ProjectDetails />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
