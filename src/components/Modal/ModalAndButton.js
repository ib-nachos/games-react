import React, { useState } from "react";
import Modal from "./Modal";

const ModalAndButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };
  return (
    <>
      <button onClick={openModal}>Buy</button>
      <Modal
        isOpen={isModalOpen}
        close={closeModal}
      />
    </>
  );
};

export default ModalAndButton;
