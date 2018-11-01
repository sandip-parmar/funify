import React from "react";
import {
  Grid,
  Hidden,
  List,
  ListItem,
  TextField,
  Button,
  Icon,
  Typography,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton
} from "@material-ui/core";
import posed from "react-pose";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    height: "100vh"
  },
  removeFlexWrap: {
    "flex-wrap": "nowrap !important"
  },
  body: {
    padding: "2em",
    height: "100vh",
    "overflow-y": "auto"
  }
};

class Settings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        direction={"row"}
        alignItems={"center"}
        justify={"center"}
        className={classes.root}
      >
          <Grid item sm={4}>
            <List>
                <ListItem>
                    Edit Profile
                </ListItem>
                <ListItem>
                    Change Password
                </ListItem>
                <ListItem>
                    Authorized Applications
                </ListItem>
                <ListItem>
                    Email & SMS
                </ListItem>
                <ListItem>
                    Manage Contacts
                </ListItem>
                <ListItem>
                    Privacy & Security
                </ListItem>
            </List>
          </Grid>

        <Grid item sm={8}>
            <TextField
            id="standard-uncontrolled"
            label="Name"
            defaultValue="foo"
            className={classes.textField}
            margin="normal"
            />

            <TextField
            id="standard-uncontrolled"
            label="Username"
            defaultValue="foo"
            className={classes.textField}
            margin="normal"
            />

            <TextField
            id="standard-uncontrolled"
            label="Website"
            defaultValue="foo"
            className={classes.textField}
            margin="normal"
            />

            <TextField
            id="standard-uncontrolled"
            label="Bio"
            defaultValue="foo"
            className={classes.textField}
            margin="normal"
            />

            <TextField
            id="standard-uncontrolled"
            label="Email"
            defaultValue="foo"
            className={classes.textField}
            margin="normal"
            />

            <TextField
            id="standard-uncontrolled"
            label="Phone Number"
            defaultValue="foo"
            className={classes.textField}
            margin="normal"
            />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Settings);
