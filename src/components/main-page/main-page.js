import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import { useLocalStorage } from "react-use";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AboutMe from "../about-me/about-me";
import Experience from "../experience/experience";
import Education from "../education/education";
import Skills from "../skills/skills";
import Copyright from "../copyright/copyright";
import NavBar from "../navbar/navbar";
import UIMode from "../../utils/ui-mode";
import ReactGA from "react-ga";

import "./main-page.css";

const GOOGLE_ANALYTICS_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID;

const MainPage = () => {
  const [defaultUIMode] = useLocalStorage("pk-portfolio-ui-mode", "dark");
  const [selectedUIMode, setSelectedUIMode] = useState(defaultUIMode);

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: selectedUIMode,
        },
      }),
    [selectedUIMode]
  );

  useEffect(() => {
    ReactGA.initialize(GOOGLE_ANALYTICS_ID);
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Container>
        <div className="main">
          <AboutMe />
          <Skills />
          <Experience />
          <Education />
          <Copyright />
        </div>
      </Container>
      <UIMode
        prefersDarkMode={selectedUIMode === "dark" ? true : false}
        setMode={setSelectedUIMode}
      />
    </ThemeProvider>
  );
};

export default MainPage;
