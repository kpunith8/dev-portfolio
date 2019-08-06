import React from "react";
import { Icon, Typography, Breadcrumbs, Link } from "@material-ui/core";
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
    margin: theme.spacing(2)
  }
}));

const ContactMe = () => {
  const classes = useStyles();

  return (
    <div style={{ backgroundColor: "lightgray", margin: "0px" }}>
      <Typography
        color="textPrimary"
        gutterBottom
        variant="h5"
        className={classes.contact}
      >
        Contact Me
      </Typography>
      <div
        className={classes.contact}
        style={{ color: "black", marginTop: "-10px" }}
      >
        <div style={{ display: "flex", marginTop: "-10px" }}>
          <Typography color="textSecondary">
            Copyright &copy; 2019 Punith K
          </Typography>
        </div>
        <div style={{ display: "flex", marginTop: "10px" }}>
          <Icon>email</Icon>{" "}
          <Typography style={{ marginLeft: "5px" }} variant="body1">
            kpunith8@gmail.com
          </Typography>
        </div>
        <div style={{ display: "flex", marginTop: "10px" }}>
          <Breadcrumbs>
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
      </div>
    </div>
  );
};

export default ContactMe;
