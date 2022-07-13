import React from "react";
import ModalWithOverlay from "../../UI/ModalWithOverlay";
import { useSelector } from "react-redux";

import styles from "./ReminderItemDetails.module.css";

const ReminderItemDetails = ({closeModal}) => {
  const showemModal = useSelector((state) => state.uiActions.showModal);
  return (
    <ModalWithOverlay
      id={`modal-${showemModal.name}`}
      className={styles.detailsContentContainer}
      closeModal={closeModal}
    >
      <div className={styles.headerContainer}>
        <h3>{showemModal.name}</h3>
        <div>{showemModal.priority}</div>
        <h3>{showemModal.dueDate}</h3>
      </div>
      <div>{showemModal.notes}</div>
      <button onClick={closeModal}>Back</button>
    </ModalWithOverlay>
  );
};

export default ReminderItemDetails;
