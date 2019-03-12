import { combineReducers } from 'redux';
import jsReducer from './jsReducer';
import reactReducer from './reactReducer';
import csharpReducer from './csharpReducer';
import angularReducer from './angularReducer';

const rootReducer = combineReducers({
    javaScriptById: jsReducer,
    reactById: reactReducer,
    csharpById: csharpReducer,
    angularById: angularReducer
});

export default rootReducer;
