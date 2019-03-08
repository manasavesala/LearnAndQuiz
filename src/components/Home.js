import React from "react";
import UIkit from "uikit";
import bg from '../images/home4.jpg';

UIkit.parallax();

function Home() {
    const style = {
        backgroundImage: 'url(' + bg + ')'
    };
    return (
        <div className="uk-container">
            <br />
            <br />
            <div className="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top"
                style={style}>
                <div className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
                    <h1 data-uk-parallax="opacity: 0,1,1; y: -100,0,0; x: 100,100,0; scale: 2,1,1; viewport: 0.5;">
                        Welcome
                </h1>
                    <p data-uk-parallax="opacity: 0,1,1; y: 100,0,0; x: -100,-100,0; scale: 0.5,1,1; viewport: 0.5;">
                        Explore Question And take Quiz.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;