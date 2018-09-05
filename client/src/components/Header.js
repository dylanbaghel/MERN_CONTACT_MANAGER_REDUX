import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <nav className="navbar navbar-dark bg-success mb-5">
        <div className="container">
            <NavLink 
                to="/"
                className="navbar-brand"
                exact={true}
            >
            Contact Manager
            </NavLink>

            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <NavLink
                        to="/add"
                        className="nav-link"
                    >
                        Add Contact
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
);

export default Header;