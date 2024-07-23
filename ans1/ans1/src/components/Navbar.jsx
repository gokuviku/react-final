import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="container navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">Blog App</Link>
      
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/new" className="nav-link">Add Post</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
