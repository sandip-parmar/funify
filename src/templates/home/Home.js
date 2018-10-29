import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import posed from "react-pose";
import styled from "styled-components";

const Box = posed.div({
  hoverable: true,
  init: {
    "background-color": "#FFF",
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

class Home extends React.Component {
  render() {
    return (
      <Grid
        container
        direction={"row"}
        align-items={"flex-start"}
        justify={"flex-start"}
      >
        <Hidden xsDown>
          <Grid item xsDown sm={1}>
            <Drawer>Hello</Drawer>
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

export default Home;
