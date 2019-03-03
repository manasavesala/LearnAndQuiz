import React from "react";
import UIkit from "uikit";

UIkit.grid();

function Topics(){
    return(
<div class="uk-child-width-1-2@s uk-grid-match uk-grid">
    <div>
        <div class="uk-card uk-card-primary uk-card-hover uk-card-body uk-light">
            <h3 class="uk-card-title">JavaScript</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
    <div>
        <div class="uk-card uk-card-secondary uk-card-hover uk-card-body uk-light">
            <h3 class="uk-card-title">React</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
</div>
    );
}

export default Topics;