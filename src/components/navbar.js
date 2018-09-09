import React, { Component } from 'react';
var NavLink = require('react-router-dom').NavLink;


class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
      <div className="container">
        <NavLink className="navbar-brand" to='/'>Racks</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="oi oi-menu"></span> Menu
        </button>

        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active"><NavLink className="nav-link" to='/'>Home</NavLink></li>
            <li className="nav-item"><NavLink href="about.html" className="nav-link" to='/About'>About</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to='/Solution'>Solution</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to='/portfolio'>Portfolio</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to='/Blog'>Blog</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to='/Contact'>Contact</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
      </div>
    );
  }
}

export default Navbar;