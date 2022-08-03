import React from "react";
import ContentWrapper from "../../UI/ContentWrapper";
import ReminderItem from "./ReminderItem";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowModalOn, toggleShowModalOff } from "../../store/ui-actions";
import { completeReminder } from "../../store/reminders";
import LoadingSpinner from "../../UI/LoadingSpinner";
import Statuses from "../../store/completionStatus";

import style from "./ReminderList.module.css";

const ReminderList = () => {
  const isLoading = useSelector((state) => state.uiActions.setIsLoading);
  const reminderListType = useSelector(
    (state) => state.uiActions.displayListType
  );

  const dispatch = useDispatch();

  const showModalHandler = (item) => {
    dispatch(toggleShowModalOn(item));
  };

  const hideModalHandler = () => {
    dispatch(toggleShowModalOff());
  };

  const completeReminderHandler = (item) => {
    dispatch(completeReminder(item));
    console.log(item.id);
  };
  const remindersArray = useSelector((state) => {
    const filter = state.configureReminder.filterInput;
    const allReminders = state.configureReminder.reminders.filter(
      (item) => item.isCompleted !== Statuses.COMPLETE
    );
    if (reminderListType === true) {
      if (filter === null || filter === "") {
        return allReminders;
      } else {
        return allReminders.filter((reminder) =>
          reminder.name.toLowerCase().includes(filter)
        );
      }
    }
  });

  const filter = useSelector((state) => state.configureReminder.filterInput);

  console.log(filter);

  return (
    <ContentWrapper className={style.reminderItemsWrapper}>
      {isLoading && <LoadingSpinner />}
      {remindersArray.map((item) => {
        return (
          <div key={item.id}>
            <ReminderItem
              name={item.name}
              id={item.id}
              priority={item.priority}
              notes={item.notes}
              dueDate={item.dueDate}
              isCompleted={item.isCompleted}
              hideModalHandler={hideModalHandler}
            />
            <button onClick={completeReminderHandler.bind(null, item)}>
               REMINDER Completed
            </button>
            <button onClick={showModalHandler.bind(null, item)}>
              Show Modal
            </button>
          </div>
        );
      })}
    </ContentWrapper>
  );
};

export default ReminderList;