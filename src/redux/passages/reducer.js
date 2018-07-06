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
            var newPassages = state.passages.slice();
            newPassages.push(action.payload)
            return { ...state, passages: newPassages };
        case PASSAGES_EDIT:
            var newPassages = [];
            state.passages.forEach((passage) => {
                passage.id === action.payload.id ? newPassages.push(action.payload) : newPassages.push(passage)
            });
            return { ...state, passages: newPassages };
        case PASSAGES_DELETE :
            return { ...state, passages: state.passages.filter((passage) => {
                return passage.id !== action.payload
            })};
    }

    return state;
}
