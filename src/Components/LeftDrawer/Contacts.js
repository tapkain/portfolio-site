import React from "react";
import { IconButton } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

const styles = theme => ({
  margin: {
    margin: 5
  }
});

const theme = createMuiTheme({
  contacts: {
    github: "#333",
    twitter: "#38A1F3",
    linkedin: "#0077B5",
    mail: "#bd2c00"
  }
});

const links = {
  github: "https://github.com/tapkain",
  twitter: "https://twitter.com/tapkain",
  linkedin: "https://www.linkedin.com/in/yevhenii-velizhenkov-4227abb9/",
  mail: "mailto:tredasaibot@gmail.com"
};

function Contacts(props) {
  const { classes } = props;
  return (
    <div>
      <IconButton
        aria-label="Github"
        className={classes.margin}
        style={{ color: theme.contacts.github }}
        onClick={() => window.open(links.github)}
      >
        <i class="fab fa-github" />
      </IconButton>
      <IconButton
        aria-label="Twitter"
        className={classes.margin}
        style={{ color: theme.contacts.twitter }}
        onClick={() => window.open(links.twitter)}
      >
        <i class="fab fa-twitter" />
      </IconButton>
      <IconButton
        aria-label="LinkedIn"
        className={classes.margin}
        style={{ color: theme.contacts.linkedin }}
        onClick={() => window.open(links.linkedin)}
      >
        <i class="fab fa-linkedin" />
      </IconButton>
      <IconButton
        aria-label="Mail"
        className={classes.margin}
        style={{ color: theme.contacts.mail }}
        onClick={() => window.open(links.mail)}
      >
        <i class="fas fa-envelope" />
      </IconButton>
    </div>
  );
}

Contacts.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contacts);
