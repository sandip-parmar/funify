import { 
    GET_AUTHORIZATION_TOKEN,
    RECEIVE_AUTHORIZATION_TOKEN,
    RECEIVE_AUTHORIZATION_ERROR
} from "../actions/spotify";
import { initialState } from "../intialState";

const spotify = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTHORIZATION_TOKEN: 
        return Object.assign({}, state, {
            isFetching: true
        });
    case RECEIVE_AUTHORIZATION_TOKEN: 
        return Object.assign({}, state, {
            data: action.data,
            isFetching: false
        });
    case RECEIVE_AUTHORIZATION_ERROR:
        return Object.assign({}, state, {
            isFetching: false
        });
    default:
      return state;
  }
};

export default spotify;