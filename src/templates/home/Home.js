import React from "react";
import {
  Grid, Hidden, List, ListItem, Divider, Button, Icon,
  Typography, FormControl, InputLabel, Input, InputAdornment, IconButton
} from "@material-ui/core";
import posed, { PoseGroup } from "react-pose";
import styled from "styled-components";
import { Switch, Route } from 'react-router'
import PostsGrid from '../../components/posts-grid/PostsGrid';
import { withStyles } from '@material-ui/core/styles';
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import Settings from "../../templates/settings/Settings";

const RouteContainer = posed.div({
  enter: {
    opacity: 1,
    delay: 300,
    beforeChildren: true
  },
  exit: {
    opacity: 0
  }
});

const styles = {
  root: {
    height: '100vh'
  },
  sidebar: {
    'background-color': "#FFF",
    '-webkit-box-shadow': '0px 0px 50px 0px rgba(0,0,0,0.15)',
    'z-index': '100',
    'height': '100%'
  },
  header: {
    padding: '0.5em 1em',
    '-webkit-box-shadow': '0px 0px 50px 0px rgba(0,0,0,0.15)'
  },
  removeFlexWrap: {
    'flex-wrap': 'nowrap !important'
  },
  body: {
    padding: '2em',
    height: '100vh',
    'overflow-y': 'auto'
  }
}

class Home extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        direction={"row"}
        alignItems={"flex-start"}
        className={classes.root}
      >
        <Hidden smDown>
          <Grid item md={3} lg={2} className={classes.sidebar}>
            <Sidebar />
          </Grid>
        </Hidden>
        <Grid item xs={12} sm={12} md={9} lg={10}>
          <Grid
            container
            direction={"column"}
            alignItems={"stretch"}
            justify={"flex-start"}
            className={classes.removeFlexWrap}
          >
            <Grid item className={classes.header}>
              <Header />
            </Grid>
            <Grid item className={classes.body}>
              <PoseGroup>
                <RouteContainer key={this.props.location.pathname}>
                  <Switch location={this.props.location}>
                    <Route exact path={this.props.match.url + "/"} component={PostsGrid} key="home"/>
                    <Route path={this.props.match.url +"/settings"} component={Settings} key="settings"/>
                    <Route exact path={this.props.match.url +"/live"} render={ () => <div>live</div>} key="live"/>
                    <Route exact path={this.props.match.url +"/messages"} render={ () => <div>messages</div>} key="messages"/>
                    <Route exact path={this.props.match.url +"/logout"} render={ () => <div>logout</div>} key="logout"/>  
                  </Switch>
                </RouteContainer>
              </PoseGroup>                          
            </Grid>
          </Grid>
        </Grid>
      </Grid >
    );
  }
}

export default withStyles(styles)(Home);
