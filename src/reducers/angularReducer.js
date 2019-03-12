import constants from './../constants';
const { initialState, types } = constants;

const angularReducer = (state = initialState.angularById, action) => {
    const { question, answer, id } = action;
    console.log('angular Reducer: Recieved action type: ', action.type);
    switch (action.type) {

        case types.ADD_ANGULARQA:
            let newState = Object.assign({}, state, {
                [id]: {
                    question: question,
                    answer: answer
                }
            });
            console.log('angular Reducer: New state: ', newState);
            return newState;

        default:
            return state;
    }
};

export default angularReducer;
