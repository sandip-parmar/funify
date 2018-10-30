import React from "react";
import {
  Grid, Hidden, List, ListItem, Divider, Button, Icon,
  Typography, FormControl, InputLabel, Input, InputAdornment, IconButton
} from "@material-ui/core";
import posed from "react-pose";
import styled from "styled-components";
import Card from '../../components/card/Card';
import { withStyles } from '@material-ui/core/styles';
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";


const styles = {
  sidebar: {
    'background-color': "#FFF",
    '-webkit-box-shadow': '0px 0px 50px 0px rgba(0,0,0,0.15)',
    'z-index': 100
  },
  header: {
    padding: '0.5em 1em',
    '-webkit-box-shadow': '0px 0px 50px 0px rgba(0,0,0,0.15)'
  },
  _card_container: {
    height: '15rem',
    'background-color': "#FFF",
    '-webkit-box-shadow': '0px 0px 50px 0px rgba(0,0,0,0.15)',
},
  removeFlexWrap: {
    'flex-wrap': 'nowrap !important'
  },
  body: {
    padding: '2em'
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { classes } = this.props;

    return (
      <Grid
        container
        direction={"row"}
        alignItems={"flex-start"}
        justify={"flex-start"}
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
              <Grid
                container
                spacing={16}
                direction={"row"}              
                alignItems={"flex-start"}
                justify={"center"}
              >
                <Grid item className={classes._card_container} xs={12} sm={6} md={3} lg={3}>
                  <Card />
                </Grid>
                <Grid item className={classes._card_container} xs={12} sm={6} md={3} lg={3}>
                  <Card />
                </Grid>
                <Grid item className={classes._card_container} xs={12} sm={6} md={3} lg={3}>
                  <Card />
                </Grid>
                <Grid item className={classes._card_container} xs={12} sm={6} md={3} lg={3}>
                  <Card />
                </Grid>
                <Grid item className={classes._card_container} xs={12} sm={6} md={3} lg={3}>
                  <Card />
                </Grid>
                <Grid item className={classes._card_container} xs={12} sm={6} md={3} lg={3}>
                  <Card />
                </Grid>
                <Grid item className={classes._card_container} xs={12} sm={6} md={3} lg={3}>
                  <Card />
                </Grid>
                <Grid item className={classes._card_container} xs={12} sm={6} md={3} lg={3}>
                  <Card />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid >
    );
  }
}

export default withStyles(styles)(Home);
