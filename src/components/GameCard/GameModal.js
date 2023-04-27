import React from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./GameModal.css";

const GameModal = ({ show, close, title, category, description, price }) => {
  return (
    <Modal
      show={show}
      cancel={close}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton onHide={close}>
        <Modal.Title id="contained-modal-title-vcenter">
          Shop Store!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2>{title}</h2>
        <h3>{category}</h3>
        <p>{description}</p>
        <p>US$ {price}</p>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={close}>Cancel</button>
      </Modal.Footer>
    </Modal>
  );
};

export default GameModal;
