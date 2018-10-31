import React from "react";
import { Grid, Icon, Typography } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

const styles = {    
    profile_pic: {
        width: '2.5em',
        height: '2.5em',
        'border-radius': '50%',
        'background-color': 'green'
    }, 
    card:{
        height: '15rem',
        'background-color': "#FFF",
        '-webkit-box-shadow': '0px 0px 50px 0px rgba(0,0,0,0.15)',
        width: 'auto'
    },   
    _card: {
        height: '100%',
    },
    p05: {
        padding: '0.5em'
    }
}

class Card extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.card}>
                <Grid
                    container
                    direction={"column"}
                    alignItems={'stretch'}
                    justify={'space-between'}
                    className={classes._card}
                >
                    <Grid item className={classes.p05}>
                        <Grid
                            container
                            direction={"row"}
                            alignItems={"center"}
                            justify={"space-between"}
                        >
                            <Grid item>
                                <Grid
                                    container
                                    spacing={8}
                                    direction={"row"}
                                    alignItems={"center"}
                                    justify={"flex-start"}
                                >
                                    <Grid item>
                                        <div className={classes.profile_pic}></div>
                                    </Grid>
                                    <Grid item>
                                        Sandip
                            </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Icon>more_vert</Icon>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <div>
                            <img />
                        </div>
                    </Grid>
                    <Grid item className={classes.p05}>
                        <Grid
                            container
                            direction={"row"}
                            alignItems={"center"}
                            justify={"space-between"}
                        >
                            <Grid item>
                                <Grid
                                    container
                                    spacing={8}
                                    direction={"row"}
                                    alignItems={"center"}
                                    justify={"flex-start"}
                                >
                                    <Grid item><Icon>favorite_border</Icon></Grid>
                                    <Grid item><Icon>chat_bubble</Icon></Grid>
                                    <Grid item><Icon>near_me</Icon></Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Icon>turned_in</Icon>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                </div>
        );
    }
}

export default withStyles(styles)(Card);
