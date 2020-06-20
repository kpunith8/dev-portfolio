import React, { useEffect, useState } from "react";
import { Link, Tooltip, Zoom } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const NavLink = ({ toolTipTitle, url, icon: Icon, ...props }) => {
  const media480 = useMediaQuery("(max-width:480px)");
  const [iconFontSize, setIconFontSize] = useState("36px");

  useEffect(() => {
    if (media480) {
      setIconFontSize("34px");
    }
    return () => setIconFontSize("36px");
  }, [media480]);

  return (
    <Tooltip title={toolTipTitle} TransitionComponent={Zoom}>
      <Link color="textPrimary" href={url} {...props}>
        <Icon style={{ fontSize: iconFontSize }} />
      </Link>
    </Tooltip>
  );
};

export default NavLink;
