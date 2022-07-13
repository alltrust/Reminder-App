import React from "react";
import ContentWrapper from "../../UI/ContentWrapper";
import CompletedReminders from "./CompletedReminder";
import { useSelector } from "react-redux";

import style from "./LegendReminders.module.css";

const LegendReminders = () => {
  // const showModal = useSelector((state)=> state.showModal.showModal)
  const reminderData = useSelector((state)=> state.configureReminder.reminders)
  const lowPriorityArray = [];
  const moderatePriorityArray = [];
  const highPriorityArray = [];

  const completedReminders = []

  for (let reminder in reminderData) {
    const rItem= reminderData[reminder]
    if (rItem.priority === "medium" && rItem.completionStatus=== false) {
      moderatePriorityArray.push(rItem);
    } else if (rItem.priority === "high" &&rItem.completionStatus=== false) {
      highPriorityArray.push(rItem);
    } else if((rItem.priority === "low" || '') && rItem.completionStatus===false) {
      lowPriorityArray.push(rItem);
    }
  };

  for(let reminder in reminderData){
    if(reminderData[reminder].completionStatus === true){
      completedReminders.push(reminderData[reminder])
    }
  }

  const totalCompleted = (
    <p>Total Completed Reminders: {completedReminders.length}</p>
  );

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
      <CompletedReminders completedReminders={completedReminders} />
    </ContentWrapper>
  );
};

export default LegendReminders;
