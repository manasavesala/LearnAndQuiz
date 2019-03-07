import { combineReducers } from 'redux';
import jsReducer from './jsReducer';
import reactReducer from './reactReducer';

const rootReducer = combineReducers({
    javaScriptById: jsReducer,
    reactById: reactReducer
});

export default rootReducer;
