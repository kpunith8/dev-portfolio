import React from "react";
import { Grid, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  aboutMe: {
    backgroundColor: "lightgray",
    height: '300px'
  },
  aboutInfo: {
    fontSize: "15px",
    textAlign: "justify",
    lineHeight: 1.5
  }
}));

const AboutMe = () => {
  const classes = useStyles();
  return (
    <Card style={{}}>
      <Grid
        container
        direction="row"
        spacing={1}
        alignItems="center"
        justify="center"
        className={classes.aboutMe}
      >
        <Grid item xs={3}>
          <h2>About Me</h2>
        </Grid>
        <Grid item xs={6}>
          <p className={classes.aboutInfo}>
            I've over 5 years of experience as software engineer and have an
            experience worked at small and large orginizations. My expertise is
            in front end web development with scalable technologies such as
            React. I love building things with simplicity in mind and I'm most
            attracted to solving real customer problems. I'm looking for a role
            where I can gain experience and solve problems eloquently. Have a
            long term vision to improve and bring the value organization through
            constant learning and teaching.
          </p>
        </Grid>
      </Grid>
    </Card>
  );
};

export default AboutMe;
