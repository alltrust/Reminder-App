import React,{ useState } from "react";
import ContentWrapper from "../../UI/ContentWrapper";
import style from "./ReminderItem.module.css";
import ReminderItemDetails from "./ReminderItemDetails";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowModalOn, toggleShowModalOff } from "../../store/ui-actions";

const ReminderItem = ({ name, notes, priority, dueDate, hideModalHandler }) => {
  //onshowmodal open the notes that show the main notes as children and a breakdown of the overall details of the reminder.
  // const [showModal, setShowModal] = useState(false);
  const showemModal = useSelector(state=> state.uiActions.showModal)
  // const dispatch = useDispatch();
  



  // const showModalHandler = (event) => {
  //   // setShowModal(true);
  //   const eventIdentifier = event.target.value;
  //   console.log(eventIdentifier)
  //   // dispatch(toggleShowModalOn())
  // };

  //   console.log(showemModal)

  // const hideModalHandler = () => {
  //   dispatch(toggleShowModalOff())
  // };

  return (
    <>
      {showemModal && (
        <ReminderItemDetails
          closeModal={hideModalHandler}
        />
      )}
      <ContentWrapper >
        <div className={style.reminderDetailsContainer}>
          <h3 className={style.reminderDetails}>{name}</h3>
          <h4 className={style.reminderDetails}>{dueDate}</h4>
          <p className={style.reminderDetails}>{priority}</p>
        </div>
        <div>
          {/* <button id={`button-${name}`} onClick={showModalHandler}>Show Details</button> */}
        </div>
      </ContentWrapper>
    </>
  );
};

export default ReminderItem;
