import React from "react";
import UIkit from "uikit";

UIkit.grid();
UIkit.modal();

function Quiz() {
    var style = {
        marginLeft: '50px'
    }
    var score = 0;

    return (
        <div style={style}>

            <ul uk-accordion="multiple: true">
                <li>
                    <a className="uk-accordion-title" href="#"><h1>Quiz on Javascript</h1></a>
                    <div className="uk-accordion-content">
                        <p>
                            <form >
                                <h3>Inside which HTML element do we put the JavaScript?</h3>

                                <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid" >
                                    <label><input class="uk-radio" type="radio" name="radio1" /> javascript</label>
                                    <label><input class="uk-radio" type="radio" name="radio1" /> script</label>
                                </div>

                                <h3>Inside which HTML element do we put the JavaScript?</h3>

                                <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                    <label><input class="uk-radio" type="radio" name="radio2" value="one" /> javascript</label>
                                    <label><input class="uk-radio" type="radio" name="radio2" value="two" /> script</label>
                                </div>
                                <h3>Inside which HTML element do we put the JavaScript?</h3>

                                <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                    <label><input class="uk-radio" type="radio" name="radio3" /> javascript</label>
                                    <label><input class="uk-radio" type="radio" name="radio3" /> script</label>
                                </div>
                                <button class="uk-button uk-button-default uk-margin-small-right" type="button" data-uk-toggle="target: #modal-example">Submit</button>
                            </form>
                            <div id="modal-example" data-uk-modal>
                                <div class="uk-modal-dialog uk-modal-body">
                                    <h2 class="uk-modal-title">Your Score: {score}</h2>

                                    <p class="uk-text-right">
                                        <button class="uk-button uk-button-primary uk-modal-close" type="button">Okay</button>
                                    </p>
                                </div>
                            </div>
                        </p>
                    </div>
                </li>
            </ul>
            <h1>Quiz on React</h1>
            <h1>Quiz on C#</h1>
            <h1>Quiz on Angular</h1>
        </div>
    );
}

export default Quiz;