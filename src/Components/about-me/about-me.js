import React from "react";
import { Grid } from "@material-ui/core";
import { aboutMeInfo } from "../../utils/static-data";

const AboutMe = () => (
  <>
    <p className="title-header about-me">About Me</p>
    <Grid container alignItems="center" justify="center" spacing={2}>
      <Grid item xs={11} style={{ marginBottom: 30 }}>
        <p className="about-info">{aboutMeInfo}</p>
      </Grid>
    </Grid>
  </>
);

export default AboutMe;
