import React from "react";
import "./Modal.css";
import { ImCancelCircle } from "react-icons/im";

function Modal({ children, isOpen, onClose }) {
  return isOpen ? (
    <div className="modal-layout">
        <div style={{textAlign:"center"}} className="close" onClick={onClose}>
          <ImCancelCircle size={30} onClose={onClose} style={{cursor: "pointer"}}/>
        </div>
      {children}
    </div>
  ) : null;
}

export default Modal;
