import React from "react";
import { Container } from "@material-ui/core";
import AboutMe from "../AboutMe/AboutMe";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";
import Skills from "../Skills/Skills";
import ContactMe from "../ContactMe/ContactMe";
import "./main-page.css";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles(theme => ({
//   btn: {
//     fontSize: 17,
//     margin: theme.spacing(2)
//   }
// }));

const MainPage = () => {
  // const classes = useStyles();

  return (
    <Container>
      <div className="main-page" style={{ backgroundColor: "#d3dbe8" }}>
        <p className="name">PUNITH K</p>
        <p className="role" style={{ marginBottom: "20px" }}>
          Software Engineer
        </p>
        {/* <Button variant="outlined" color="secondary" className={classes.btn}>
          Download CV
        </Button> */}
      </div>
      <AboutMe />
      <Experience />
      <Education />
      <Skills />
      <ContactMe />
    </Container>
  );
};

export default MainPage;
