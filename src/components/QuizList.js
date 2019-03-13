import React from 'react';
import Quiz from './Quiz';
import PropTypes from 'prop-types';

function QuizList(props) {
    var score = 0;
    return (
        <div>
            <hr />
            <h1>Quiz on Javascript</h1>
            <br />
            {Object.keys(props.quizList).map(function (id) {
                var jsList = props.quizList[id];
                return <Quiz question={jsList.question}
                    choice1={jsList.choice1}
                    choice2={jsList.choice2}
                    choice3={jsList.choice3}
                    currentRouterPath={props.currentRouterPath}
                    key={id}
                    id={id} />;
            })}
            <button class="uk-button uk-button-default uk-margin-small-right" type="button" data-uk-toggle="target: #modal-example">Submit</button>

            <div id="modal-example" data-uk-modal>
                <div class="uk-modal-dialog uk-modal-body">
                    <h2 class="uk-modal-title">Your Score: {score}</h2>

                    <p class="uk-text-right">
                        <button class="uk-button uk-button-primary uk-modal-close" type="button">Okay</button>
                    </p>
                </div>
            </div>

        </div>
    );
}

QuizList.propTypes = {
    quizList: PropTypes.object,
    currentRouterPath: PropTypes.string,
};

export default QuizList;