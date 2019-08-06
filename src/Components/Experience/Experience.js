import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  exp: {
    display: "grid",
    alignItems: "center",
    justifyItems: "center",
    padding: "10px"
  }
}));

const Experience = () => {
  const classes = useStyles();
  return (
    <div
      style={{ backgroundColor: "#d3dbe8", margin: "0px" }}
      className={classes.exp}
    >
      <p className="experience">Experience</p>
      <Grid container alignItems="center" justify="center" spacing={2}>
        <Grid item xs={11}>
          <Card>
            <CardContent>
              <Typography color="textPrimary" gutterBottom variant="h5">
                Cerner Healthcare Corporation India Pvt. Ltd
              </Typography>
              <Typography color="textSecondary" variant="subtitle1">
                Associate Senior Software Engineer
              </Typography>
              <Typography variant="body1">
                October-2017 -- August-2019
              </Typography>

              <br />
              <br />

              <Typography color="textSecondary" variant="subtitle1">
                Software Engineer
              </Typography>
              <Typography variant="body1">
                August-2015 -- September-2017
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <br />
      <Grid container alignItems="center" justify="center" spacing={2}>
        <Grid item xs={11}>
          <Card>
            <CardContent>
              <Typography color="textPrimary" gutterBottom variant="h5">
                Freelance Web and Android Developer
              </Typography>
              <Typography color="textSecondary" variant="subtitle1">
                Full Stack Developer
              </Typography>
              <Typography variant="body1">July-2014 -- August-2015</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <br />
      <Grid container alignItems="center" justify="center" spacing={2}>
        <Grid item xs={11} style={{ marginBottom: "30px" }}>
          <Card>
            <CardContent>
              <Typography color="textPrimary" gutterBottom variant="h5">
                Sha-Shib College
              </Typography>
              <Typography color="textSecondary" variant="subtitle1">
                Lecturer
              </Typography>
              <Typography variant="body1">
                October-2011 -- September-2012
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Experience;
