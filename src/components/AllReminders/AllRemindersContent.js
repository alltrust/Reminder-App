import React from "react";
import ReminderList from "../RemindersList/RemindersList";
import LegendReminders from "../LegendForReminders/LegendReminders";
import CreateReminders from "../CreateReminders/CreateReminder";

import style from "./AllRemindersContent.module.css";
import { useSelector } from "react-redux";
import CompletedReminders from "../LegendForReminders/CompletedReminder";

const AllReminderContent = () => {
  const reminderListToggle = useSelector(
    (state) => state.uiActions.displayListType
  );
  console.log(reminderListToggle);

  return (
    <div className={style.remindersContentContainer}>
      <CreateReminders />
      {reminderListToggle ? <ReminderList /> : <CompletedReminders />}
      <LegendReminders />
    </div>
  );
};

export default AllReminderContent;
