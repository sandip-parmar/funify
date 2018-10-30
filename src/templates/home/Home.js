import React from "react";
import { Grid, Hidden, Typography } from "@material-ui/core";
import posed from "react-pose";
import styled from "styled-components";
import { withStyles } from '@material-ui/core/styles';


const Box = posed.div({
  hoverable: true,
  init: {
    position: "inherit",
    width: "inherit",
    "background-color": "#727272",
    padding: "1em"
  },
  hover: {
    position: "fixed",
    left: 0,
    top: 0,
    width: "250px",
    "background-color": "#727272",
    "z-index": 20,
    padding: "1em"
  }
});

const Drawer = styled(Box)`
  height: 100vh;
`;

const styles = {
  __container: {
    'background-color': '#FBFCFD'
  }
}

class Home extends React.Component {
  constructor(props){
    super(props);
    localStorage.setItem('access_token', props.location.hash.slice(props.location.hash.indexOf("=")+1,props.location.hash.indexOf("&")))
  }

  render() {

    const {classes} = this.props;

    return (
      <Grid
        container
        direction={"row"}
        align-items={"flex-start"}
        justify={"flex-start"}
        className={classes.__container}
      >
        <Hidden xsDown>
          <Grid item sm={1}>
            <Drawer>
              <Grid
                  container
                  direction={"column"}
                  align-items={"flex-start"}
                  justify={"flex-start"}
                >
                  <Grid item>
                      <Grid
                      container
                      direction={"column"}
                      align-items={"center"}
                      justify={"center"}
                    > 
                      <Grid item>
                        <div></div>
                      </Grid>
                      <Grid item>
                        Sandip Parmar
                      </Grid>
                      <Hidden xsDown>
                      <Grid item>
                        <Typography variant={'body'}>Music is the sound of thinking</Typography>
                      </Grid>
                      </Hidden>
                    </Grid>
                  </Grid>
                  <Grid item>

                  </Grid>
                  <Grid item>
                  
                  </Grid>
              </Grid>
            </Drawer>
          </Grid>
        </Hidden>

        <Grid item xs={11} sm={10}>
          Home
        </Grid>

        <Hidden xsDown>
          <Grid item xs={1}>
            Hello world
          </Grid>
        </Hidden>
      </Grid>
    );
  }
}

export default withStyles(styles)(Home);
