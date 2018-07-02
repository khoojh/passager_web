import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import passagesReducer from './passages/reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    passages: passagesReducer
});

export default rootReducer;
