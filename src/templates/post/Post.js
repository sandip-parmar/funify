import React from "react";
import { Grid } from "@material-ui/core";
import img from '../../resource/images/img1.jpg';
import { withStyles } from '@material-ui/core';

const styles = {
    img:{  
        height: '100%',
        width: '100%',
        'object-fit': 'contain'      
    }
}

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      const {classes} = this.props;
    return (
      <Grid
        container
        direction={"row"}
        alignItems={"center"}
        justify={"center"}
      >

        <Grid item xs={12} sm={12} md={8} lg={6}>
            <img src={img} className={classes.img}></img>
        </Grid>
        <Grid item item xs={12} sm={12} md={4}>
            {/* comment section */}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Post);
