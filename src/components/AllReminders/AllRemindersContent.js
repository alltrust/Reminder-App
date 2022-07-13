import React from 'react';
import ReminderList from "../RemindersList/RemindersList";
import LegendReminders from "../LegendForReminders/LegendReminders";
import CreateReminders from "../CreateReminders/CreateReminder";

import style from "./AllRemindersContent.module.css";



const AllReminderContent = () => {
    

  return (
    <div className={style.remindersContentContainer}>
      <CreateReminders  />
      <ReminderList  />
      <LegendReminders />
    </div>
  );
};

export default AllReminderContent;
