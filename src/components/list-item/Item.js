import React from "react";
import { Grid, Hidden, List, ListItem, Typography, Button, Icon } from "@material-ui/core";
import posed from "react-pose";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

// pose animations
const Box = posed.div({
    hoverable: true,
    init: {
        scale: 1,
    },
    hover: {
        scale: 1.1,
        border: '1 solid #000',
        boxShadow: '0px 5px 10px rgba(0,0,0,0.2)' 
    }
}
);

const styles = {
    item:{

    },
    title: {
        color: '#9A9999'
    },
    icon:{
        'font-size': '2em',
        'color':'#9A9999',        
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
<<<<<<< HEAD
                        <Typography variant={"body"} className={classes.title}>
=======
                        <Typography variant={"body1"}>
>>>>>>> 27a9693eb7352ee0892d1323aa18f56e011f106d
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
