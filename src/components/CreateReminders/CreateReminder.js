import React, { useState, useRef } from "react";
import ContentWrapper from "../../UI/ContentWrapper";
import moment from 'moment'

import { addReminder } from "../../store/reminders";
import { useDispatch} from "react-redux";
import useValidateInput from "../../hooks/use-validateInput";
import Statuses from "../../store/completionStatus";
import Priority from "../../store/priorityStatus";

import style from "./CreateReminders.module.css";

const CreateReminders = () => {
  const [reminderPriority, setReminderPriority] = useState("");

  const dispatch = useDispatch();
  const nameInputRef = useRef();
  const dateInputRef = useRef();
  const notesRef = useRef();

  const reminderNameHandler = (reminderName) => reminderName.trim() !== "";
  const {
    value: reminderValue,
    input: reminderInput,
    invalidInput: invalidReminderInput,
    userInputHandler: reminderInputHandler,
    onBlurHandler: reminderBlurHandler,
    resetHandler: reminderResetHandler,
  } = useValidateInput(reminderNameHandler);

  const reminderDateHandler = (reminderDate) => reminderDate !== "";
  const {
    value: dateValue,
    input: dateInput,
    invalidInput: invalidDateInput,
    userInputHandler: dateInputHandler,
    onBlurHandler: dateBlurHandler,
    resetHandler: dateResetHandler,
  } = useValidateInput(reminderDateHandler);

  const reminderNoteHandler = (note)=> note.trim() !== "";
  const {
    value: notesValue,
    input: notesInput,
    invalidInput: invalidNotesInput,
    userInputHandler: notesInputHandler,
    onBlurHandler: notesBlurHandler,
    resetHandler: notesResetHandler,
  } = useValidateInput(reminderNoteHandler)

  let formisValid = false;
  let showFormErrorMsg = false;

  if (reminderInput && dateInput && notesInput) {
    formisValid = true;
  }

  const priorityMeterHandlerHigh = () => {
    setReminderPriority(Priority.HIGH);
  };
  const priorityMeterHandlerMedium = () => {
    setReminderPriority(Priority.MEDIUM);
  };
  const priorityMeterHandlerLow = () => {
    setReminderPriority(Priority.LOW);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!formisValid) {
      return showFormErrorMsg = true;
    }

    const reminderDueDate = dateInputRef.current.value;
    const reminderName = nameInputRef.current.value;
    const reminderNotes = notesRef.current.value;

    const dueDate = moment(reminderDueDate).format("YYYY MMMM dddd")

    let calendarNow = moment().calendar()
    console.log(calendarNow)

    const reminderData = {
      id: Math.random().toString(),
      name: reminderName,
      priority: reminderPriority,
      notes: reminderNotes,
      dueDate: dueDate,
      createdAt: calendarNow,
      isCompleted: Statuses.INCOMPLETE,
    };
    dispatch(addReminder(reminderData));

    dateResetHandler();
    reminderResetHandler();
    notesResetHandler();
  };

  const errorStyleReminder = invalidReminderInput ? style.invalid : "";
  const errorDateStyle = invalidDateInput ? style.invalid : "";

  return (
    <ContentWrapper className={style.outtermostContainer}>
      <form onSubmit={submitFormHandler}>
        <h2>Reminder Creator</h2>
        <div className={errorStyleReminder}>
          <label htmlFor="reminder-title">What is your Reminder</label>
          {invalidReminderInput && (
            <p className={style.error}>please enter valid name</p>
          )}
          <input
            value={reminderValue}
            id="reminder-title"
            type="text"
            name="reminder-title"
            ref={nameInputRef}
            onChange={reminderInputHandler}
            onBlur={reminderBlurHandler}
          />
        </div>
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
          {invalidNotesInput && (<p className={style.error}> add info please</p>)}
          <textarea
            id="additional-notes"
            className="additional-notes"
            ref={notesRef}
            value={notesValue}
            onChange={notesInputHandler}
            onBlur={notesBlurHandler}
          />
          <div className={errorDateStyle}>
            <label htmlFor="date">DUE DATE</label>
            {invalidDateInput && (
              <p className={style.error}>please enter valid Date</p>
            )}
            <input
              type="date"
              id="date"
              ref={dateInputRef}
              value={dateValue}
              onChange={dateInputHandler}
              onBlur={dateBlurHandler}
            />
          </div>
          <button disabled={!formisValid}>SET REMINDER</button>
        </div>
      </form>
    </ContentWrapper>
  );
};

export default CreateReminders;