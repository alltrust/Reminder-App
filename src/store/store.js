import { configureStore } from "@reduxjs/toolkit";

import UiReducer from "./ui-actions";
import ReminderReducer from "./reminders";

const store = configureStore({
  reducer: {
    uiActions: UiReducer,
    configureReminder: ReminderReducer,
  },
});

export default store;
