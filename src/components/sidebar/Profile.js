import React from "react";
import { Grid, withStyles,Typography } from "@material-ui/core";
import { connect } from 'react-redux';

const styles = {
  root: {
    height: "100%",
    "padding": '1em',
    overflow: 'auto'
  },
  profile_pic: {
      height: '8em',
      width: '8em',
      'border-radius': '50%',
      'background-color': '#39d39f'
  },
  items: {
      'text-align': 'center'
  }
};

function Stats(props) {
  return (
    <Grid
      container
      direction={"column"}
      justify={"center"}
      alignItems={"center"}
      spacing={8}>

      <Grid item>{props.title}</Grid>
      <Grid item>{props.value}</Grid>
    </Grid>
  );
}

function ProfilePic(props) {
    return (
        <div className={props.classes.profile_pic}>
            <img src=""></img>
        </div>
    );
}

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        direction={"column"}
        justify={"flex-start"}
        alignItems={"stretch"}
        spacing={24}
        className={classes.root}
      >
        <Grid item>
            <Grid
            container
            direction={"row"}
            justify={"center"}
            alignItems={"center"}>
                <Grid item>
                    <ProfilePic classes={classes}/>
                </Grid> 
            </Grid>
        </Grid>
        <Grid item className={classes.items}>
            <Typography color="primary" variant="title">
                {this.props.user.name}
            </Typography>
            <Typography color="default" variant="caption">
                {this.props.user.status}
            </Typography>
        </Grid>        
        <Grid item>
          <Grid
            container
            direction={"row"}
            justify={"space-between"}
            alignItems={"center"}
          >
            {this.props.user.stats.map( (stat) => {
                return (
                    <Grid item><Stats title={stat.title} value={stat.value} /></Grid>
                )
            })}                        
          </Grid>
        </Grid>
        <Grid item>

        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        user: state.login.auth.user
    }
}

export default connect(mapStateToProps)(withStyles(styles)(Profile));
