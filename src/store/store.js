import { configureStore } from "@reduxjs/toolkit";

import UiReducer from './ui-actions'
import ReminderReducer from './reminders'
import FormReducer from './formControl'

const store = configureStore({
    reducer:{
        uiActions: UiReducer,
        configureReminder: ReminderReducer,
        formValidation: FormReducer,
    }
});

export default store

