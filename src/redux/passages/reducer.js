import {
    PASSAGES_FETCH
} from './types';

const initialState = {
    passages: []
};

export default function(state=initialState, action) {
    switch(action.type) {
        case PASSAGES_FETCH:
            return { ...state, passages: action.payload };
    }

    return state;
}
