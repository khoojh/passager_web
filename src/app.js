import React, { Component } from 'react';
import Header from "./components/header.js";
import Card from "./components/card.js";

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <Card />
                    <Card />
                </div>
            </div>
        );
    }
}

export default App;
