import React from "react";
import { Button } from "@material-ui/core";
import { connect } from 'react-redux';
import { spotify_url } from '../../env';

class SpotifyLogin extends React.Component {

    constructor(props){
        super(props);        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){        
        window.location = spotify_url;
    }

    render() {
        return (
        <div>
            <Button
                onClick={this.handleClick}>
                Login with Spotify
            </Button>
        </div>        
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state
    }
}
export default connect(mapStateToProps)(SpotifyLogin);
