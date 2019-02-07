import React from "react";
import { LeftDrawer } from "./Components/LeftDrawer";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { red, yellow } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    secondary: red,
    background: {
      paper: yellow[200],
      default: red[500]
    },
    type: "light",
    contacts: {
      github: yellow[500]
    }
  }
});

console.log(theme);

export default props => (
  <MuiThemeProvider theme={theme}>
    <LeftDrawer />
  </MuiThemeProvider>
);
