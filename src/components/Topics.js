import React from "react";
import UIkit from "uikit";
import { Link } from "react-router-dom";
import reactLogo from '../images/react.jpg';
import jsLogo from '../images/js.png';
import csharp from '../images/csharp.png';
import angular from '../images/angular.png';
import html from '../images/html.png';
import css from '../images/css.png';

UIkit.grid();

function Topics() {
    return (
        <div>
            <br />
            <div className="uk-child-width-1-2@s uk-grid uk-card ">
                <div className="uk-animation-toggle tabindex">
                    <div className="uk-card uk-card-default uk-card-body uk-animation-slide-left">
                        <br />
                        <br />
                        <br />
                        <p className="uk-text-center"><Link to="/jslist"><img src={jsLogo} /></Link></p>
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
                        <p className="uk-text-center"><Link to="/reactlist"><img src={reactLogo} height="225" width="225" /></Link></p>
                        <br />
                        <br />
                        < br />
                    </div>
                </div>
            </div>
            <br />
            <div className="uk-child-width-1-2@s uk-grid uk-card ">
                <div className="uk-animation-toggle tabindex">
                    <div className="uk-card uk-card-default uk-card-body uk-animation-slide-left">
                        <br />
                        <br />
                        <br />
                        <p className="uk-text-center"><Link to="/csharplist"><img src={csharp} height="225" width="225" /></Link></p>
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
                        <p className="uk-text-center"><Link to="/angularlist"><img src={angular} height="225" width="225" /></Link></p>
                        <br />
                        <br />
                        < br />
                    </div>
                </div>
            </div>
            <br />
            <div className="uk-child-width-1-2@s uk-grid uk-card ">
                <div className="uk-animation-toggle tabindex">
                    <div className="uk-card uk-card-default uk-card-body uk-animation-slide-left">
                        <br />
                        <br />
                        <br />
                        <p className="uk-text-center"><img src={html} height="225" width="225" /></p>
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
                        <p className="uk-text-center"><img src={css} height="325" width="325" /></p>
                        <br />
                        <br />
                        < br />
                    </div>
                </div>
            </div>
            {/* <div className="uk-child-width-1-2@s uk-grid uk-card " uk-scrollspy="cls: uk-animation-fade; target: > div > .uk-card; delay: 500; repeat: true">
                <div>
                    <div class="uk-card uk-card-default uk-card-body">
                        <p className="uk-text-center"><Link to="/jslist"><img src={jsLogo} /></Link></p>
                    </div>
                </div>
                <div>
                    <div class="uk-card uk-card-default uk-card-body">
                        <p className="uk-text-center"><Link to="/reactlist"><img src={reactLogo} height="225" width="225" /></Link></p>
                    </div>
                </div>
                <div>
                    <div class="uk-card uk-card-default uk-card-body">
                        <p className="uk-text-center"><Link to="/csharplist"><img src={csharp} height="225" width="225" /></Link></p>
                    </div>
                </div>
                <br />
                <div>
                    <div class="uk-card uk-card-default uk-card-body">
                        <p className="uk-text-center"><Link to="/angularlist"><img src={angular} height="225" width="225" /></Link></p>
                    </div>
                </div>
                <div>
                    <div class="uk-card uk-card-default uk-card-body">
                        <p className="uk-text-center"><img src={css} height="325" width="325" /></p>
                    </div>
                </div>
                <br />
                <div>
                    <div class="uk-card uk-card-default uk-card-body">
                        <p className="uk-text-center"><img src={html} height="325" width="325" /></p>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default Topics;