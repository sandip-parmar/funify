import React from "react";
import { Grid} from "@material-ui/core";
import Card from "../card/Card";
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { togglePostFields,toggleShareModal } from '../../redux/actions/data';

const styles = {
    _card_container: {
        padding: '1em'
    }
}

class PostsGrid extends React.Component {

    constructor(props){
        super(props);
    }
    
    render() {
        const { classes } = this.props;
        return (
            <Grid
                container
                direction={"row"}              
                alignItems={"flex-start"}
                justify={"center"}
              >
                {
                  this.props.grid.map((post,index) => {                      
                  return (
<Grid item className={classes._card_container} xs={12} sm={6} md={4} lg={3}>
                  <Card 
                    post={post} 
                    toggle={this.props.toggle} 
                    shareModalState={this.props.shareModalState}
                    toggleModal={this.props.toggleModal}/>
                </Grid>
                  )
                })}                              
              </Grid>
        );
    }
}

const mapStateToProps = state => {
    return {
        grid: state.data.homeGrid,
        shareModalState: state.data.shareModalState
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggle: (id,field) => dispatch(togglePostFields(id,field)),
        toggleModal: () => dispatch(toggleShareModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PostsGrid));
