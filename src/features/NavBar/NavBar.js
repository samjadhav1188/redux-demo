import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
  return (
    <div>
      <h5>NAVBAR</h5>
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item"><Link to="/Home" className="nav-link">Home</Link></li>
        <li className="nav-item"><Link to="/About" className="nav-link">About</Link></li>
     	</ul>
      <hr />
    </div>
  );
};

export default NavBar;