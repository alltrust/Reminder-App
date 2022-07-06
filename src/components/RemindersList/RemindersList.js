import React  from 'react';
import ContentWrapper from "../../UI/ContentWrapper";
import ReminderItem from "./ReminderItem";

import style from "./ReminderList.module.css";

const ReminderList = ({ reminderData, onRemoveReminderHandler }) => {
  return (
    <ContentWrapper className={style.reminderItemsWrapper}>
      {reminderData.map((item) => {
        return (
          <div key={item.id}>
            <ReminderItem
              name={item.name}
              id={item.id}
              priority={item.priority}
              notes={item.notes}
              dueDate={item.dueDate}
              onClick={onRemoveReminderHandler}
            />
            <button onClick={onRemoveReminderHandler.bind(null, item)}>
              REMOVE REMINDER
            </button>
          </div>
        );
      })}
    </ContentWrapper>
  );
};

export default ReminderList;
