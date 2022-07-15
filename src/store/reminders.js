import { createSlice } from "@reduxjs/toolkit";

const DUMMY_DATA = [
  {
    id: "r1",
    name: "reminder 1",
    priority: "high",
    notes: "this is the first reminder in the dummy data",
    dueDate: "2022-10-03",
    completionStatus: false,
  },
  {
    id: "r2",
    name: "reminder 2",
    priority: "medium",
    notes: "this is the second reminder in the dummy data",
    dueDate: "2022-08-03",
    completionStatus: false,
  },
  {
    id: "r3",
    name: "reminder 3",
    priority: "medium",
    notes: "this is the second reminder in the dummy data",
    dueDate: "2022-08-03",
    completionStatus: false,
  },
];

const reminderSlice = createSlice({
  name: "reminders",
  initialState: {
    reminders: [],
    filterInput: null,
  },
  reducers: {
    generateReminders: (state, action) => {
      state.reminders = action.payload;
    },
    addReminder: (state, action) => {
      return { ...state, reminders: [...state.reminders, action.payload] };
    },
    removeReminder: (state, action) => {
      const completedReminder = state.reminders.findIndex(
        (reminderItem) => reminderItem.id === action.payload.id
      );

      state.reminders[completedReminder].completionStatus = true;
    },
    reminderFilter: (state, action) => {
      state.filterInput = action.payload;
    },
  },
});

export const {
  addReminder,
  removeReminder,
  reminderFilter,
  generateReminders,
} = reminderSlice.actions;

export default reminderSlice.reducer;
