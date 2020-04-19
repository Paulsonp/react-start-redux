import React from "react";
import ReactDOM from "react-dom";
import Root from "Root";
// import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

import Themes from "themes/index";
import App from "components/App";
import { LayoutProvider } from "context/LayoutContext";
import { UserProvider } from "context/UserContext";

ReactDOM.render(
  <Root>
    <LayoutProvider>
      <UserProvider>
        <ThemeProvider theme={Themes.default}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </UserProvider>
    </LayoutProvider>
  </Root>,

  document.querySelector("#root")
);
