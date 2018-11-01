import { TOGGLE_DRAWER_STATE } from '../actions/home';
import { initialState } from '../intialState';

const home = (state = initialState.home, action) => {
    switch(action.type){
        case TOGGLE_DRAWER_STATE : {
            return Object.assign({}, state, {
                drawer: !(state.drawer === true)
            })
        }

        default: 
            return state;
    }
}

export default home;