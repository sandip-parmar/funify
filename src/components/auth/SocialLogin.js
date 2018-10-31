import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";

class SocialLogin extends React.Component {
  render() {
    return (
      <Grid
        container
        direction={"column"}
        justify={"center"}
        alignItems={"center"}
        spacing={16}
      >
        <Grid item>
          <Typography>Or {this.props.title} with</Typography>
        </Grid>
        <Grid item>
          <Grid
            container
            direction={"row"}
            alignItems={"center"}
            justify={"center"}
            spacing={16}
          >
            <Grid item>
              <Button>Google</Button>
            </Grid>
            <Grid item>
              <Button>Facebook</Button>
            </Grid>
            <Grid item>
              <Button>Github</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default SocialLogin;
