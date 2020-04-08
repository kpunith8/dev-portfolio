import React from "react";
import { Grid, Typography } from "@material-ui/core";

const Content = ({ header, role, period, ...props }) => {
  return (
    <Grid container alignItems="center" justify="center" spacing={3} {...props}>
      <Grid item xs={11}>
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h5"
          style={{ fontWeight: 100 }}
        >
          {header}
        </Typography>
        <Typography
          color="textSecondary"
          variant="h6"
          style={{ fontSize: "16px" }}
        >
          {role}
        </Typography>
        <Typography variant="body2" style={{ marginTop: "5px" }}>
          {period}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Content;
