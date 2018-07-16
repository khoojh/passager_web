import React, { Component } from 'react';
import style from "./card.css";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from "../../redux/passages/action.js";
import ConfirmationModal from "./confirmationModal.js";

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

    retreatCardModal() {
        $("#cardModal" + id).modal('hide');
    }

    renderCardModal() {
        let { author, book, content, id } = this.props.passage;
        return (
            <div className="modal fade" id={"cardModal" + id} tabIndex="-1" role="dialog" aria-labelledby="cardModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="cardModalLabel">{author}, {book}</h5>
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
                                    <button type="submit" className="btn btn-info" onClick={()=>{this.handleClickEditPassage()}}>Save</button>
                                </div>
                            </div> :
                            <div>
                                <div className="modal-body">
                                    {this.props.passage.content}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-info" onClick={()=>{this.setState({ editMode: true })}}>Edit</button>
                                    <button type="button" className="btn btn-info" data-toggle="modal" data-target={`#delete${id}`} onClick={()=>{$("#cardModal" + id).modal('hide');}}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        }

                    </div>
                </div>
            </div>
        );
    }

    render() {
        let { author, book, content, id } = this.props.passage;
        return (
            <div className={"card " + style.passagecard} style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{author}</h5>
                    <h6 className="card-title">{book}</h6>
                    <p className="card-text">{content}</p>
                    {this.renderCardModal()}
                    <ConfirmationModal
                        title={`${author}, ${book}`}
                        message={"Are you sure you want to delete this passage?"}
                        modalID={`delete${id}`}
                        handleSubmit={(id)=>{this.handleClickDeletePassage(id)}}
                        />
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-info" data-toggle="modal" data-target={"#cardModal" + id}>
                            View
                        </button>
                        <button type="button" className="btn btn-info" data-toggle="modal" data-target={`#delete${id}`}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    passage: PropTypes.object.isRequired
};

export default connect(null, actions)(Card);
