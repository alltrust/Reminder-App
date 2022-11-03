import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Search from "./components/SearchReminders/Search";
import AllReminderContent from "./components/AllReminders/AllRemindersContent";
import {
  getReminderData,
  sendReminderData,
} from "./store/reminderList-actions";

let isInitialLoad = true;

function App() {
  const dispatch = useDispatch();
  const reminders = useSelector((state) => state.configureReminder.reminders);

  useEffect(() => {
    dispatch(getReminderData());
  }, [dispatch]);


  useEffect(() => {
    if (isInitialLoad) {
      isInitialLoad = false;
      return;
    }
    dispatch(sendReminderData(reminders))
  }, [ dispatch,reminders]);

  return (
    <div className="App">
      <Search />
      <AllReminderContent />
    </div>
  );
}

export default App;
