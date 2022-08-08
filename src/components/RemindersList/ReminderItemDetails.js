import React, { useRef} from "react";
import ModalWithOverlay from "../../UI/ModalWithOverlay";
import { useDispatch, useSelector } from "react-redux";
import { toggleEditMode } from "../../store/ui-actions";

import styles from "./ReminderItemDetails.module.css";
import { addReminder } from "../../store/reminders";

const ReminderItemDetails = ({ closeModal }) => {
  const showModal = useSelector((state) => state.uiActions.showModal);
  const editMode = useSelector((state) => state.uiActions.isEditMode);
  const dispatch = useDispatch()

  const nameRef = useRef()
  const notesRef = useRef()


  const handler = (updatedData)=>{
    dispatch(addReminder(updatedData))
  }
 

  const submitHandler = (e) => {
    e.preventDefault();

    const name = nameRef.current.value
    const notes = notesRef.current.value

    const updatedData = {
      id: showModal.id,
      name: name,
      notes: notes,
    }

    handler(updatedData)
    dispatch(toggleEditMode())


 
  };
  return (
    <ModalWithOverlay
      id={`modal-${showModal.name}`}
      className={styles.detailsContentContainer}
      closeModal={closeModal}
    >
      {editMode ? (
        <div>
          <form onSubmit={submitHandler}>
            <label htmlFor="reminder-title">Name</label>
            <input
              name="name"
              defaultValue={showModal.name}
              ref={nameRef}
            />
            <label htmlFor="radio">Priority</label>
            <input name="radio" type="radio" />
            <label htmlFor="reminder-note">Notes</label>
            <textarea
              name="notes"
              defaultValue={showModal.notes}
              ref={notesRef}
            />
            <button type="submit">Update Reminder</button>
            <button onClick={closeModal}>Back</button>
          </form>
        </div>
      ) : (
        <>
          <div className={styles.headerContainer}>
            <h3>{showModal.name}</h3>
            <div>{showModal.priority}</div>
            <h3>{showModal.dueDate}</h3>
          </div>
          <div>{showModal.notes}</div>
          <button onClick={closeModal}>Back</button>
          {/* <button onClick={editModeHandler}>Edit</button> */}
        </>
      )}
    </ModalWithOverlay>
  );
};

export default ReminderItemDetails;
