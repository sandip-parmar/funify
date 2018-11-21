import React from "react";
import { 
  Grid, 
 } from "@material-ui/core";
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { getPost } from '../../redux/actions/post';
import Sidebar from './Sidebar';

const styles = {
    img:{  
        height: '100%',
        width: '100%',
        'object-fit': 'contain'      
    }
}


class Post extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
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
        spacing={24}
        direction={"row"}
        alignItems={"center"}
        justify={"center"}
      >

        <Grid item xs={12} sm={12} md={8} lg={6}>
            <img alt="Post" src={`/static/images/${this.props.post.img_name}`} className={classes.img}></img>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          { !this.props.loading && 
          <Sidebar {...this.props.post}/>}
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
