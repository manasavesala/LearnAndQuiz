import { combineReducers } from 'redux';
import jsReducer from './jsReducer';
import reactReducer from './reactReducer';
import csharpReducer from './csharpReducer';
import angularReducer from './angularReducer';
import quizJSListReducer from './quizJSListReducer';

const rootReducer = combineReducers({
    javaScriptById: jsReducer,
    reactById: reactReducer,
    csharpById: csharpReducer,
    angularById: angularReducer,
    quizJSList: quizJSListReducer
});

export default rootReducer;
