import React, {useEffect} from "react";
import clsx from "clsx";
import {CSSTransition} from "react-transition-group";
import ModalStyle from "../styled-components/Modal";
import "./Modal.css";
import Button from "../styled-components/Button";

const Modal = (props) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };
  
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);
  
  return (
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{enter: 0, exit: 300}}
    >
      <ModalStyle onClick={props.onClose} className={clsx({
        "enter-done": props.show
      })}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h4>{props.title}</h4>
          </div>
          <div className="modal-body">{props.children}</div>
          <div className="modal-footer">
            <Button onClick={props.onClose}>
              Cancel
            </Button>
            <Button onClick={props.onClose}>
              Create
            </Button>
          </div>
        </div>
      </ModalStyle>
    </CSSTransition>
  );
};

export default Modal;
