import constants from './../constants';
const { initialState, types } = constants;

const ReactReducer = (state = initialState.reactById, action) => {
    const { question, answer, questionId } = action;
    switch (action.type) {

        case types.ADD_QUESTION:
            let newState = Object.assign({}, state, {
                [questionId]: {
                    question: question,
                    answer: answer
                }
            });
            return newState;

        default:
            return state;
    }
};

export default ReactReducer;
