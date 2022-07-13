import React from "react";
import ContentWrapper from "../../UI/ContentWrapper";
import ReminderItem from "./ReminderItem";
import { useDispatch, useSelector } from "react-redux";
import { removeReminder } from "../../store/reminders";

import style from "./ReminderList.module.css";

const ReminderList = () => {
  const dispatch = useDispatch();

  const removeReminderHandler = (item) => {
    dispatch(removeReminder(item));
  };

  const remindersArray = useSelector((state) => {
    const filter = state.configureReminder.filterInput;
    const allReminders = state.configureReminder.reminders;
    if (filter === null|| filter=== '') {
      return allReminders;
    } else {
      return allReminders.filter((reminder) => reminder.name === filter);
    }
  });

  const filter = useSelector((state) => state.configureReminder.filterInput);

  console.log(filter);

  return (
    <ContentWrapper className={style.reminderItemsWrapper}>
        {remindersArray.map((item) => {
          return (
            <div key={item.id}>
              <ReminderItem
                name={item.name}
                id={item.id}
                priority={item.priority}
                notes={item.notes}
                dueDate={item.dueDate}
              />
              <button onClick={removeReminderHandler.bind(null, item)}>
                REMOVE REMINDER
              </button>
            </div>
          );
        })
      }
    </ContentWrapper>
  );
};

export default ReminderList;
