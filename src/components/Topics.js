import React from "react";
import UIkit from "uikit";
import { Link } from "react-router-dom";

UIkit.grid();

function Topics() {
    return (
        <div>
            <br />
            <div className="uk-child-width-1-2@s uk-grid uk-card ">
                <div className="uk-animation-toggle tabindex">
                    <div className="uk-card uk-card-default uk-card-body uk-animation-shake">
                        <br />
                        <br />
                        <br />
                        <p className="uk-text-center"><Link to="/jslist">JavaScript</Link></p>
                        <br />
                        <br />
                        <br />

                    </div>
                    <br />
                </div>
                <div className="uk-animation-toggle" tabindex="0">
                    <div className="uk-card uk-card-default uk-card-body uk-animation-slide-right">
                        <br />
                        <br />
                        <br />
                        <p className="uk-text-center">React</p>
                        <br />
                        <br />
                        < br />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topics;