import React from "react";
import UIkit from "uikit";

UIkit.cover();

function Videos() {
    return (
        <div>
            <br />
            <h1>List of JavaScript videos</h1>
            <h1>List of Java videos</h1>
            <h1>List of c# videos</h1>
            <h1>List of React videos</h1>
            <div class="uk-cover-container uk-height-medium ">
                <br />
                <iframe src="https://www.youtube-nocookie.com/embed/YE7VzlLtp-4?autoplay=1&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;loop=1&amp;modestbranding=1&amp;wmode=transparent" width="560" height="315" frameborder="0" allowfullscreen uk-cover></iframe>
            </div>
        </div>
    );
}

export default Videos;