import React from "react";
import {
  Grid,
  List,
  ListItem,
} from "@material-ui/core";
import { Link, Route, Switch } from "react-router-dom";
import posed, { PoseGroup } from "react-pose";
import styled from "styled-components";
import Profile from "../../components/profile/Profile";
import { withStyles } from "@material-ui/core/styles";

const RouteContainer = posed.div({
  enter: {
    opacity: 1,
    delay: 200,
    beforeChildren: true
  },
  exit: {
    opacity: 0
  }
});

const styles = {
  root: {
    height: "100%"
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
    console.log(props);
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
            <Link to={`${this.props.match.url}/profile`}>
              <ListItem>Edit Profile</ListItem>
            </Link>
            <Link to={`${this.props.match.url}/password`}>
              <ListItem>Change Password</ListItem>
            </Link>
            <Link to={`${this.props.match.url}/auth-application`}>
              <ListItem>Authorized Applications</ListItem>
            </Link>
            <Link to={`${this.props.match.url}/email`}>
              <ListItem>Email & SMS</ListItem>
            </Link>
            <Link to={`${this.props.match.url}/manage-contacts`}>
              <ListItem>Manage Contacts</ListItem>
            </Link>
            <Link to={`${this.props.match.url}/privacy`}>
              <ListItem>Privacy & Security</ListItem>
            </Link>
          </List>
        </Grid>

        <Grid item sm={8}>
          <PoseGroup>
            <RouteContainer key={this.props.location.pathname}>
              <Switch location={this.props.location}>
                <Route
                  path={`${this.props.match.url}/profile`}
                  component={Profile}
                />
              </Switch>
            </RouteContainer>
          </PoseGroup>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Settings);
