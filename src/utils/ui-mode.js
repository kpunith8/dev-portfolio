import React, { useEffect } from "react";
import { useLocalStorage } from "react-use";
import { Brightness4, BrightnessHigh } from "@material-ui/icons";
import { Fab, Tooltip, Zoom } from "@material-ui/core";

const UIMode = ({ prefersDarkMode, setMode }) => {
  // eslint-disable-next-line no-unused-vars
  const [__, setDefaultUIMode] = useLocalStorage("pk-portfolio-ui-mode");

  const onModeChange = () => {
    if (prefersDarkMode) {
      document.body.style.transition = "background 0.4s linear";
      setDefaultUIMode("light");
      setMode("light");
    } else {
      setDefaultUIMode("dark");
      setMode("dark");
    }
  };

  useEffect(() => {
    const navStyles = document.querySelector(".nav-links");

    if (!prefersDarkMode) {
      navStyles.style.background = "#fff";
      navStyles.style.boxShadow = "0 5px 10px -10px #000";
    } else {
      navStyles.style.background = "#303030";
      navStyles.style.boxShadow = "0 5px 10px -10px #fff";
    }
  }, [prefersDarkMode]);

  return (
    <div className="ui-mode">
      {prefersDarkMode ? (
        <Tooltip title="Toggle dark theme" TransitionComponent={Zoom}>
          <Fab
            aria-label="light-mode"
            className="light-mode"
            style={{ position: "fixed", bottom: 10, right: 15 }}
            onClick={onModeChange}
          >
            <BrightnessHigh />
          </Fab>
        </Tooltip>
      ) : (
        <Tooltip title="Toggle light theme" TransitionComponent={Zoom}>
          <Fab
            aria-label="black-mode"
            className="black-mode"
            color={"primary"}
            style={{ position: "fixed", bottom: 10, right: 15 }}
            onClick={onModeChange}
          >
            <Brightness4 />
          </Fab>
        </Tooltip>
      )}
    </div>
  );
};

export default UIMode;
