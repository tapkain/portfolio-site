import React from "react";
import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Typography,
  ListItemIcon
} from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Contacts from "./Contacts";

const styles = {
  avatar: {
    width: 200,
    height: 200
  },
  drawer: {
    maxWidth: 230
  }
};

function LeftDrawer(props) {
  const { classes } = props;
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      classes={{ paper: classes.drawer }}
    >
      <Divider />
      <Contacts />
      <Divider />
      <br />
      <List>
        <ListItem>
          <Avatar
            alt="Remy Sharp"
            className={classes.avatar}
            src="https://uploads.codesandbox.io/uploads/user/15c9483c-c3b6-48e0-a114-16d2fbd8f5f0/NBzf-c6514481-517a-4acd-b85d-2a93d533ba4d-layerExport.png"
          />
        </ListItem>
        <br />
        <Divider />
        <ListItem>
          <Typography variant="h4" align="center">
            Yevhenii Velizhenkov
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="h5" align="center">
            Passionate🔥
            <br />
            Full-Stack📱💻⌚️ Developer from 🇺🇦
          </Typography>
        </ListItem>
        <Divider />
        <br />
        <ListItem button key="Projects">
          <ListItemIcon>
            <i class="fas fa-briefcase" />
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItem>
        <ListItem button key="Resume">
          <ListItemIcon>
            <i class="fas fa-file-contract" />
          </ListItemIcon>
          <ListItemText primary="Resume" />
        </ListItem>
      </List>
    </Drawer>
  );
}

LeftDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LeftDrawer);
