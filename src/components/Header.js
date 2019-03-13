import React from "react";
import UIkit from "uikit";
import { Link } from 'react-router-dom';

UIkit.navbar();

function Header() {

  return (
    <div >
      <article class="uk-article">
        <nav className="uk-navbar-container uk-navbar">
          <div className="uk-navbar-center">

            <ul className="uk-navbar-nav">

              <li className="uk-active"><Link style={{ textDecoration: 'none', color: 'black' }} to="/"><h2>Home</h2></Link></li>
              <li><Link style={{ textDecoration: 'none', color: 'black' }} to="/topics"><h2>Topics</h2></Link></li>
              <li><Link style={{ textDecoration: 'none', color: 'black' }} to="/quiz"><h2>Quiz</h2></Link></li>
              <li><Link style={{ textDecoration: 'none', color: 'black' }} to="/videos"><h2>videos</h2></Link></li>
              <li><Link style={{ textDecoration: 'none', color: 'black' }} to="/add"><h2>Add Questions</h2></Link></li>
              <li><Link style={{ textDecoration: 'none', color: 'black' }} to="/contact"><h2>ContactUs</h2></Link></li>
              {/* <li><Link style={{ textDecoration: 'none', color: 'black' }} to="/about">About</Link></li> */}

            </ul>
          </div>
        </nav>
      </article>

    </div>
  );
}
export default Header;