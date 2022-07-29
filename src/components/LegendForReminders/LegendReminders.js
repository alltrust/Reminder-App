import React from "react";
import ContentWrapper from "../../UI/ContentWrapper";
import { useSelector, useDispatch } from "react-redux";
import { toggleRemindersListByStatus } from "../../store/ui-actions";
import Statuses from "../../store/completionStatus";
import Priority from "../../store/priorityStatus";

import style from "./LegendReminders.module.css";

const LegendReminders = () => {
  const dispatch = useDispatch();
  const reminderData = useSelector(
    (state) => state.configureReminder.reminders
  );

  const isLowPriority = (reminder) =>
    reminder.priority === Priority.LOW || reminder.priority === Priority.NONE;

  const isMediumPriority = (reminder) =>
    reminder.priority === Priority.MEDIUM;

  const isHighPriority = (reminder) => reminder.priority === Priority.HIGH;

  const isIncompleted = (reminder) => reminder.isCompleted === Statuses.INCOMPLETE
  const isCompleted = (reminder) => reminder.isCompleted === Statuses.COMPLETE

  const lowPriorities = reminderData.filter((reminder)=> isLowPriority(reminder) && isIncompleted(reminder))
  const mediumPriorities = reminderData.filter((reminder)=> isMediumPriority(reminder) && isIncompleted(reminder))
  const highPriorities = reminderData.filter((reminder)=> isHighPriority(reminder) && isIncompleted(reminder))


  const completedReminders = reminderData.filter((reminder)=> isCompleted(reminder))

  const totalCompleted = (
    <p>Total Completed Reminders: {completedReminders.length}</p>
  );

  const toggleShowCompletedRemindersList = () => {
    dispatch(toggleRemindersListByStatus());
  };

  return (
    <ContentWrapper className={style.legendContainer}>
      <div>
        <h3>Low</h3>
        <h2>{lowPriorities.length}</h2>
      </div>
      <div>
        <h3>Moderate</h3>
        <h2>{mediumPriorities.length}</h2>
      </div>
      <div>
        <h3>High</h3>
      </div>
      <h2>{highPriorities.length}</h2>
      {totalCompleted}
      <button onClick={toggleShowCompletedRemindersList}>SHOW {}</button>
    </ContentWrapper>
  );
};

export default LegendReminders;
