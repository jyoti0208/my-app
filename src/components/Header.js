import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../data/images/logo.svg';

const Header = () => {
    return (
        <header>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark"> 
              <ul><img src={logo} className="Header-logo" alt="logo" /> 
                <li class="nav-item">
                  <Link to="/"> Home </Link>
                </li>
                <li class="nav-item">
                  <Link to="/about"> About </Link>
                </li>
                <li class="nav-item">
                  <Link to="/team"> Team </Link>
                </li>
              </ul>
            </nav>
        </header>
    )
}

export default Header;



