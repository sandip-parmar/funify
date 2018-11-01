import React from 'react';
import { Grid, TextField } from '@material-ui/core';

class Profile extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Grid 
            container
            direction={'column'}>
                <TextField
                id="standard-uncontrolled"
                label="Name"
                defaultValue="foo"
                margin="normal"
                />

                <TextField
                id="standard-uncontrolled"
                label="Username"
                defaultValue="foo"
                margin="normal"
                />

                <TextField
                id="standard-uncontrolled"
                label="Website"
                defaultValue="foo"
                margin="normal"
                />

                <TextField
                id="standard-uncontrolled"
                label="Bio"
                defaultValue="foo"
                margin="normal"
                />

                <TextField
                id="standard-uncontrolled"
                label="Email"
                defaultValue="foo"
                margin="normal"
                />

                <TextField
                id="standard-uncontrolled"
                label="Phone Number"
                defaultValue="foo"
                margin="normal"
                />
            </Grid>
        )
    }
}

export default Profile;