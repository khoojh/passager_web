import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-info">
                <a className="navbar-brand" href="/">Passager</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/myprofile" className="nav-link">My Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signin" className="nav-link">Sign In</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signup" className="nav-link">Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
