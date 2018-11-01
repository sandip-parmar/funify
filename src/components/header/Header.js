import React from "react";
import { Grid, Icon, Typography, Hidden } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

const styles = {
    search:{
        'background-color': '#F5F5F5',
        'border-radius': "25px",
        'border': 'none',
        'padding': '0.5em 2em',
        'outline': 'none !important',
        'color': 'rgba(0,0,0,0.86)'
      },
      accent: {
        color: '#ED4E6B',
      },
      logo: {
        'font-size': '2em',
        color: '#ED4E6B',
      }
  }

class Header extends React.Component {

    constructor(props){
        super(props);        
    }

    render() {
        const {classes} = this.props;
        return (
            <Grid
                container
                direction={"row"}
                alignItems={"center"}
                justify={"space-between"}
              >
                <Grid item>
                  <Icon className={classes.logo}>photo_camera</Icon>
                </Grid>
                <Grid item>
                  <input className={classes.search} type="text" placeholder={'Search'}></input>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    spacing={16}
                    direction={"row"}
                    alignItems={"center"}
                    justify={"center"}
                  >
                    <Grid item>
                      <Icon>photo_camera</Icon>
                    </Grid>
                        <Grid item>
                            <Hidden xsDown>
                                <Typography variant={'body1'}>Sandip</Typography>
                                <Typography variant={'caption'}>Software</Typography>
                            </Hidden>
                        </Grid>
                  </Grid>
                </Grid>
              </Grid>      
        );
    }
}

export default withStyles(styles)(Header);
