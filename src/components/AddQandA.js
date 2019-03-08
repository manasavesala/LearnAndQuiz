import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function AddQandA(props) {
    let _question = null;
    let _answer = null;

    function handleNewJsQAFormSubmission(event) {
        const { dispatch } = props;
        event.preventDefault();
        const action = {
            type: 'ADD_JSQA',
            id: v4(),
            question: _question.value,
            answer: _answer.value,
        };
        dispatch(action);

        _answer.value = '';
        _question.value = '';
    }
    function handleNewReactQAFormSubmission(event) {
        const { dispatch } = props;
        event.preventDefault();
        const action = {
            type: 'ADD_REACTQA',
            id: v4(),
            question: _question.value,
            answer: _answer.value,
        };
        dispatch(action);

        _answer.value = '';
        _question.value = '';
    }
    return (
        <div>
            <br />
            <ul uk-accordion="multiple: true">
                <li className="uk-open">
                    <a className="uk-accordion-title" href="#">Add Q and A to JavaScript </a>
                    <div className="uk-accordion-content">
                        <form onSubmit={handleNewJsQAFormSubmission}>
                            <p>Enter question: </p>
                            <div className="uk-margin">
                                <input className="uk-input" type="text" id='question' ref={(input) => { _question = input; }} placeholder='enter question' />
                            </div>
                            <p>Enter answer: </p>
                            <div className="uk-margin">
                                <input className="uk-input" type='text' id='answer' ref={(input) => { _answer = input; }} placeholder='enter answer' />
                            </div>
                            <button type='submit'>Add! </button>
                        </form>
                    </div>
                </li>
            </ul>
            <br />
            <ul uk-accordion="multiple: true">
                <li className="uk-open">
                    <a className="uk-accordion-title" href="#">Add Q and A to React </a>
                    <div className="uk-accordion-content">
                        <form onSubmit={handleNewReactQAFormSubmission}>
                            <p>Enter question: </p>
                            <div className="uk-margin">
                                <input className="uk-input" type="text" id='question' ref={(input) => { _question = input; }} placeholder='enter question' />
                            </div>
                            <p>Enter answer: </p>
                            <div className="uk-margin">
                                <input className="uk-input" type='text' id='answer' ref={(input) => { _answer = input; }} placeholder='enter answer' />
                            </div>
                            <button type='submit'>Add! </button>
                        </form>
                    </div>
                </li>
            </ul>
        </div>
    );
}
export default connect()(AddQandA);