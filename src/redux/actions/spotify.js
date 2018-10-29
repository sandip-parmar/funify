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

        return fetch(`
            https://accounts.spotify.com/authorize?response_type=code&client_id=2fdaa87358fd434f84c5c3c481ba2ca6&scope=user-read-private,user-read-email&redirect_uri=https://sp-funify.herokuapp.com/home
            `)
            .then(data => data.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => dispatch(receive_authorization_error()))
    }
}