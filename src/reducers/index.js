import { combineReducers } from 'redux';
import jsReducer from './jsReducer';
import reactReducer from './reactReducer';
import csharpReducer from './csharpReducer';

const rootReducer = combineReducers({
    javaScriptById: jsReducer,
    reactById: reactReducer,
    csharpById: csharpReducer
});

export default rootReducer;
