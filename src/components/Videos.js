import React from "react";
import UIkit from "uikit";

UIkit.cover();

function Videos() {
    return (
        <div>
            <br />
            <h1>List of Javascript videos:</h1>
            <div className="uk-cover-container uk-height-medium ">
                <br />
                <iframe width="560" height="315" src="https://www.youtube.com/embed/kl2bM9e-jJc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            </div>

            <h1>List of React videos</h1>
            <div className="uk-cover-container uk-height-medium ">
                <br />
                <iframe width="560" height="315" src="https://www.youtube.com/embed/39ZiaKb1bSA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            </div>
            <h1>List of c# videos</h1>
            <div className="uk-cover-container uk-height-medium ">
                <br />
                <iframe width="560" height="315" src="https://www.youtube.com/embed/7NgqWU0fTPw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            </div>
            <h1>List of Angular videos</h1>
            <div className="uk-cover-container uk-height-medium ">
                <br />
                <iframe src="https://www.youtube-nocookie.com/embed/YE7VzlLtp-4?autoplay=1&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;loop=1&amp;modestbranding=1&amp;wmode=transparent" width="560" height="315"></iframe>
            </div>
            <br />
        </div>
    );
}

export default Videos;