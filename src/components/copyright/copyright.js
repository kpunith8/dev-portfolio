import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  contact: {
    display: "grid",
    alignItems: "center",
    justifyItems: "center",
    padding: 10,
  },
}));

const Copyright = () => {
  const classes = useStyles();

  return (
    <div style={{ margin: 0 }}>
      <div
        className={classes.contact}
        style={{ color: "black", marginTop: -10 }}
      >
        <div style={{ display: "flex", marginTop: 20, marginBottom: 30 }}>
          <Typography color="textSecondary">
            Copyright &copy; {new Date().getFullYear()} Punith K
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
