import React from "react";
import { Grid, Icon, Typography, List } from "@material-ui/core";
import Item from "../list-item/Item";
import { withStyles } from '@material-ui/core/styles';
import pose from 'react-pose';

const Box = pose.div({
    hoverable: true,
    init: {
        scale: 1,
        x: 0,
        y: 0
    }, 
    hover: {
        scale: 1,
        x:10,
        y:0,
        boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
   } 
});

const styles = {
    root: {        
        'height': '100%',
        'overflow-y': 'auto',
        'overflow-x': 'hidden'
    },
    sidebar: {
        'background-color': "#FFF",
        '-webkit-box-shadow': '0px 0px 50px 0px rgba(0,0,0,0.15)'

    },
    mt1: {
        'margin-top': '1em'
    }
}

class Sidebar extends React.Component {
    
    render() {
        const { classes } = this.props;
        return (
            <Grid
                container
                spacing={8}
                direction={"column"}
                justify={"flex-start"}
                alignItems={'stretch'}
                className={classes.root}
            >                
                <Grid item>
                    <Grid
                        container
                        spacing={16}
                        direction={"row"}
                        justify={"center"}
                        alignItems={'center'}
                        className={classes.mt1}>
                            <Grid item>
                                <Icon color={'primary'}>monochrome_photos</Icon>
                            </Grid>
                            <Grid item><Typography variant={'h4'}>Instagram</Typography></Grid>
                    </Grid>
                    <List>
                        <Box className="box">
                            <Item icon="home" title="Home" route="home" />
                        </Box>
                        <Box className="box">
                            <Item icon="switch_video" title="Live" route="home/live" />
                        </Box>
                        <Box className="box">
                            <Item icon="message" title="Message" route="home/messages" />
                        </Box>
                        <Box className="box">
                            <Item icon="notifications" title="Notification" route="home/notification" />
                        </Box>
                        <Box className="box">
                            <Item icon="settings" title="Settings" route="home/settings" />
                        </Box>
                        <Box className="box">
                            <Item icon="power_settings_new" title="Logout" route="login" />
                        </Box>
                    </List>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Sidebar);
