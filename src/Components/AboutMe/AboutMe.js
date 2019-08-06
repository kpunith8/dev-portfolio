import React from "react";
import { Grid, Card, Typography, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  aboutMe: {
    display: "grid",
    alignItems: "center",
    justifyItems: "center",
    padding: "10px",
    color: "#db5704"
  },
  aboutInfo: {
    fontSize: "15px",
    textAlign: "justify",
    lineHeight: 1.8
  }
}));

const AboutMe = () => {
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "lightgray", margin: "0px" }}>
      <Typography
        color="textPrimary"
        gutterBottom
        variant="h4"
        className={classes.aboutMe}
      >
        About Me
      </Typography>
      <Grid container alignItems="center" justify="center" spacing={2}>
        <Grid item xs={7} style={{ marginBottom: "30px" }}>
          <Card>
            <CardContent>
              <Typography variant="body1" className={classes.aboutInfo}>
                I've over 5 years of experience as software engineer and have an
                experience worked at small and large orginizations. My expertise
                is in front end web development with scalable technologies such
                as React. I love building things with simplicity in mind and I'm
                most attracted to solving real customer problems. I'm looking
                for a role where I can gain experience and solve problems
                eloquently. Have a long term vision to improve and bring
                value to the organization through constant learning and mentoring.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutMe;
