import React, {useRef} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { toggleEditMode } from "../../store/ui-actions";
import { addReminder } from "../../store/reminders";
import { toggleShowModalOff } from '../../store/ui-actions';

const ReminderItemEdit = () => {
  const showModalReminderData = useSelector(
    (state) => state.uiActions.showModal
  );

  const closeModalHandler = ()=>{
    dispatch(toggleShowModalOff())
  }

  const dispatch = useDispatch();

  const nameRef = useRef();
  const notesRef = useRef();

  const UpdateDatahandler = (updatedData) => {
    dispatch(addReminder(updatedData));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const notes = notesRef.current.value;

    const updatedData = {
      id: showModalReminderData.id,
      name: name,
      notes: notes,
    };

    UpdateDatahandler(updatedData);
    dispatch(toggleEditMode());
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="reminder-title">Name</label>
        <input
          name="name"
          defaultValue={showModalReminderData.name}
          ref={nameRef}
        />
        <label htmlFor="radio">Priority</label>
        <input name="radio" type="radio" />
        <label htmlFor="reminder-note">Notes</label>
        <textarea
          name="notes"
          defaultValue={showModalReminderData.notes}
          ref={notesRef}
        />
        <button type="submit">Update Reminder</button>
        <button onClick={closeModalHandler}>Back</button>
      </form>
    </div>
  );
};

export default ReminderItemEdit;
