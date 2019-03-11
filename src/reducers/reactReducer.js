import constants from './../constants';
const { initialState, types } = constants;

const reactReducer = (state = initialState.reactById, action) => {
    const { question, answer, id } = action;
    console.log('React Reducer: Recieved action type: ', action.type);
    switch (action.type) {

        case types.ADD_REACTQA:
            let newState = Object.assign({}, state, {
                [id]: {
                    question: question,
                    answer: answer
                }
            });
            console.log('React Reducer: New state: ', newState);
            return newState;

        default:
            return state;
    }
};

export default reactReducer;
