import { Link } from "react-router-dom";
import noteimage from "../assets/notes.png";
import projectImage from "../assets/tripmine.png";
import NavBar from "../navbar/NavBar";
import "./Projects.css";

function Projects() {
  return (
    <>
      <NavBar />

      <h1>Projects </h1>

      <div class="container-projects">
        <div class="card" href="#demo">
          <picture class="card_picture">
            <img
              class="card_image"
              src={projectImage}
              alt="Tripmine"
              title="Tripmine"
            />
          </picture>
          <Link to="/projectDetails">
            <span class="card_more"></span>
          </Link>
          <div class="card_content">
            <p class="card_app">
              <i class="fa-brands fa-google-play"></i>Mobile App
            </p>
            <h3 class="card_title">Travel App</h3>
            <p class="card_description">
              Tripmine is a Travel Management App, the purpose of this app is to
              provide a seamless experience for all the users in terms of
              planning, budgeting, managing, and traveling.
            </p>
          </div>
        </div>
        <div class="card" href="#demo">
          <picture class="card_picture">
            <img
              class="card_image"
              src={noteimage}
              alt="Tripmine"
              title="Tripmine"
            />
          </picture>
          <Link to="/projectDetails">
            <span class="card_more"></span>
          </Link>
          <div class="card_content">
            <p class="card_app">Mobile App</p>
            <h3 class="card_title">Stick Note App</h3>
            <p class="card_description">
              Sticky Note is a Light Note-making Application made with
              React-native Technology, where users can create the wbdddw
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
