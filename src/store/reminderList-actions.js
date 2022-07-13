import { generateReminders } from "./reminders";
// import { setNotification } from "./modalAction";

// const useSemiPersisantState = (key, initValue) => {
//     const isMounted = useRef(false);
//     const [value, setValue] = useState(localStorage.getItem(key) || initValue);
//     useEffect(() => {
//       if (!isMounted.current) {
//         isMounted.current = true;
//       } else {
//         localStorage.setItem(key, value);
//       }
//     }, [value, key]);
//     return [value, setValue];
//   };

// export const fetchRemindersData = ()=>{
//     const [searchInput, setSearchInput] = useSemiPersisantState("search", "");
// c;

//   const [url, setUrl] = useState(`${API_ENDPOINT}${query}`);

//   const dispatch = useDispatch();
//     return async (dispatch) =>{
//         const fetchData = await fetch(url)
//     }
// }
const API_ENDPOINT =
  "https://reminder-data-9b1ac-default-rtdb.firebaseio.com/reminders.json";

export const getReminderData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
    //   const query =
    //     searchInput.length === 0
    //       ? ""
    //       : `?orderBy="name"&equalTo="${searchInput}"`;
      const response = await fetch(
        `https://reminder-data-9b1ac-default-rtdb.firebaseio.com/reminders.json`
      );
      if (!response.ok) {
        throw new Error("error");
      }
      const reminderData = await response.json();
      return reminderData;
    };
    try {
      const cartData = await fetchData();
      dispatch(generateReminders(cartData));
    } catch (e) {
      //dispatch errors
      console.log(e.message);
    }
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
