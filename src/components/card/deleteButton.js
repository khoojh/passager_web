import React, { Component } from 'react';
import style from "./card.css";
import { connect } from 'react-redux';
import * as actions from "../../redux/passages/action.js";

class DeleteButton extends Component {

    handleClickDeletePassage() {
        this.props.deletePassage(this.props.passage.id);
    }

    renderDeleteModal() {
        return (
            <div className="modal fade" id={"cardModal" + this.props.passage.id} tabIndex="-1" role="dialog" aria-labelledby="cardModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="cardModalLabel">{this.props.passage.author}, {this.props.passage.book}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div>
                            <div className="modal-body">
                                Are you sure you want to delete this passage?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-primary" onClick={()=>{this.handleClickDeletePassage()}}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderDeleteModal()}
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target={"#deleteModal" + this.props.passage.id}>
                    Delete
                </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        passages: state.passages.passages
    };
}

export default connect(mapStateToProps, actions)(DeleteButton);
