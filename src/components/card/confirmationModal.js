import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ConfirmationModal extends Component {

    render() {
        return (
            <div className="modal fade" id={this.props.modalID} tabIndex="-1" role="dialog" aria-labelledby="confirmationModalLabel" aria-hidden="true">
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
                                <button type="button" className="btn btn-info" data-dismiss="modal" onClick={()=>{this.props.handleSubmit()}}>Yes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ConfirmationModal.propTypes = {
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    modalID: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

export default ConfirmationModal;
