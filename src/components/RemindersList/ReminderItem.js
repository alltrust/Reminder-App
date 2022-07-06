import React,{ useState } from "react";
import ContentWrapper from "../../UI/ContentWrapper";
import style from "./ReminderItem.module.css";
import ReminderItemDetails from "./ReminderItemDetails";

const ReminderItem = ({ name, notes, priority, dueDate }) => {
  //onshowmodal open the notes that show the main notes as children and a breakdown of the overall details of the reminder.
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <ReminderItemDetails
          closeModal={hideModalHandler}
          notes={notes}
          name={name}
          priority={priority}
          dueDate={dueDate}
        />
      )}
      <ContentWrapper >
        <div className={style.reminderDetailsContainer}>
          <h3 className={style.reminderDetails}>{name}</h3>
          <h4 className={style.reminderDetails}>{dueDate}</h4>
          <p className={style.reminderDetails}>{priority}</p>
        </div>
        <div>
          <button onClick={showModalHandler}>Show Details</button>
        </div>
      </ContentWrapper>
    </>
  );
};

export default ReminderItem;
