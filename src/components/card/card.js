import React, { Component } from 'react';
import style from "./card.css";
import { connect } from 'react-redux';
import * as actions from "../../redux/passages/action.js";

class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            editAuthor: "",
            editBook: "",
            editContent: ""
        };
    }

    renderModal() {
        return (
            <div className="modal fade" id="cardModal" tabIndex="-1" role="dialog" aria-labelledby="cardModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="cardModalLabel">{this.props.passage.author}, {this.props.passage.book}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        {
                            this.state.editMode?
                            <form>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="authorInput">Author</label>
                                        <input type="text" className="form-control" id="authorInput" aria-describedby="authorInput" placeholder="Enter author name"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="bookInput">Book</label>
                                        <input type="text" className="form-control" id="bookInput" placeholder="Enter book name"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contentInput">Book</label>
                                        <textarea type="text" className="form-control" id="contentInput" placeholder="Enter content"/>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={()=>{this.setState({ editMode: false })}}>Cancel</button>
                                    <button type="submit" className="btn btn-primary">Save</button>
                                </div>
                            </form> :
                            <div>
                                <div className="modal-body">
                                    {this.props.passage.content}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" onClick={()=>{this.setState({ editMode: true })}}>Edit</button>
                                    <button type="button" className="btn btn-primary">Delete</button>
                                </div>
                            </div>
                        }

                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className={"card " + style.passagecard} style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.passage.author}</h5>
                    <h6 className="card-title">{this.props.passage.book}</h6>
                    <p className="card-text">{this.props.passage.content}</p>
                    {this.renderModal()}
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#cardModal">
                          View
                        </button>
                        <button type="button" className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        passages: state.passages.passages
    };
}

export default connect(mapStateToProps, actions)(Card);
