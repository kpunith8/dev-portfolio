import React from "react";
import { Link } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

import "./nav.css";

const NavBar = () => {
  return (
    <>
      <div className="nav-links">
        <span className="user-name">PUNITH K</span>
        <div className="nav-items">
          <Link
            className="link"
            color="textPrimary"
            href="mailto:kpunith8@gmail.com"
          >
            <EmailIcon />
          </Link>
          <Link
            className="link"
            color="textPrimary"
            href="https://github.com/kpunith8/"
          >
            <GitHubIcon />
          </Link>
          <Link
            className="link"
            color="textPrimary"
            href="https://twitter.com/techie_punith_k"
          >
            <TwitterIcon />
          </Link>
          <Link
            className="link"
            color="textPrimary"
            href="https://www.linkedin.com/in/punith-k-7902b328/"
          >
            <LinkedInIcon />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
