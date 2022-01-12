import React from 'react';
import { Link } from 'react-dom';

function NavBar() {
  return (
    <nav>
      <Link to='/companies'>Companies</Link>
      <Link to='/post'>Post</Link>
      <a href='/logout'>Logout</a>
    </nav>
  );
}

export default Logout;
