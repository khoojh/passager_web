import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../redux/passages/action.js";
import style from "./myprofile.css";

class AddButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addAuthor: "",
            addBook: "",
            addContent: ""
        };
    }

    handleClickAddPassage() {
        let { addAuthor, addBook, addContent } = this.state;
        // e.preventDefault();
        this.props.addPassage(addAuthor, addBook, addContent);
    }

    render() {
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
                                    <button type="submit" className="btn btn-info" onClick={()=>{this.handleClickAddPassage()}}>Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" className={"btn btn-info " + style.addPassageBtn} data-toggle="modal" data-target="#addModal">
                    Add a passage
                </button>
            </div>
        );
    }
}
export default connect(null, actions)(AddButton);
