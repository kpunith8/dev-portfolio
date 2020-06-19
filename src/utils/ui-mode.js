import React, { useEffect } from "react";
import { useLocalStorage } from "react-use";
import { Brightness4, BrightnessHigh } from "@material-ui/icons";
import { Fab } from "@material-ui/core";
import Bowser from "bowser";

const UIMode = ({ prefersDarkMode, setMode }) => {
  // eslint-disable-next-line no-unused-vars
  const [__, setDefaultUIMode] = useLocalStorage("pk-portfolio-ui-mode");
  const browser = Bowser.getParser(window.navigator.userAgent);

  const onModeChange = () => {
    if (prefersDarkMode) {
      if (["Android", "iOS"].includes(browser.getOSName())) {
        setMode("light");
      }
      setDefaultUIMode("light");
      setMode("light");
    } else {
      if (["Android", "iOS"].includes(browser.getOSName())) {
        setMode("dark");
      }
      setDefaultUIMode("dark");
      setMode("dark");
    }
  };

  useEffect(() => {
    const navStyles = document.querySelector(".nav-links");
    const root = document.documentElement;

    if (!prefersDarkMode) {
      navStyles.style.background = "#fff";
      navStyles.style.boxShadow = "0 5px 20px -10px #000";

      root.style.setProperty("--header-color", "#23a");
    } else {
      navStyles.style.background = "#303030";
      navStyles.style.boxShadow = "0 5px 15px -10px #fff";

      root.style.setProperty("--header-color", "#1ad83b");
    }
  }, [prefersDarkMode]);

  return (
    <div>
      {prefersDarkMode ? (
        <Fab
          aria-label="light-mode"
          className="light-mode"
          style={{ position: "fixed", bottom: 10, right: 15, color: "black" }}
          onClick={onModeChange}
        >
          <BrightnessHigh />
        </Fab>
      ) : (
        <Fab
          aria-label="black-mode"
          className="black-mode"
          color={"inherit"}
          style={{ position: "fixed", bottom: 10, right: 15 }}
          onClick={onModeChange}
        >
          <Brightness4 />
        </Fab>
      )}
    </div>
  );
};

export default UIMode;
