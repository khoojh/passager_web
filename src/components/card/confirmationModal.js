import React, { Component } from 'react';
// import style from "./card.css";
// import { connect } from 'react-redux';
// import * as actions from "../../redux/passages/action.js";

class ConfirmationModal extends Component {

    // handleClickDeletePassage() {
    //     this.props.deletePassage(this.props.passage.id);
    // }

    render() {
        return (
            <div className="modal fade" id={"confirmationModal" + this.props.modalID} tabIndex="-1" role="dialog" aria-labelledby="confirmationModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="confirmationModalLabel">{this.props.title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div>
                            <div className="modal-body">
                                {this.props.message}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
                                <button type="button" className="btn btn-primary" onClick={()=>{this.handleClickDeletePassage()}}>Yes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

//PROPTYPES

//params:
//Title
//Message
//ModalID
//Function to retreat previous modal
//Function to execute upon confirmation

export default ConfirmationModal;
