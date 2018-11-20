import React from "react";
import { Grid, Icon, Typography, Avatar, Modal,Button,List,ListItem,ListItemText } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { withStyles } from "@material-ui/core/styles";
import posed from 'react-pose';
import Stats from '../stats/States';
import profileIcon from '../../resource/icons/profile_icon.png';

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
  }
});

const styles = theme => ({
  profile_pic: {
    width: "2.5em",
    height: "2.5em",
    "border-radius": "50%",
    "background-color": "#ED4E6B"
  },
  card: {
    height: "auto",
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
    'max-width': '100%',
    height: 'auto',
    'object-fit': 'contain'
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    bottom:0
  },
});

class Card extends React.Component {
  constructor(props){
    super(props);
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
  }

  handleMenuClick(){
    console.log('clicked')
  }

  handleMenuItemClick() {
    console.log('menu item clicked')
  }

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
                    <Link to={`/home/user/${this.props.post.user_id}`}>
                      <Typography className={classes.icon}>
                          {this.props.post.name}
                      </Typography>
                    </Link>
                  </Grid>
                </Grid>
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
              <Link to={`home/post/${this.props.post.id}`}>
                <img src={'/static/images/img1.jpg'} className={classes.img}/>
              </Link>
            </Grid>
          </Grid>
          <Grid item className={classes.p05}>
            <Stats post={this.props.post} toggle={this.props.toggle}/>
          </Grid>
        </Grid>
      </Box>
    );
  }
}


export default withStyles(styles)(Card);
