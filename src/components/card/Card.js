import React from "react";
import { Grid, Icon, Typography, Avatar, Modal,Button,List,ListItem,ListItemText } from "@material-ui/core";
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

// icon when like is true
function Marked(props){
  return (
    <Icon color={'primary'} onClick={props.toggle}>
      {props.icon}
    </Icon>
  )
};
// icon when like is false
function UnMarked(props){
  return (
    <Icon className={props.class} onClick={props.toggle}>
      {props.icon}
    </Icon>
  )
}

class Card extends React.Component {
  constructor(props){
    super(props);
    console.log(props)
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
    this.toggleLike = this.toggleLike.bind(this);
    this.toggleTurned = this.toggleTurned.bind(this);
  }

  handleMenuClick(){
    console.log('clicked')
  }

  handleMenuItemClick() {
    console.log('menu item clicked')
  }

  toggleLike(){
    this.props.toggle(this.props.post.id, 'like');
  }
  toggleTurned(){
    this.props.toggle(this.props.post.id, 'turned');
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
    {this.props.post.like ? <Marked icon={'favorite'} toggle={this.toggleLike}/> : <UnMarked class={classes.icon} icon={'favorite_border'} toggle={this.toggleLike}/> }                                      
                  </Grid>
                  <Grid item>
                    <Icon className={classes.icon}>chat_bubble_outline</Icon>
                  </Grid>
                  <Grid item>
                    <Icon className={classes.icon} onClick={this.props.toggleModal}>near_me</Icon>
                    <Modal
                      open={this.props.shareModalState}
                      onClose={this.props.toggleModal}>

                      <Grid
                        container
                        direction={"row"}
                        alignItems={"center"}
                        justify={"center"}
                        className={classes.paper}
                      >
                        <Grid item xs={12} sm={8} md={4}>
                        <List>
                            <ListItem dense>  
                              <ListItemText primary={<Button onClick={this.props.toggleModal}>Share to Facebook</Button>}>                                
                              </ListItemText>                            
                            </ListItem>                       
                            <ListItem>                              
                              <Button onClick={this.props.toggleModal}>Share to Facebook</Button>
                            </ListItem>                       
                            <ListItem>                              
                              <Button onClick={this.props.toggleModal}>Share to Facebook</Button>
                            </ListItem>                       
                            <ListItem>                              
                              <Button onClick={this.props.toggleModal}>Share to Facebook</Button>
                            </ListItem>                       
                            <ListItem>                              
                              <Button onClick={this.props.toggleModal}>Share to Facebook</Button>
                            </ListItem> 
                            <ListItem>                              
                              <Button onClick={this.props.toggleModal}>Report</Button>
                            </ListItem> 
                            <ListItem>                              
                              <Button onClick={this.props.toggleModal}>Mute</Button>
                            </ListItem>
                            <ListItem>                              
                              <Button onClick={this.props.toggleModal}>Cancel</Button>
                            </ListItem>                       
                        </List>
                        </Grid>
                      </Grid>                        
                    </Modal>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
              {this.props.post.turned ? <Marked icon={'turned_in'} toggle={this.toggleTurned}/> : <UnMarked class={classes.icon} icon={'turned_in_not'} toggle={this.toggleTurned}/> }
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    );
  }
}


export default withStyles(styles)(Card);
