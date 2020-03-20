import React from "react";
import { Typography, Breadcrumbs, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  contact: {
    display: "grid",
    alignItems: "center",
    justifyItems: "center",
    padding: "10px",
    color: "green"
  },
  icon: {
    margin: theme.spacing(1)
  }
}));

const ContactMe = () => {
  const classes = useStyles();

  return (
    <div style={{ margin: "0px" }}>
      <div
        className={classes.contact}
        style={{ color: "black", marginTop: "-10px" }}
      >
        <div style={{ display: "flex", marginTop: "10px" }}>
          <Breadcrumbs>
            <Link color="textPrimary" href="mailto:kpunith8@gmail.com">
              kpunith8@gmail.com
            </Link>
            <Link color="textPrimary" href="https://github.com/kpunith8/">
              Github
            </Link>
            <Link
              color="textPrimary"
              href="https://twitter.com/techie_punith_k"
            >
              Twitter
            </Link>
            <Link
              color="textPrimary"
              href="https://www.linkedin.com/in/punith-k-7902b328/"
            >
              LinkedIn
            </Link>
          </Breadcrumbs>
        </div>
        <div style={{ display: "flex", marginTop: "10px" }}>
          <Typography color="textSecondary">
            &copy; {new Date().getFullYear()} Punith K
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
