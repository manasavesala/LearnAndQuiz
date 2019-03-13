import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
// import PropTypes from 'prop-types';

function AddQandA(props) {
    let _questionJS = null;
    let _answerJS = null;

    let _questionReact = null;
    let _answerReact = null;

    let _questionCSharp = null;
    let _answerCSharp = null;

    let _questionAngular = null;
    let _answerAngular = null;


    function handleNewJsQAFormSubmission(event) {
        const { dispatch } = props;
        event.preventDefault();
        const action = {
            type: 'ADD_JSQA',
            id: v4(),
            question: _questionJS.value,
            answer: _answerJS.value,
        };
        console.log('dispatching action: ', action);
        dispatch(action);

        _answerJS.value = '';
        _questionJS.value = '';
    }
    function handleNewReactQAFormSubmission(event) {
        const { dispatch } = props;
        event.preventDefault();
        const action = {
            type: 'ADD_REACTQA',
            id: v4(),
            question: _questionReact.value,
            answer: _answerReact.value,
        };
        console.log('dispatching action: ', action);
        dispatch(action);

        _answerReact.value = '';
        _questionReact.value = '';
    }
    function handleNewCSharpQAFormSubmission(event) {
        const { dispatch } = props;
        event.preventDefault();
        const action = {
            type: 'ADD_CSHARPQA',
            id: v4(),
            question: _questionCSharp.value,
            answer: _answerCSharp.value,
        };
        console.log('dispatching action: ', action);
        dispatch(action);

        _answerCSharp.value = '';
        _questionCSharp.value = '';
    }
    function handleNewAngularQAFormSubmission(event) {
        const { dispatch } = props;
        event.preventDefault();
        const action = {
            type: 'ADD_ANGULARQA',
            id: v4(),
            question: _questionAngular.value,
            answer: _answerAngular.value,
        };
        console.log('dispatching action: ', action);
        dispatch(action);

        _answerAngular.value = '';
        _questionAngular.value = '';
    }
    return (
        <div>
            <br />
            <ul uk-accordion="multiple: true">
                <li>
                    <a className="uk-accordion-title" href="#">Add Q and A to JavaScript </a>
                    <div className="uk-accordion-content">
                        <form onSubmit={handleNewJsQAFormSubmission}>
                            <p>Enter question: </p>
                            <div className="uk-margin">
                                <input className="uk-input" type="text" id='question' ref={(input) => { _questionJS = input; }} placeholder='enter question' />
                            </div>
                            <p>Enter answer: </p>
                            <div className="uk-margin">
                                <input className="uk-input" type='text' id='answer' ref={(input) => { _answerJS = input; }} placeholder='enter answer' />
                            </div>
                            <button type='submit'>Add! </button>
                        </form>
                    </div>
                </li>
            </ul>
            <br />
            <ul uk-accordion="multiple: true">
                <li>
                    <a className="uk-accordion-title" href="#">Add Q and A to React </a>
                    <div className="uk-accordion-content">
                        <form onSubmit={handleNewReactQAFormSubmission}>
                            <p>Enter question: </p>
                            <div className="uk-margin">
                                <input className="uk-input" type="text" id='question' ref={(input) => {
                                    console.log('React Question Ref - Hello! ;)');
                                    _questionReact = input;
                                }} placeholder='enter question' />
                            </div>
                            <p>Enter answer: </p>
                            <div className="uk-margin">
                                <input className="uk-input" type='text' id='answer' ref={(input) => { _answerReact = input; }} placeholder='enter answer' />
                            </div>
                            <button type='submit'>Add! </button>
                        </form>
                    </div>
                </li>
            </ul>
            <br />
            <ul uk-accordion="multiple: true">
                <li>
                    <a className="uk-accordion-title" href="#">Add Q and A to CSharp </a>
                    <div className="uk-accordion-content">
                        <form onSubmit={handleNewCSharpQAFormSubmission}>
                            <p>Enter question: </p>
                            <div className="uk-margin">
                                <input className="uk-input" type="text" id='question' ref={(input) => {
                                    console.log('CSharp Question Ref - Hello! ;)');
                                    _questionCSharp = input;
                                }} placeholder='enter question' />
                            </div>
                            <p>Enter answer: </p>
                            <div className="uk-margin">
                                <input className="uk-input" type='text' id='answer' ref={(input) => { _answerCSharp = input; }} placeholder='enter answer' />
                            </div>
                            <button type='submit'>Add! </button>
                        </form>
                    </div>
                </li>
            </ul>
            <br />
            <ul uk-accordion="multiple: true">
                <li>
                    <a className="uk-accordion-title" href="#">Add Q and A to Angular </a>
                    <div className="uk-accordion-content">
                        <form onSubmit={handleNewAngularQAFormSubmission}>
                            <p>Enter question: </p>
                            <div className="uk-margin">
                                <input className="uk-input" type="text" id='question' ref={(input) => { _questionAngular = input; }} placeholder='enter question' />
                            </div>
                            <p>Enter answer: </p>
                            <div className="uk-margin">
                                <input className="uk-input" type='text' id='answer' ref={(input) => { _answerAngular = input; }} placeholder='enter answer' />
                            </div>
                            <button type='submit'>Add! </button>
                        </form>
                    </div>
                </li>
            </ul>
        </div>
    );
}

// AddQandA.PropTypes = {
//     id: PropTypes.string,
//     question: PropTypes.string,
//     answer: PropTypes.string

// };

export default connect()(AddQandA);