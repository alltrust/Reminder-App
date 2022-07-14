import React from "react";
import ModalWithOverlay from "../../UI/ModalWithOverlay";
import { useSelector } from "react-redux";

import styles from "./ReminderItemDetails.module.css";

const ReminderItemDetails = ({closeModal}) => {
  const showModal = useSelector((state) => state.uiActions.showModal);
  return (
    <ModalWithOverlay
      id={`modal-${showModal.name}`}
      className={styles.detailsContentContainer}
      closeModal={closeModal}
    >
      <div className={styles.headerContainer}>
        <h3>{showModal.name}</h3>
        <div>{showModal.priority}</div>
        <h3>{showModal.dueDate}</h3>
      </div>
      <div>{showModal.notes}</div>
      <button onClick={closeModal}>Back</button>
    </ModalWithOverlay>
  );
};

export default ReminderItemDetails;
