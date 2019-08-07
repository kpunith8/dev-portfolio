import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  edu: {
    display: "grid",
    alignItems: "center",
    justifyItems: "center",
    padding: "10px"
  }
}));

const Education = () => {
  const classes = useStyles();
  return (
    <div
      style={{ backgroundColor: "lightgray", margin: "0px" }}
      className={classes.edu}
    >
      <p className="education">Education</p>
      <Grid container alignItems="center" justify="center" spacing={3}>
        <Grid item xs={11}>
          <Card>
            <CardContent>
              <Typography color="textPrimary" gutterBottom variant="h5">
                P.E.S College of Engineering, Mandya
              </Typography>
              <Typography color="textSecondary" variant="subtitle1">
                Masters of Technology
              </Typography>
              <Typography color="textSecondary" variant="subtitle2">
                Computer Science and Engineering
              </Typography>
              <Typography variant="body1">October-2012 -- June-2014</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <br/>
      <Grid container alignItems="center" justify="center" spacing={3}>
        <Grid item xs={11} style={{ marginBottom: "30px" }}>
          <Card>
            <CardContent>
              <Typography color="textPrimary" gutterBottom variant="h5">
                Reva College of Engineering, Bengaluru
              </Typography>
              <Typography color="textSecondary" variant="subtitle1">
                Bachelors of Technology
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
