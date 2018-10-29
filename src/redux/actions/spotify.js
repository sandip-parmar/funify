import myStore from '../store';

export const GET_AUTHORIZATION_TOKEN = 'GET_AUTHORIZATION_TOKEN';
export const RECEIVE_AUTHORIZATION_TOKEN = 'RECEIVE_AUTHORIZATION_TOKEN';
export const RECEIVE_AUTHORIZATION_ERROR = 'RECEIVE_AUTHORIZATION_ERROR';

export const get_authorization_token = () => {
    return {
        type: "GET_AUTHORIZATION_TOKEN"
    }
}

export const receive_authorization_token = data => {
    return {
        type: "RECEIVE_AUTHORIZATION_TOKEN",
        data: data
    }
}

export const receive_authorization_error = () => {
    return {
        type: "RECEIVE_AUTHORIZATION_ERROR"
    }
}

export const thunk_get_authorization_token = () => {

    // initiate api req
    //myStore.dispatch(get_authorization_token());

    return function(dispatch, getState){

        const client_id = '2fdaa87358fd434f84c5c3c481ba2ca6';
        const scope = 'user-read-private user-read-email';
        const redirect_uri = 'https://sp-funify.herokuapp.com/home';

        let url = 'https://accounts.spotify.com/authorize';
        url += '?response_type=token';
        url += '&client_id=' + encodeURIComponent(client_id);
        url += '&scope=' + encodeURIComponent(scope);
        url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

        return fetch(url)
            .then(data => data.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => dispatch(receive_authorization_error()))
    }
}