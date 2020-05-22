import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { aboutMeInfo } from "../../utils/static-data";

const useStyles = makeStyles((theme) => ({
  aboutInfo: {
    fontSize: "16px",
    textAlign: "justify",
    lineHeight: 1.8,
  },
}));

const AboutMe = () => {
  const classes = useStyles();
  return (
    <>
      <p className="title-header about-me">About Me</p>
      <Grid container alignItems="center" justify="center" spacing={2}>
        <Grid item xs={11} style={{ marginBottom: "30px" }}>
          <Typography variant="body1" className={classes.aboutInfo}>
            {aboutMeInfo}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutMe;
