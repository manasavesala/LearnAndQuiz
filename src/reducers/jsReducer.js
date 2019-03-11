import constants from './../constants';
const { initialState, types } = constants;

const jsReducer = (state = initialState.javaScriptById, action) => {
    const { question, answer, id } = action;
    console.log('JS Reducer: Recieved action type: ', action.type);
    switch (action.type) {

        case types.ADD_JSQA:
            let newState = Object.assign({}, state, {
                [id]: {
                    question: question,
                    answer: answer
                }
            });
            console.log('JS Reducer: New state: ', newState);
            return newState;

        default:
            return state;
    }
};

export default jsReducer;
