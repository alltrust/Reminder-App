import { generateReminders } from "./reminders";
import { setIsLoading } from "./ui-actions";

const API_ENDPOINT =
  "https://reminder-data-9b1ac-default-rtdb.firebaseio.com/reminders.json";

export const getReminderData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      dispatch(setIsLoading(true));
      const response = await fetch(
        `https://reminder-data-9b1ac-default-rtdb.firebaseio.com/reminders.json`
      );
      if (!response.ok) {
        throw new Error("error");
      }
      dispatch(setIsLoading(false));
      const reminderData = await response.json();
      return reminderData;
    };
    try {
      dispatch(setIsLoading(true));
      const cartData = await fetchData();
      dispatch(generateReminders(cartData));
    } catch (e) {
      //dispatch errors
      console.log(e.message);
    }
    dispatch(setIsLoading(false));
  };
};

export const sendReminderData = (reminders) => {
  //   return async (dispatch) => {
  //dispatch loading
  //   dispatch(setNotification({

  //   }))
  return async () => {
    const response = await fetch(
      "https://reminder-data-9b1ac-default-rtdb.firebaseio.com/reminders.json",
      {
        method: "PUT",
        body: JSON.stringify(reminders),
      }
    );
    if (!response.ok) {
      throw new Error("error message ");
    }
    //   try {
    //      await sendData();
    //     // dispatch(setNotification({}))
    //   } catch (e) {
    //     // dispatch(setNotification({}))
    //     console.log(e.message);
    //   }
  };
  //   };
};
