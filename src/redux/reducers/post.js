import {
    RECEIVE_POST_STARTED,
    RECEIVED_POST,
    RECEIVED_ERROR
} from '../actions/post';
import { initialState } from '../intialState';

const post = (state = initialState.data.post, action) => {

    switch(action.type){                

        case RECEIVE_POST_STARTED: {
            return {
                ...state,
                loading: true
            }
        }

        case RECEIVED_POST: {            
            return {
                ...state,
                data: action.data.data,
                loading: false
            }
        }

        case RECEIVED_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error
            }
        }

        default: 
            return state;
    }
}

export default post;