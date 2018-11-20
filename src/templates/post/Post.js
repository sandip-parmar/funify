import React from "react";
import { 
  Grid, 
  Divider, 
  TextField,
  List,
  ListItem,
  ListItemText,
  Avatar } from "@material-ui/core";
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { getPost } from '../../redux/actions/post';
import Stats from '../../components/stats/States';
import Comments from '../../components/comments/Comments';
import { Link } from 'react-router-dom';
const styles = {
    img:{  
        height: '100%',
        width: '100%',
        'object-fit': 'contain'      
    }
}

function TopRow(props){
  return (
    <List>
      <ListItem>
        <Avatar alt={props.name} src={`/static/images/${props.icon_name}`} />
        <Link to={`home/${props.user_id}`}>
          <ListItemText primary={props.name} />
        </Link>
      </ListItem>
    </List>
  )
}

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount(){
    this.props.getPost();
  }

  toggle(){
    
  }

  render() {
      const {classes} = this.props;
    return (
      <Grid
        container
        direction={"row"}
        alignItems={"center"}
        justify={"center"}
      >

        <Grid item xs={12} sm={12} md={8} lg={6}>
            <img src={`/static/images/${this.props.post.img_name}`} className={classes.img}></img>
        </Grid>
        <Grid item item xs={12} sm={12} md={4}>
          <Grid
            container
            direction={"column"}
            alignItems={"center"}
            justify={"space-between"}
          >

            <Grid item>
              <TopRow 
                name={this.props.post.name}
                icon_name={this.props.post.profile_pic_name}/>
            </Grid>
            <Divider/>
            <Grid item>
              {!this.props.loading &&
                <Comments comments={this.props.post.comments}/>
              }              
            </Grid>
            <Divider/>
            <Grid item>
              <Stats post={this.props.post} toggle={this.toggle}/>
            </Grid>
            <Divider/>
            <Grid item>
              <TextField placeholder="Add a comment"/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.post.data,
    loading: state.post.loading
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getPost: () => dispatch(getPost(12))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Post));
