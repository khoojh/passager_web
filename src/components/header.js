import React, { Component } from 'react';


class Header extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-4">Welcome to Passager!</h1>
                <p className="lead">Share your favorite passages here!</p>
            </div>
        );
    }
}

export default Header;
