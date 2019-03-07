import React from "react";
import UIkit from "uikit";
import { Link } from 'react-router-dom';

UIkit.navbar();

function Header() {

  return (
    <div >
      <nav className="uk-navbar-container uk-navbar">
        <div className="uk-navbar-center">

          <ul className="uk-navbar-nav">
            <li className="uk-active"><Link style={{ textDecoration: 'none', color: 'black' }} to="/">Home</Link></li>
            <li><Link style={{ textDecoration: 'none', color: 'black' }} to="/topics">Topics</Link></li>
            <li><Link style={{ textDecoration: 'none', color: 'black' }} to="/quiz">Quiz</Link></li>
            <li><Link style={{ textDecoration: 'none', color: 'black' }} to="/videos">videos</Link></li>
          </ul>

        </div>
      </nav>
    </div>
  );
}
export default Header;