import React,{ useState, useRef } from "react";
import ContentWrapper from "../../UI/ContentWrapper";

import { addReminder } from "../../store/reminders";
import { useDispatch } from "react-redux";

import style from "./CreateReminders.module.css";

const CreateReminders = () => {
  const [reminderPriority, setReminderPriority] = useState("");
  const dispatch = useDispatch();
  


  const nameInputRef = useRef();
  const dateInputRef = useRef();
  const notesRef = useRef();

  const priorityMeterHandlerHigh = () => {
    setReminderPriority("high");
  };
  const priorityMeterHandlerMedium = () => {
    setReminderPriority("medium");
  };
  const priorityMeterHandlerLow = () => {
    setReminderPriority("low");
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    const reminderDueDate = dateInputRef.current.value;
    const reminderName = nameInputRef.current.value;
    const reminderNotes = notesRef.current.value;

    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); 
    const yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;

    //post data to database
    const reminderData={
        id: reminderName,
        name:reminderName,
        priority:reminderPriority,
        notes: reminderNotes,
        dueDate: reminderDueDate,
        currentDate: today,
        completionStatus: false
    }
    // onCreateReminderHandler(reminderData)
    dispatch(addReminder(reminderData));
  };

  return (
    <ContentWrapper className={style.outtermostContainer}>
      <form onSubmit={submitFormHandler}>
        <h2>Reminder Creator</h2>
        <label htmlFor="reminder-title">What is your Reminder</label>
        <input
          id="reminder-title"
          type="text"
          name="reminder-title"
          ref={nameInputRef}
        />
        <fieldset className={style.priorityField}>
          <legend htmlFor="title">What is the Priority Level</legend>
          <div>
            <label htmlFor="radio-high">
              High Priority
              <input
                type="radio"
                id="radio-high"
                name="priority-meter"
                value={reminderPriority === "high"}
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
                value={reminderPriority === "medium"}
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
                value={reminderPriority === "low"}
                onChange={priorityMeterHandlerLow}
              />
            </label>
          </div>
        </fieldset>
        <div className={style.additionalNotesAndDateContainer}>
          <label htmlFor="additional-notes">Additional Notes</label>
          <textarea id="additional-notes" className="additional-notes" ref={notesRef} />
          <label htmlFor="date">DUE DATE</label>
          <input type="date" id="date" ref={dateInputRef} />
          <button>SET REMINDER</button>
        </div>
      </form>
    </ContentWrapper>
  );
};

export default CreateReminders;
