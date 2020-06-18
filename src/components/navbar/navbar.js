import React, { useEffect, useState } from "react";
import { Link } from "@material-ui/core";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

import "./nav.css";

const NavBar = () => {
  const media480 = useMediaQuery('(min-width:480px)')
  const [iconFontSize, setIconFontSize] = useState(32)

  useEffect(() => {
    if(media480) {
      setIconFontSize(36)
    }

  }, [media480])
  return (
    <>
      <div className="nav-links">
        <span className="user-name">PUNITH K</span>
        <div className="nav-items">
          <Link
            className="link email"
            color="textPrimary"
            href="mailto:kpunith8@gmail.com"
          >
            <EmailIcon style={{ fontSize: iconFontSize }}/>
          </Link>
          <Link
            className="link github"
            color="textPrimary"
            href="https://github.com/kpunith8/"
          >
            <GitHubIcon style={{ fontSize: iconFontSize }}/>
          </Link>
          <Link
            className="link twitter"
            color="textPrimary"
            href="https://twitter.com/techie_punith_k"
          >
            <TwitterIcon style={{ fontSize: iconFontSize }}/>
          </Link>
          <Link
            className="link linkedin"
            color="textPrimary"
            href="https://www.linkedin.com/in/punith-k-7902b328/"
          >
            <LinkedInIcon style={{ fontSize: iconFontSize }} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
