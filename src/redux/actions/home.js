export const TOGGLE_DRAWER_STATE = 'TOGGLE_DRAWER_STATE';
export const TOGGLE_RIGHT_DRAWER_STATE = 'TOGGLE_RIGHT_DRAWER_STATE';

export const toggleDrawer = () => {
    return {
        type: TOGGLE_DRAWER_STATE
    }
}

export const toggleRightDrawer = () => {
    return {
        type: TOGGLE_RIGHT_DRAWER_STATE
    }
}