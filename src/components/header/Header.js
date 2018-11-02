import React from "react";
import { Grid, Icon, Typography, Hidden, IconButton, Avatar } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import posed from 'react-pose';
import profileIcon from '../../resource/icons/profile_icon.png';

const Input = posed.input({
  focusable: true,
  init: {
    scale: 1
  },
  focus: {
    scale: 1.2
  }
})
const styles = {
    search:{
        'background-color': '#F5F5F5',
        'border-radius': "25px",
        'border': 'none',
        'padding': '0.5em 2em',
        'outline': 'none !important',
        'color': 'rgba(0,0,0,0.86)'
      },
      logo: {
        'font-size': '1.5em',
      },
      'logoMd': {
        'font-size': '2.5em'
      },
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
                  <Hidden mdUp>
                    <IconButton color={'primary'} onClick={this.props.toggleDrawer}>
                      <Icon className={classes.logo}>photo_camera</Icon>
                    </IconButton>
                  </Hidden>
                  <Hidden smDown>
                    <Icon className={classes.logoMd} color={'primary'}>photo_camera</Icon>
                  </Hidden>
                </Grid>
                <Grid item>
                  <Input className={classes.search} type="text" placeholder={'Search'} />
                </Grid>
                <Grid item>
                  <Grid
                    container
                    spacing={16}
                    direction={"row"}
                    alignItems={"center"}
                    justify={"center"}
                    onClick={this.props.toggleRightDrawer}
                  >
                    <Grid item>
                      <Avatar alt={this.props.username} src={profileIcon} className={classes.avatar} />
                    </Grid>
                        <Grid item>
                            <Hidden xsDown>
                                <Typography variant={'body1'} color={'primary'}>Sandip</Typography>
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
