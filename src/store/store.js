import { configureStore } from "@reduxjs/toolkit";

import ModalReducer from './ui-actions'
import ReminderReducer from './reminders'

const store = configureStore({
    reducer:{
        showModal: ModalReducer,
        configureReminder: ReminderReducer,
    }
});

export default store

