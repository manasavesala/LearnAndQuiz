import React from "react";
import UIkit from "uikit";
import { Link } from 'react-router-dom';
import './Header.css';

UIkit.navbar();

function Header() {

  return (
    <div >
      <article class="uk-article">
        <nav className="uk-navbar-container uk-navbar">
          <div className="uk-navbar-center">

            <ul className="uk-navbar-nav">

              <li className="uk-active"><Link style={{ textDecoration: 'none', color: 'black' }} to="/"><h2 id='header1'>Home</h2></Link></li>
              <li><Link style={{ textDecoration: 'none', color: 'black' }} to="/topics"><h2 id='header2'>Topics</h2></Link></li>
              <li><Link style={{ textDecoration: 'none', color: 'black' }} to="/quiz"><h2 id='header3'>Quiz</h2></Link></li>
              <li><Link style={{ textDecoration: 'none', color: 'black' }} to="/videos"><h2 id='header4'>videos</h2></Link></li>
              <li><Link style={{ textDecoration: 'none', color: 'black' }} to="/add"><h2 id='header5'>Add Questions</h2></Link></li>
              <li><Link style={{ textDecoration: 'none', color: 'black' }} to="/contact"><h2 id='header6'>Contact</h2></Link></li>
              {/* <li><Link style={{ textDecoration: 'none', color: 'black' }} to="/about">About</Link></li> */}

            </ul>
          </div>
        </nav>
      </article>

    </div>
  );
}
export default Header;