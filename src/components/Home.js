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

        </div>
    );
}

export default Home;