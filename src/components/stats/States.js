import React from "react";
import {
  Grid,
  Icon,
  Modal,
  List,
  ListItem,
  ListItemText,
  Button,
  withStyles
} from "@material-ui/core";


const styles = theme => ({
    icon: {
        color: '#9A9999'
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
function Marked(props) {
  return (
    <Icon color={"primary"} onClick={props.toggle}>
      {props.icon}
    </Icon>
  );
}
// icon when like is false
function UnMarked(props) {
  return (
    <Icon className={props.class} onClick={props.toggle}>
      {props.icon}
    </Icon>
  );
}

class States extends React.Component {
  constructor(props) {
    super(props);
    this.toggleLike = this.toggleLike.bind(this);
    this.toggleTurned = this.toggleTurned.bind(this);
  }

  toggleLike() {
    this.props.toggle(this.props.post.id, "like");
  }
  toggleTurned() {
    this.props.toggle(this.props.post.id, "turned");
  }
  render() {
    const { classes } = this.props;
    return (
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
              {this.props.post.like ? (
                <Marked icon={"favorite"} toggle={this.toggleLike} />
              ) : (
                <UnMarked
                  class={classes.icon}
                  icon={"favorite_border"}
                  toggle={this.toggleLike}
                />
              )}
            </Grid>
            <Grid item>
              <Icon className={classes.icon}>chat_bubble_outline</Icon>
            </Grid>
            <Grid item>
              <Icon className={classes.icon} onClick={this.props.toggleModal}>
                near_me
              </Icon>
              <Modal
                open={this.props.shareModalState}
                onClose={this.props.toggleModal}
              >
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
                        <ListItemText
                          primary={
                            <Button onClick={this.props.toggleModal}>
                              Share to Facebook
                            </Button>
                          }
                        />
                      </ListItem>
                      <ListItem>
                        <Button onClick={this.props.toggleModal}>
                          Share to Facebook
                        </Button>
                      </ListItem>
                      <ListItem>
                        <Button onClick={this.props.toggleModal}>
                          Share to Facebook
                        </Button>
                      </ListItem>
                      <ListItem>
                        <Button onClick={this.props.toggleModal}>
                          Share to Facebook
                        </Button>
                      </ListItem>
                      <ListItem>
                        <Button onClick={this.props.toggleModal}>
                          Share to Facebook
                        </Button>
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
          {this.props.post.turned ? (
            <Marked icon={"turned_in"} toggle={this.toggleTurned} />
          ) : (
            <UnMarked
              class={classes.icon}
              icon={"turned_in_not"}
              toggle={this.toggleTurned}
            />
          )}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(States);
