import React from "react";
import ReactDOM from "react-dom";
import ContentWrapper from "./ContentWrapper";

import styles from "./ModalWithOverlay.module.css";

//include Onclick to open and close modal
const ModalWithOverlay = ({ children, closeModal }) => {

  const Overlay = () => {
    return <div className={styles.overlay} onClick={closeModal}></div>;
  };

  const Modal = ({ children, className }) => {
    return (
      <ContentWrapper className={`${styles.modal} ${className}`}>
        <div>{children}</div>
      </ContentWrapper>
    );
  };
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Overlay onClick={closeModal} />,
        document.getElementById("overlay")
      )}
      {ReactDOM.createPortal(
        <Modal onClick={closeModal}>{children}</Modal>,
        document.getElementById("modal")
      )}
    </React.Fragment>
  );
};

export default ModalWithOverlay;
