import React from "react";
import ContentWrapper from "../../UI/ContentWrapper";
import ReminderItem from "./ReminderItem";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowModalOn, toggleShowModalOff } from "../../store/ui-actions";
import { removeReminder } from "../../store/reminders";

import style from "./ReminderList.module.css";

const ReminderList = () => {
  const dispatch = useDispatch();
  const showemModal = useSelector(state=> state.uiActions.showModal)
  // const {name, notes, dueDate, priority} = showemModal



  const showModalHandler = (item) => {
    // setShowModal(true);
 
    dispatch(toggleShowModalOn(item))
  };

    console.log(showemModal)

  const hideModalHandler = () => {
    dispatch(toggleShowModalOff())
  };

  const removeReminderHandler = (item) => {
    dispatch(removeReminder(item));
    console.log(item.id)
  };
  const remindersArray = useSelector((state) => {
    const filter = state.configureReminder.filterInput;
    const allReminders = state.configureReminder.reminders.filter(item=> item.completionStatus!== true);
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
                completionStatus = {item.completionStatus}
                hideModalHandler={hideModalHandler}
              />
              <button onClick={removeReminderHandler.bind(null, item)}>
                REMOVE REMINDER
              </button>
              <button onClick={showModalHandler.bind(null, item)}>
                Show Modal
              </button>
            </div>
          );
        })
      }
    </ContentWrapper>
  );
};

export default ReminderList;
