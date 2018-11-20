import axios from 'axios';

export const RECEIVE_POST_STARTED = 'RECEIVE_POST_STARTED';
export const RECEIVED_POST = 'RECEIVED_POST';
export const RECEIVED_ERROR = 'RECEIVED_ERROR';

const receivedPostStarted = () => {
    return {
        type: RECEIVE_POST_STARTED
    }
}

const receivedPost = (data) => {
    return {
        type: RECEIVED_POST,
        data
    }
}

const receivedError = (error) => {
    return {
        type: RECEIVED_ERROR,
        error
    };
}

export const getPost = (id) => {

    return dispatch => {
        dispatch(receivedPostStarted());

        axios.get('http://demo3104658.mockable.io/post')
            .then( (data) => {
                dispatch(receivedPost(data));                
            }, (error) => {
                dispatch(receivedError(error))
            });
    }
}
