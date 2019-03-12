const questionListJS = {
    1: 'Question 1',
    2: 'Question 2'
};

const answerListJS = {
    1: 'answer 1',
    2: 'answer 2'
};

const questionListReact = {
    1: 'Question React 1',
    2: 'Question React 2'
};

const answerListReact = {
    1: 'answer 1',
    2: 'answer 2'
};

const questionListCSharp = {
    1: 'Question CSharp 1',
    2: 'Question CSharp 2'
};

const answerListCSharp = {
    1: 'answer 1',
    2: 'answer 2'
};

export const initialState = {
    javaScriptById: {
        1: {
            question: questionListJS[1],
            answer: answerListJS[1]
        },
        2: {
            question: questionListJS[2],
            answer: answerListJS[2]
        }
    },
    reactById: {
        1: {
            question: questionListReact[1],
            answer: answerListReact[1]
        },
        2: {
            question: questionListReact[2],
            answer: answerListReact[2]
        }
    },
    csharpById: {
        1: {
            question: questionListCSharp[1],
            answer: answerListCSharp[1]
        },
        2: {
            question: questionListCSharp[2],
            answer: answerListCSharp[2]
        }
    }
}