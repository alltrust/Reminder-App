import React from 'react';
import ReminderList from "../RemindersList/RemindersList";
import LegendReminders from "../LegendForReminders/LegendReminders";
import CreateReminders from "../CreateReminders/CreateReminder";

import style from "./AllRemindersContent.module.css";



const AllReminderContent = ({reminderData, onCreateReminderHandler, filteredReminderData, onRemoveReminderHandler, completedReminders}) => {
    

  return (
    <div className={style.remindersContentContainer}>
      <CreateReminders onCreateReminderHandler={onCreateReminderHandler} />
      <ReminderList reminderData={filteredReminderData} onRemoveReminderHandler={onRemoveReminderHandler}/>
      <LegendReminders reminderData={reminderData} completedReminders={completedReminders}/>
    </div>
  );
};

export default AllReminderContent;
