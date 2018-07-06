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

    handleClickEditPassage() {
        let { editAuthor, editBook, editContent } = this.state;
        this.props.editPassage(editAuthor, editBook, editContent, this.props.passage.id);
    }

    handleClickDeletePassage() {
        this.props.deletePassage(this.props.passage.id);
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
                                            onChange={(value)=>{this.setState({ editAuthor: value.target.value })}}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="bookInput">Book</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="bookInput"
                                            placeholder="Enter book name"
                                            onChange={(value)=>{this.setState({ editBook: value.target.value })}}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contentInput">Content</label>
                                        <textarea
                                            type="text"
                                            className="form-control"
                                            id="contentInput"
                                            placeholder="Enter content"
                                            onChange={(value)=>{this.setState({ editContent: value.target.value })}}/>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={()=>{this.setState({ editMode: false })}}>Cancel</button>
                                    <button type="submit" className="btn btn-primary" onClick={()=>{this.handleClickEditPassage()}}>Save</button>
                                </div>
                            </div> :
                            <div>
                                <div className="modal-body">
                                    {this.props.passage.content}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" onClick={()=>{this.setState({ editMode: true })}}>Edit</button>
                                    <button type="button" className="btn btn-primary" onClick={()=>{this.handleClickDeletePassage()}}>Delete</button>
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
                        <button type="button" className="btn btn-primary" onClick={()=>{this.handleClickDeletePassage()}}>Delete</button>
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
