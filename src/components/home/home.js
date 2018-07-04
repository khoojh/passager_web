import React, { Component } from 'react';
import Header from "../header.js";
import Card from "../card.js";
import Footer from "../footer.js";
import { connect } from 'react-redux';
import { fetchPassages } from "../../redux/passages/action.js";

class Home extends Component {

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

export default connect(mapStateToProps, { fetchPassages })(Home);
