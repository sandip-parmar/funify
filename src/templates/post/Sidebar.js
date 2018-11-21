import React from "react";
import {
  Grid,
  List,
  ListItem,
  Avatar,
  ListItemText,
  ListItemAvatar,
  Typography,
  Divider,
  withStyles,
  Icon,
  TextField,
  IconButton
} from "@material-ui/core";
import { Link, Router } from "react-router-dom";

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%"
  },
  title: {
    fontWeight: 700,
    fontSize: 18
  },
  rootColumn: {
    height: "100%"
  },
  comments: {
    width: "100%",
    maxHeight: "50vh",
    overflowY: "auto"
  }
});
// functional component for showing profile head
function ProfileHead(props) {
  return (
    <List dense>
      <ListItem>
        <ListItemAvatar>
          <Avatar
            alt="User's profile image"
            src={`/static/images/${props.profile_pic}`}
          />
        </ListItemAvatar>
        <ListItemText>
          <Link to={`/home/user/${props.id}`}>
            <Typography variant="h6">{props.name}</Typography>
          </Link>
        </ListItemText>
      </ListItem>
    </List>
  );
}

function Comments(props) {
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start">
      <Grid item>
        <Typography>
          <Link to={`/home/user/${props.id}`}>
            <span className={props.title}>{props.name}:</span>
          </Link>{" "}
          {props.text}
        </Typography>
      </Grid>
    </Grid>
  );
}

function Actions(props) {
  return (
    <Grid
      container
      direction={"row"}
      justify={"space-between"}
      alignItems={"center"}>
      <Grid item>
        <IconButton>
          <Icon>favorite_border</Icon>
        </IconButton>
        <IconButton>
          <Icon>send</Icon>
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton>
          <Icon>turned_in_not</Icon>
        </IconButton>
      </Grid>
    </Grid>
  );
}

class Sidebar extends React.Component {

  constructor(props){
    super(props);
    console.log(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid
        className={classes.rootColumn}
        container
        spacing={8}
        direction={"column"}
        justify={"flex-start"}
        alignItems={"flex-start"}>
        <Grid item className={classes.root}>
          <ProfileHead name={this.props.name} id={this.props.user_id} profile_pic={this.props.profile_pic_name} />
          <Divider />
        </Grid>
        <Divider />
        <Grid item className={classes.comments}>
          {this.props.comments.map((comment) => {
            return (
              <Comments
                {...classes}
                name={comment.username}
                text={comment.body}
                id={comment.user_id}
              />
            );
          })}
          <Divider />
        </Grid>
        <Grid item className={classes.root}>
          <Grid
            container
            spacing={16}
            justify={"flex-start"}
            direction={"column"}
            alignItems={"flex-start"}>
            <Grid item className={classes.root}>
              <Actions {...classes} />
              <Divider />
            </Grid>
            <Grid item className={classes.root}>
              <TextField placeholder="Add a comment" fullWidth />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Sidebar);
