import React from "react";
import { Grid, Icon, Typography, List } from "@material-ui/core";
import Item from "../list-item/Item";
import { withStyles } from '@material-ui/core/styles';

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
                                <Icon>monochrome_photos</Icon>
                            </Grid>
                            <Grid item><Typography variant={'h4'}>Instagram</Typography></Grid>
                    </Grid>
                    <List>
                        <Item icon="home" title="Home" route="/" />
                        <Item icon="switch_video" title="Live" route="live" />
                        <Item icon="message" title="Message" route="messages" />
                        <Item icon="notifications" title="Notification" route="notification" />
                        <Item icon="settings" title="Settings" route="settings" />
                        <Item icon="power_settings_new" title="Logout" route="logout" />
                    </List>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Sidebar);
