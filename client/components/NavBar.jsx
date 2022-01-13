import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <div id="navStyles">
      <nav >
        <Link to='/companies'><button id="navBtn">Companies</button></Link>
        <Link to='/post'><button id="navBtn">Post</button></Link>      
        <a href='/logout'><button id="navBtn">Logout</button></a>
      </nav>
      </div>
    </div>
  );
}

export default NavBar;
