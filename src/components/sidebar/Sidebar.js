import React from "react";
import { Grid, Icon, Typography, List } from "@material-ui/core";
import Item from "../list-item/Item";
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        width: '100%',
        height: '88vh',
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

    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid
                container
                spacing={8}
                direction={"column"}
                justify={"flex-start"}
            >
                <Grid item>
                    <Grid
                        container
                        spacing={16}
                        direction={"row"}
                        justify={"center"}
                        alignItems={'center'}
                        className={classes.mt1}>
                            <Grid item><Icon>monochrome_photos</Icon></Grid>
                            <Grid item><Typography variant={'display1'}>Instagram</Typography></Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <List className={classes.root}>
                        <Item icon="home" title="Home" />
                        <Item icon="switch_video" title="Live" />
                        <Item icon="message" title="Message" />
                        <Item icon="notifications" title="Notification" />
                        <Item icon="settings" title="Settings" />
                        <Item icon="power_settings_new" title="Logout" />
                    </List>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Sidebar);