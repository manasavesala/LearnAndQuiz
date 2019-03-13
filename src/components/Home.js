import React from "react";
import UIkit from "uikit";
import bg from '../images/home5.jpg';
import bg1 from '../images/bgp.png';
import bg2 from '../images/bgp1.png';
import bg3 from '../images/bg1.jpg';
import Topics from "./Topics";

UIkit.parallax();
UIkit.slideshow();

function Home() {
    const style = {
        backgroundImage: 'url(' + bg + ')',
        height: '600px'
    };
    var color = {
        backgroundColor: '#e8ccda',
        textAlign: 'center'
    }

    return (
        <div className="uk-container">

            <br />
            <br />
            <br />
            <div className="uk-text-center">
                <div className="uk-inline-clip uk-transition-toggle" tabindex="0">
                    <img src={bg2} alt="" />
                    <img className="uk-transition-scale-up uk-position-cover" src={bg1} alt="" />
                </div>
            </div>
            <br />
            <br />

            <div className="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top"
                style={style}>
                <div className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
                    <h1 uk-parallax="opacity: 0,1,1; y: -100,0,0; x: 100,100,0; scale: 2,1,1; viewport: 0.5;">Welcome to my page</h1>
                    <p uk-parallax="opacity: 0,1,1; y: 100,0,0; x: -100,-100,0; scale: 0.5,1,1; viewport: 0.5;">Learn new programming languages amd practice for interviews by taking quiz</p>
                </div>
            </div>

            <br />
            <br />
            {/* <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" data-uk-slideshow>

                <ul className="uk-slideshow-items">
                    <li>
                        <img src={bg2} alt="" data-uk-cover />
                    </li>
                    <li>
                        <img src={bg1} alt="" data-uk-cover />
                    </li>
                </ul>
                <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous data-uk-slideshow-item="previous"></a>
                <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next data-uk-slideshow-item="next">⏭️</a>

            </div> */}

            <br /><br /><br />
            <h2>Topics to Learn:</h2>
            <Topics />
        </div>

    );
}

export default Home;