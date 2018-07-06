import {
    PASSAGES_FETCH,
    PASSAGES_ADD,
    PASSAGES_EDIT,
    PASSAGES_DELETE
} from './types';

const initialState = {
    passages: []
};

export default function(state=initialState, action) {
    switch(action.type) {
        case PASSAGES_FETCH:
            return { ...state, passages: action.payload };
        case PASSAGES_ADD:
            return { ...state, passages: passages.push(action.payload) };
        case PASSAGES_EDIT:
            return { ...state, passages: passages.push(action.payload) };
        case PASSAGES_DELETE :
            return { ...state, passages: passages.filter((passage) => {
                passage.id !== action.payload.id
            })};
    }

    return state;
}
