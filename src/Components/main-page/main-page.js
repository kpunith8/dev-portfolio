import React from "react";
import { Container } from "@material-ui/core";
import AboutMe from "../about-me/about-me";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";
import Skills from "../Skills/Skills";
import ContactMe from "../contact-me/contact-me";
import "./main-page.css";

const MainPage = () => (
  <Container>
    <div className="main-page">
      <p className="name">PUNITH K</p>
      <p className="role" style={{ marginBottom: "20px" }}>
        Full Stack Web Developer
      </p>
    </div>
    <AboutMe />
    <Experience />
    <Education />
    <Skills />
    <ContactMe />
  </Container>
);

export default MainPage;
