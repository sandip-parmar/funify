import React from "react";
import {
  Grid, Hidden, Drawer
} from "@material-ui/core";
import posed, { PoseGroup } from "react-pose";
import { Switch, Route } from 'react-router'
import PostsGrid from '../../components/posts-grid/PostsGrid';
import { withStyles } from '@material-ui/core/styles';
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import Settings from "../../templates/settings/Settings";
import { connect } from 'react-redux';
import { toggleDrawer } from '../../redux/actions/home';

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
  },
  drawer: {
    width: '18em !important',
    'overflow-x': 'hidden'
  }
}

class Home extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        direction={"row"}
        alignItems={"flex-start"}
        className={classes.root}
      >
        <Drawer open={this.props.drawer} onClose={this.props.toggleDrawer}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.props.toggleDrawer}
            onKeyDown={this.props.toggleDrawer}
            className={classes.drawer}
          >
            <Sidebar />
          </div>
        </Drawer>
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
              <Header toggleDrawer={this.props.toggleDrawer}/>
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

const mapStateToProps = state => {
  return {
    drawer: state.home.drawer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleDrawer: () => {
      dispatch(toggleDrawer())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home));
