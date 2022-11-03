import React from "react";
import ModalWithOverlay from "../../UI/ModalWithOverlay";
import ReminderItemEdit from "./ReminderItemEdit";
import { useSelector, useDispatch } from "react-redux";
import { toggleEditMode } from "../../store/ui-actions";

import styles from "./ReminderItemDetails.module.css";

const ReminderItemDetails = ({ closeModal }) => {
  const dispatch = useDispatch();
  const showModalReminderData = useSelector(
    (state) => state.uiActions.showModal
  );
  const editMode = useSelector((state) => state.uiActions.isEditMode);

  const editModeHandler = () => {
    dispatch(toggleEditMode(showModalReminderData));
  };

  return (
    <ModalWithOverlay
      id={`modal-${showModalReminderData.name}`}
      className={styles.detailsContentContainer}
      closeModal={closeModal}
    >
      {editMode ? (
        <ReminderItemEdit />
      ) : (
        <>
          <div className={styles.headerContainer}>
            <h3>{showModalReminderData.name}</h3>
            <div>{showModalReminderData.priority}</div>
            <h3>{showModalReminderData.dueDate}</h3>
          </div>
          <div>{showModalReminderData.notes}</div>
          <button onClick={closeModal}>Back</button>
          <button onClick={editModeHandler}>Edit</button>
        </>
      )}
    </ModalWithOverlay>
  );
};

export default ReminderItemDetails;
