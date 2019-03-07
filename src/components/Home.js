import React from "react";
import UIkit from "uikit";

UIkit.grid();

function Home() {
    return (
        <div className="uk-child-width-1-2@s uk-grid uk-card uk-card-large uk-card-default">
            <div className="uk-animation-toggle tabindex">
                <div className="uk-card uk-card-default uk-card-body uk-animation-shake">
                    <br />
                    <br />
                    <br />
                    <p className="uk-text-center">JavaScript</p>
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
    );
}

export default Home;