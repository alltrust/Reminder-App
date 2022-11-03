import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleEditMode } from "../../store/ui-actions";
import { addReminder } from "../../store/reminders";
import { toggleShowModalOff } from "../../store/ui-actions";
import Priority from "../../store/priorityStatus";
import moment from "moment";

const ReminderItemEdit = () => {
  const [reminderPriority, setReminderPriority] = useState("");
  const showModalReminderData = useSelector(
    (state) => state.uiActions.showModal
  );

  const priorityMeterHandlerHigh = () => {
    setReminderPriority(Priority.HIGH);
  };
  const priorityMeterHandlerMedium = () => {
    setReminderPriority(Priority.MEDIUM);
  };
  const priorityMeterHandlerLow = () => {
    setReminderPriority(Priority.LOW);
  };

  const closeModalHandler = () => {
    dispatch(toggleShowModalOff());
  };

  const dispatch = useDispatch();

  const nameRef = useRef();
  const notesRef = useRef();
  const dateRef = useRef();

  const UpdateDatahandler = (updatedData) => {
    dispatch(addReminder(updatedData));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const notes = notesRef.current.value;
    const date = dateRef.current.value;

    const dueDate = moment(date).format("MMM Do YY");
    const dateCheck = dueDate === "Invalid date" ? showModalReminderData.dueDate : dueDate

    const updatedData = {
      id: showModalReminderData.id,
      name: name,
      notes: notes,
      priority: reminderPriority,
      dueDate: dateCheck,
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
        <label htmlFor="reminder-note">Notes</label>
        <textarea
          name="notes"
          defaultValue={showModalReminderData.notes}
          ref={notesRef}
        />
        <div>
          <label htmlFor="radio-high">
            High Priority
            <input
              type="radio"
              id="radio-high"
              name="priority-meter"
              defaultValue={reminderPriority === "high"}
              onChange={priorityMeterHandlerHigh}
            />
          </label>
        </div>
        <div>
          <label htmlFor="radio-medium">
            Medium Priority
            <input
              type="radio"
              id="radio-medium"
              name="priority-meter"
              defaultValue={reminderPriority === "medium"}
              onChange={priorityMeterHandlerMedium}
            />
          </label>
        </div>
        <div>
          <label htmlFor="radio-low">
            Low Priority
            <input
              type="radio"
              id="radio-low"
              name="priority-meter"
              defaultValue={reminderPriority === "low"}
              onChange={priorityMeterHandlerLow}
            />
          </label>
        </div>
        <input
          type="date"
          id="date"
          ref={dateRef}
          defaultValue={showModalReminderData.dueDate}
        />
        <button type="submit">Update Reminder</button>
        <button onClick={closeModalHandler}>Back</button>
      </form>
    </div>
  );
};

export default ReminderItemEdit;
