import React from "react";
import { Button } from "@material-ui/core";
import { clientId } from '../../env';
import { connect } from 'react-redux';
import { thunk_get_authorization_token } from '../../redux/actions/spotify';

class Spotify extends React.Component {

    constructor(props){
        super(props);
        this.endpoint = "https://accounts.spotify.com/authorize";
        this.clientId = clientId;
        this.responseType = 'code';
        this.redirect_uri='http://localhost:3030'
        this.show_dialog = false;
        this.scope = 'user-read-private user-read-email'
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.dispatch(thunk_get_authorization_token());        
    }

    render() {
        return (
        <Button
            onClick={this.handleClick}>
            Spotify
        </Button>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state
    }
}
export default connect(mapStateToProps)(Spotify);
