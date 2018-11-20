import {
    TOGGLE_POST_FIELDS,
    TOGGLE_SHARE_MODAL,
} from '../actions/data';
import { initialState } from '../intialState';

function toggle(homeGrid, id, field){

    let newGrid = homeGrid.slice();

    for( let p of newGrid){
        if(p.id === id){
            p[field] = !p[field];
            break;
        }
    }
    return newGrid;
}

const data = (state = initialState.data, action) => {

    switch(action.type){        
        case TOGGLE_POST_FIELDS: {
            return Object.assign({}, state, {
                homeGrid: toggle(state.homeGrid, action.id, action.field)
            });;
        }
        case TOGGLE_SHARE_MODAL: {
            return Object.assign({}, state, {
                shareModalState: !state.shareModalState
            });;
        }    
        default: 
            return state;
    }
}

export default data;