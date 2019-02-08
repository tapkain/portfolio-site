import React from "react";
import { LeftDrawer } from "./Components/LeftDrawer";
import { Home } from "./Components/Content";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { red, blueGrey } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    secondary: red,
    background: {
      paper: blueGrey[500],
      default: red[500]
    },
    type: "light"
  }
});

const drawerWidth = 230;
const styles = {
  content: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  }
};

console.log(theme);

function App(props) {
  const { classes } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <LeftDrawer />
      <div className={classes.content}>
        <Home />
      </div>
    </MuiThemeProvider>
  );
}

export default withStyles(styles)(App);
