import React from "react";

import "./Modal.css";

const modal = (props) => {
  const modalClass = props.show ? "ModalOpen" : "ModalClosed";

  return (
    <div className={`Modal ${modalClass}`}>
      <h1>A Modal</h1>
      <button className="Button" onClick={props.closed}>
        Dismiss
      </button>
    </div>
  );
};

export default modal;
