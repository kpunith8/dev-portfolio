import React from "react";
import { Grid } from "@material-ui/core";
import { aboutMeInfo } from "../../utils/static-data";

const AboutMe = () => (
  <>
    <Grid container alignItems="center" justify="center" spacing={2}>
      <Grid item xs={11} style={{ marginBottom: 0, marginTop: -10 }}>
        <p className="about-info">{aboutMeInfo}</p>
      </Grid>
    </Grid>
    <hr className="line-break" />
  </>
);

export default AboutMe;
