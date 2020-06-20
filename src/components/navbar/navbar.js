import React from "react";
import { websiteUrls } from "../../utils/static-data";
import { uuid } from "uuidv4";
import NavLink from "../../utils/nav-link";

import "./nav.css";

const NavBar = () => {
  return (
    <>
      <div className="nav-links">
        <span className="user-name">PUNITH K</span>
        <div className="nav-items">
          {websiteUrls.map((websiteUrl) => (
            <NavLink
              key={uuid()}
              toolTipTitle={websiteUrl.toolTipTitle}
              icon={websiteUrl.icon}
              url={websiteUrl.url}
              className={`link ${websiteUrl.type}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;
