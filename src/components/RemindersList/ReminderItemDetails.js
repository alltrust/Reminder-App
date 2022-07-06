import React from 'react';
import ModalWithOverlay from "../../UI/ModalWithOverlay";

import styles from "./ReminderItemDetails.module.css";

const ReminderItemDetails = ({
  notes,
  dueDate,
  closeModal,
  name,
  priority,
}) => {
  return (
    <ModalWithOverlay
      className={styles.detailsContentContainer}
      closeModal={closeModal}
    >
      <div className={styles.headerContainer}>
        <h3>{name}</h3>
        <div>{priority}</div>
        <h3>{dueDate}</h3>
      </div>
      <div>{notes}</div>
      <button onClick={closeModal}>Back</button>
    </ModalWithOverlay>
  );
};

export default ReminderItemDetails;
