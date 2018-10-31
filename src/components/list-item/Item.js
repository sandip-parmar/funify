import React from "react";
import { Grid, Hidden, List, ListItem, Typography, Button, Icon } from "@material-ui/core";
import posed from "react-pose";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

// pose animations
const Box = posed.div();

const styles = {
    item:{

    },
    icon:{
        'font-size': '2em',
        'color':'#727272'
    }
}

class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { classes } = this.props;

        return (
            <Link to={`${this.props.route}`}>
            <ListItem>
                <Grid
                    container
                    spacing={8}
                    direction={"row"}
                    alignItems={"center"}
                    justify={"flex-start"}
                    className={classes.item}
                >
                    <Grid item xs={3}>
                        <Icon className={classes.icon}>{this.props.icon}</Icon>
                    </Grid>
                    <Grid item>
                        <Typography variant={"body1"}>
                            {this.props.title}
                        </Typography>
                    </Grid>
                </Grid>
            </ListItem>            
            </Link>
        );
    }
}

export default withStyles(styles)(Item);
