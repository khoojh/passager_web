import React, { Component } from 'react';
import Header from "../header/header.js";
import Card from "../card/card.js";
import Footer from "../footer/footer.js";
import { connect } from 'react-redux';
import * as actions from "../../redux/passages/action.js";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addAuthor: "",
            addBook: "",
            addContent: ""
        };
    }

    componentWillMount() {
        this.props.fetchPassages();
    }

    handleClickAddPassage() {
        let { addAuthor, addBook, addContent } = this.state;
        // e.preventDefault();
        this.props.addPassage(addAuthor, addBook, addContent);
    }

    renderAddButton() {
        return(
            <div>
                <div className="modal fade" id="addModal" tabIndex="-1" role="dialog" aria-labelledby="addModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="addModalLabel">Add a passage</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="authorInput">Author</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="authorInput"
                                            aria-describedby="authorInput"
                                            placeholder="Enter author name"
                                            onChange={(e)=>{this.setState({ addAuthor: e.target.value })}}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="bookInput">Book</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="bookInput"
                                            placeholder="Enter book name"
                                            onChange={(e)=>{this.setState({ addBook: e.target.value })}}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contentInput">Book</label>
                                        <textarea
                                            type="text"
                                            className="form-control"
                                            id="contentInput"
                                            placeholder="Enter content"
                                            onChange={(e)=>{this.setState({ addContent: e.target.value })}}/>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary" onClick={()=>{this.handleClickAddPassage()}}>Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addModal">
                  Add
                </button>
            </div>
        );
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    {this.renderAddButton()}
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

export default connect(mapStateToProps, actions)(Home);
