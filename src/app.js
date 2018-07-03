import React, { Component } from 'react';
import Header from "./components/header.js";
import Card from "./components/card.js";
import Footer from "./components/footer.js";
import { connect } from 'react-redux';
import { fetchPassages } from "./redux/passages/action.js";

class App extends Component {

    componentWillMount() {
        this.props.fetchPassages();
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <button type="button" className="btn btn-primary">Add</button>
                    {this.props.passages.map((passage, i) => {
                        return <Card passage={passage} key={i}/>
                    })}
                </div>
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        passages: state.passages.passages
    };
}

export default connect(mapStateToProps, { fetchPassages })(App);
