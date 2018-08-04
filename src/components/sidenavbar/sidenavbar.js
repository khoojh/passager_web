import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideNavbar extends Component {

    render() {
        return (
            <div>
                <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick="closeNav()">&times;</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                </div>

                <h2>Animated Sidenav Example</h2>
                <p>Click on the element below to open the side navigation menu.</p>
                <span onClick="openNav()">&#9776</span>
            </div>
        );
    }



    // render() {
    //     return (
    //         <nav className="navbar navbar-expand-lg navbar-dark bg-info">
    //             <a className="navbar-brand" href="/">Passager</a>
    //             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //                 <span className="navbar-toggler-icon"></span>
    //             </button>
    //
    //             <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //                 <ul className="navbar-nav mr-auto">
    //                     <li className="nav-item active">
    //                         <Link to="/" className="nav-link">Home</Link>
    //                     </li>
    //                     <li className="nav-item">
    //                         <Link to="/about" className="nav-link">About</Link>
    //                     </li>
    //                     <li className="nav-item">
    //                         <Link to="/signin" className="nav-link">Sign In</Link>
    //                     </li>
    //                     <li className="nav-item">
    //                         <Link to="/signup" className="nav-link">Sign Up</Link>
    //                     </li>
    //                 </ul>
    //             </div>
    //         </nav>
    //     );
    // }
}

export default SideNavbar;
