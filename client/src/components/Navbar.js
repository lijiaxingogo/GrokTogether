import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-success navbar-expand-lg justify-content-between">
        <Link to="/" className="navbar-brand">
          GrokTogether
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Cards
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                Create Card
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/questions" className="nav-link">
                Questions
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
