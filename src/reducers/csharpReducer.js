import constants from './../constants';
const { initialState, types } = constants;

const csharpReducer = (state = initialState.csharpById, action) => {
    const { question, answer, id } = action;
    console.log('csharp Reducer: Recieved action type: ', action.type);
    switch (action.type) {

        case types.ADD_CSHARPQA:
            let newState = Object.assign({}, state, {
                [id]: {
                    question: question,
                    answer: answer
                }
            });
            console.log('csharp Reducer: New state: ', newState);
            return newState;

        default:
            return state;
    }
};

export default csharpReducer;
