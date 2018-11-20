import * as React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

class Comments extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Grid 
                direction={'column'}
                alignItems={'flex-start'}
                justify={'flex-start'}
                spacing={8}>

                {this.props.comments.map((obj) => {
                    return (
                        <Grid item>
                        <Typography>
                        <Link to={`home/user/${obj.user_id}`}>
                            {obj.username}
                            </Link>
                            : {obj.body}
                        </Typography>                    
                </Grid>  
                    )
                })  }
            </Grid>
        )
    }
}

Comments.PropTypes = {
    comments: PropTypes.array.isRequired
}

export default Comments;