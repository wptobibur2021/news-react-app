import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, NavLink
} from "react-router-dom";
import Covid from "../covid19/Covid";
import Home from "../home/Home";
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link active">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/covid19' className="nav-link active">Covid19</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">BD Hospital</a>
                            </li>
                        </ul>
                        <input className="form-control me-2 search-input" type="search" placeholder="Search a news" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;