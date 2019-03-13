import React from "react";
import UIkit from "uikit";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

UIkit.grid();
UIkit.modal();

function Quiz(props) {

    return (
        <div>

            {/* <ul uk-accordion="multiple: true">
                <li>
                    <a className="uk-accordion-title" href="#"><h1>Quiz on Javascript</h1></a>
                    <div className="uk-accordion-content"> */}
            <p>
                <form >
                    <h3>{props.id}. {props.question}</h3>

                    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid" >
                        <label><input class="uk-radio" type="radio" name="radio1" /> {props.choice1}</label>
                        <br />
                        <label><input class="uk-radio" type="radio" name="radio1" /> {props.choice2}</label>
                        <br />
                        <label><input class="uk-radio" type="radio" name="radio1" /> {props.choice3}</label>
                        <br />
                    </div>
                    {/* <button class="uk-button uk-button-default uk-margin-small-right" type="button" data-uk-toggle="target: #modal-example">Submit</button> */}
                </form>
                {/* <div id="modal-example" data-uk-modal>
                    <div class="uk-modal-dialog uk-modal-body">
                        <h2 class="uk-modal-title">Your Score: {score}</h2>

                        <p class="uk-text-right">
                            <button class="uk-button uk-button-primary uk-modal-close" type="button">Okay</button>
                        </p>
                    </div>
                </div> */}
            </p>
            {/* </div>
                </li>
            </ul> */}
        </div>
    );
}
Quiz.prototype = {
    question: PropTypes.string.isRequired,
    choices: PropTypes.string.isRequired
}

export default connect()(Quiz);