export const TOGGLE_POST_FIELDS = 'TOGGLE_POST_FIELDS';
export const TOGGLE_SHARE_MODAL = 'TOGGLE_SHARE_MODAL';

export const togglePostFields = (id,field) => {
    return {
        type: TOGGLE_POST_FIELDS,
        id: id,
        field, field
    }
}

export const toggleShareModal = () => {
    return {
        type: TOGGLE_SHARE_MODAL
    }
}