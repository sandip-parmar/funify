import React from "react";
import { Grid, Icon, Typography, Avatar } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { withStyles } from "@material-ui/core/styles";
import posed from 'react-pose';
import profileIcon from '../../resource/icons/profile_icon.png';
import img from '../../resource/images/img1.jpg';


const Box = posed.div({
  hoverable: true, 
  pressable: true,
  init: {
    scale: 1,
    boxShadow: "0px 0px 50px 0px rgba(0,0,0,0.15)",
  },
  hover: {
    scale: 1.02,
    boxShadow: "0px 0px 50px 0px rgba(0,0,0,0.2)",
  },
  press: {
    scale: 0.95,
    boxShadow: '0px 0px 50px 0px rgba(0,0,0,0.2)'
  }
});

const styles = {
  profile_pic: {
    width: "2.5em",
    height: "2.5em",
    "border-radius": "50%",
    "background-color": "#ED4E6B"
  },
  card: {
    height: "15rem",
    "background-color": "#FFF",
    "box-shadow": "0px 0px 50px 0px rgba(0,0,0,0.15)",
    width: "auto"
  },
  _card: {
    height: "100%"
  },
  p05: {
    padding: "0.5em"
  },
  icon: {
      color: '#9A9999'
  },
  img: {
    width: 'auto',
    height: '8em'
  }
};

class Card extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Box className={classes.card}>
        <Grid
          container
          direction={"column"}
          alignItems={"stretch"}
          justify={"space-between"}
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
                  <Avatar alt={this.props.username} src={profileIcon} />
                  </Grid>
                  <Grid item>
                    <Typography className={classes.icon}>
                        Sandip
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Icon color={'primary'}>more_vert</Icon>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container              
              direction={"row"}
              alignItems={"center"}
              justify={"center"}
                >
              <Link to={'home/post'}>
                <img src={img} className={classes.img}/>
              </Link>
            </Grid>
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
                  <Grid item>
                    <Icon className={classes.icon}>favorite_border</Icon>
                  </Grid>
                  <Grid item>
                    <Icon className={classes.icon}>chat_bubble_outline</Icon>
                  </Grid>
                  <Grid item>
                    <Icon className={classes.icon}>near_me</Icon>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Icon className={classes.icon}>turned_in</Icon>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default withStyles(styles)(Card);
