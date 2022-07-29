import React from "react";
import { useSelector } from "react-redux";

import style from "./CompletedReminders.module.css";
import ContentWrapper from "../../UI/ContentWrapper";
import Statuses from "../../store/completionStatus";

const CompletedReminders = () => {
  const reminderListType = useSelector(
    (state) => state.uiActions.displayListType
  );
  console.log(reminderListType);

  const completedReminders = useSelector((state) => {
    const filter = state.configureReminder.filterInput;
    const completedReminder = state.configureReminder.reminders.filter(
      (item) => item.isCompleted === Statuses.COMPLETE
    );
    if (reminderListType === false) {
      if (filter === null || filter === "") {
        return completedReminder;
      } else {
        return completedReminder.filter((item) =>
          item.name.toLowerCase().includes(filter)
        );
      }
    }
  });

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
