import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  edu: {
    display: "grid",
    alignItems: "center",
    justifyItems: "center",
    padding: "10px",
    color: "#db5704"
  }
}));

const Education = () => {
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "lightgray", margin: "0px" }}>
      <Typography
        color="textPrimary"
        gutterBottom
        variant="h4"
        className={classes.edu}
      >
        Education
      </Typography>
      <Grid container alignItems="center" justify="center" spacing={2}>
        <Grid item xs={7}>
          <Card>
            <CardContent>
              <Typography color="textPrimary" gutterBottom variant="h5">
                P.E.S College of Engineering, Mandya
              </Typography>
              <Typography color="textSecondary" variant="subtitle1">
                Master of Technology
              </Typography>
              <Typography color="textSecondary" variant="subtitle2">
                Computer Science and Engineering
              </Typography>
              <Typography variant="body1">October-2012 -- June-2014</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container alignItems="center" justify="center" spacing={2}>
        <Grid item xs={7} style={{ marginBottom: "30px" }}>
          <Card>
            <CardContent>
              <Typography color="textPrimary" gutterBottom variant="h5">
                Reva College of Engineering, Bengaluru
              </Typography>
              <Typography color="textSecondary" variant="subtitle1">
                Bachelor of Technology
              </Typography>
              <Typography color="textSecondary" variant="subtitle2">
                Computer Science and Engineering
              </Typography>
              <Typography variant="body1">August-2007 -- June-2011</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Education;
