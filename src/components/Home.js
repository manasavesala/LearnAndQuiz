import React from "react";
import UIkit from "uikit";
import bg from '../images/home5.jpg';
import Topics from "./Topics";

UIkit.parallax();

function Home() {
    const style = {
        backgroundImage: 'url(' + bg + ')',
        height: '600px'
    };
    return (
        <div className="uk-container">
            <br />
            <br />
            <br />

            <div className="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top"
                style={style}>
                <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
                    <h1 uk-parallax="opacity: 0,1,1; y: -100,0,0; x: 100,100,0; scale: 2,1,1; viewport: 0.5;">Welcome to my page</h1>
                    <p uk-parallax="opacity: 0,1,1; y: 100,0,0; x: -100,-100,0; scale: 0.5,1,1; viewport: 0.5;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br />
            <h2>Topics to Learn:</h2>
            <Topics />
        </div>

    );
}

export default Home;