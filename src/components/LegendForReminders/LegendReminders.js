import React from "react";
import ContentWrapper from "../../UI/ContentWrapper";
import { useSelector, useDispatch } from "react-redux";
import { toggleRemindersListByStatus } from "../../store/ui-actions";
import Statuses from "../../store/completionStatus";

import style from "./LegendReminders.module.css";



const LegendReminders = () => {
  const dispatch = useDispatch();

  const reminderData = useSelector(
    (state) => state.configureReminder.reminders
  );

  const lowPriorityArray = [];
  const moderatePriorityArray = [];
  const highPriorityArray = [];

  const remindersCompleted = [];

  for (let reminder in reminderData) {
    const rItem = reminderData[reminder];
    if (rItem.priority === "medium" && rItem.isCompleted === Statuses.INCOMPLETE) {
      moderatePriorityArray.push(rItem);
    } else if (rItem.priority === "high" && rItem.isCompleted === Statuses.INCOMPLETE) {
      highPriorityArray.push(rItem);
    } else if (
      (rItem.priority === "low" || rItem.priority==="") &&
      rItem.isCompleted === Statuses.INCOMPLETE
    ) {
      lowPriorityArray.push(rItem);
    }
  }

  for (let reminder in reminderData) {
    if (reminderData[reminder].isCompleted === Statuses.COMPLETE) {
      remindersCompleted.push(reminderData[reminder]);
    }
  }

  const totalCompleted = (
    <p>Total Completed Reminders: {remindersCompleted.length}</p>
  );

  const toggleShowCompletedRemindersList = ()=>{
    dispatch(toggleRemindersListByStatus())
  }


  return (
      <ContentWrapper className={style.legendContainer}>
        <div>
          <h3>Low</h3>
          <h2>{lowPriorityArray.length}</h2>
        </div>
        <div>
          <h3>Moderate</h3>
          <h2>{moderatePriorityArray.length}</h2>
        </div>
        <div>
          <h3>High</h3>
        </div>
        <h2>{highPriorityArray.length}</h2>
        {totalCompleted}
        <button onClick={toggleShowCompletedRemindersList}>SHOW {}</button>
      </ContentWrapper>
  );
};

export default LegendReminders;
