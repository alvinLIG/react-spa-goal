import React from 'react';

const ConfirmModal = ({ handleCancelYes, handleCancelNo }) => {
  return (
    <div className="confirm-modal">
      <div className="confirm-modal-content">
        <p className="confirm-modal-heading">Are you sure?</p>
        <p className="confirm-modal-text">Your changes will be discarded.</p>

        <div className="confirm-modal-button-wrapper">
          <button className="confirm-modal-button" onClick={handleCancelYes}>Yes</button>
          <button className="confirm-modal-button" onClick={handleCancelNo}>No</button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal;
