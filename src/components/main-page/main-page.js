import React from "react";
import { Container } from "@material-ui/core";
import AboutMe from "../about-me/about-me";
import Experience from "../experience/experience";
import Education from "../education/education";
import Skills from "../skills/skills";
import Copyright from "../copyright/copyright";
import "./main-page.css";
import NavBar from "../navbar/navbar";

const MainPage = () => (
  <>
    <NavBar />
    <Container>
      <div className="main">
        <AboutMe />
        <Experience />
        <Education />
        <Skills />
        <Copyright />
      </div>
    </Container>
  </>
);

export default MainPage;
