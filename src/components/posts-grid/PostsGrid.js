import React from "react";
import { Grid} from "@material-ui/core";
import Card from "../card/Card";
import { withStyles } from '@material-ui/core/styles';

const styles = {
    _card_container: {
        padding: '1em'
    }
}

class PostsGrid extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <Grid
                container
                direction={"row"}              
                alignItems={"flex-start"}
                justify={"center"}
              >
                {
                  [1,2,3,4,5,6,7,8,9,1,1,1,1,1,1,1,1,11,1,1,1,1].map(() => {
                  return (
<Grid item className={classes._card_container} xs={12} sm={6} md={4} lg={3}>
                  <Card />
                </Grid>
                  )
                })}                              
              </Grid>
        );
    }
}

export default withStyles(styles)(PostsGrid);
