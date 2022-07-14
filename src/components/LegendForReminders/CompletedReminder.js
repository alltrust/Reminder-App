import React from "react";
import { useSelector } from "react-redux";

import style from './CompletedReminders.module.css'
import ContentWrapper from "../../UI/ContentWrapper";

const CompletedReminders = () => {
  const reminders = useSelector((state) => state.configureReminder.reminders);
  let completedReminders = [];

  for (let reminder in reminders) {
    if (reminders[reminder].completionStatus === true) {
      completedReminders.push(reminders[reminder]);
    }
  }
  console.log(completedReminders);
  return (
    <ContentWrapper className={style.reminderItemsWrapper}>
      {completedReminders.length !== 0 || completedReminders !== null
        ? completedReminders.map((item) => {
            return (
              <ContentWrapper key={item.id}>
                <div>
                  <h2>{item.name}</h2>
                  <p>{item.dueDate}</p>
                  <p>dateOfCompletion</p>
                </div>
              </ContentWrapper>
            );
          })
        : ""}
    </ContentWrapper>
  );
};

export default CompletedReminders;
