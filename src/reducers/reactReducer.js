import constants from './../constants';
const { initialState, types } = constants;

const reactReducer = (state = initialState.reactById, action) => {
    const { question, answer, id } = action;
    switch (action.type) {

        case types.ADD_REACTQA:
            let newState = Object.assign({}, state, {
                [id]: {
                    question: question,
                    answer: answer
                }
            });
            return newState;

        default:
            return state;
    }
};

export default reactReducer;
