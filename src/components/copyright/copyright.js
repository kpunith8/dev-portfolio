import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  contact: {
    display: "grid",
    alignItems: "center",
    justifyItems: "center",
    padding: "10px",
    color: "green",
  },
}));

const Copyright = () => {
  const classes = useStyles();

  return (
    <div style={{ margin: "0px" }}>
      <div
        className={classes.contact}
        style={{ color: "black", marginTop: "-10px" }}
      >
        <div style={{ display: "flex", marginTop: "10px" }}>
          <Typography color="textSecondary">
            &copy; {new Date().getFullYear()} Punith K
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
