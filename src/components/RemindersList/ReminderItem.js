import React from "react";
import ContentWrapper from "../../UI/ContentWrapper";
import style from "./ReminderItem.module.css";
import ReminderItemDetails from "./ReminderItemDetails";
import { useSelector } from "react-redux";

const ReminderItem = ({ name, priority,createdAt, dueDate, hideModalHandler }) => {
  const showModal = useSelector((state) => state.uiActions.showModal);

  return (
    <>
      {showModal && <ReminderItemDetails closeModal={hideModalHandler} />}
      <ContentWrapper>
        <div className={style.reminderDetailsContainer}>
          <p>{createdAt}</p>
          <h3 className={style.reminderDetails}>{name}</h3>
          <h4 className={style.reminderDetails}>{dueDate}</h4>
          <p className={style.reminderDetails}>{priority}</p>
        </div>
      </ContentWrapper>
    </>
  );
};

export default ReminderItem;
