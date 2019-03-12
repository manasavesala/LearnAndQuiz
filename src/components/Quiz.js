import React from "react";
import UIkit from "uikit";

UIkit.grid();

function Quiz() {
    var style = {
        marginLeft: '50px'
    }
    return (
        <div style={style}>

            <ul uk-accordion="multiple: true">
                <li>
                    <a className="uk-accordion-title" href="#"><h1>Quiz on Javascript</h1></a>
                    <div className="uk-accordion-content">
                        <p>
                            <form>
                                <h3>Inside which HTML element do we put the JavaScript?</h3>

                                <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                    <label><input class="uk-radio" type="radio" name="radio1" /> javascript</label>
                                    <label><input class="uk-radio" type="radio" name="radio2" /> script</label>
                                </div>

                                <h3>Inside which HTML element do we put the JavaScript?</h3>

                                <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                    <label><input class="uk-radio" type="radio" name="radio3" /> javascript</label>
                                    <label><input class="uk-radio" type="radio" name="radio4" /> script</label>
                                </div>
                                <h3>Inside which HTML element do we put the JavaScript?</h3>

                                <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                    <label><input class="uk-radio" type="radio" name="radio5" /> javascript</label>
                                    <label><input class="uk-radio" type="radio" name="radio6" /> script</label>
                                </div>

                                <button class="uk-button uk-button-default">Submit</button>
                            </form>
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