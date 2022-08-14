import React from "react";

const Alert = ({ cambiarModo, texto }) => {
  return (
    <div>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{texto}</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => {
                cambiarModo(false);
              }}
            ></button>
          </div>
          <div className="modal-body">
            <p>Su cuenta regresiva ha llegado a su fin!</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                cambiarModo(false);
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
