import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { useLocalStorage } from "react-use";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AboutMe from "../about-me/about-me";
import Experience from "../experience/experience";
import Education from "../education/education";
import Skills from "../skills/skills";
import Copyright from "../copyright/copyright";
import NavBar from "../navbar/navbar";
import UIMode from "../../utils/ui-mode";

import "./main-page.css";

const MainPage = () => {
  const [defaultUIMode] = useLocalStorage("pk-portfolio-ui-mode", "dark");
  // default value is to support mobile browsers
  const [selectedUIMode, setSelectedUIMode] = useState(defaultUIMode || 'dark');
  const prefersDarkMode = useMediaQuery(
    `(prefers-color-scheme: ${selectedUIMode})`
  );

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

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
      <UIMode prefersDarkMode={prefersDarkMode} setMode={setSelectedUIMode} />
    </ThemeProvider>
  );
};

export default MainPage;
