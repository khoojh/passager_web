import React, { Component } from 'react';
import Header from "./components/header.js";
import Card from "./components/card.js";
import Footer from "./components/footer.js";

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <Card />
                    <Card />
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
