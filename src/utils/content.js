import React from "react";
import { Grid, Typography } from "@material-ui/core";
import DateRangeIcon from "@material-ui/icons/DateRange";

const Content = ({ header, role, period, ...props }) => {
  return (
    <Grid container alignItems="center" justify="center" spacing={3} {...props}>
      <Grid item xs={11}>
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h6"
          style={{ fontWeight: 400 }}
        >
          {header}
        </Typography>
        <Typography
          color="textSecondary"
          style={{ fontSize: 15, marginTop: -8 }}
        >
          {role}
        </Typography>
        <div style={{ display: "flex", alignItems: "center" }}>
          <DateRangeIcon color="secondary" style={{ marginRight: 5 }} />
          <Typography
            color="textSecondary"
            variant="h5"
            style={{ marginTop: 5, fontSize: 16 }}
          >
            {period}
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default Content;
