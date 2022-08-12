import { createSlice } from "@reduxjs/toolkit";
import Statuses from "./completionStatus";
import Priority from "./priorityStatus";

const DUMMY_DATA = [
  {
    id: "r1",
    name: "reminder 1",
    priority: "high",
    notes: "this is the first reminder in the dummy data",
    dueDate: "2022-10-03",
    isCompleted: Statuses.INCOMPLETE,
    priority: Priority.HIGH,
  },
  {
    id: "r2",
    name: "reminder 2",
    priority: "medium",
    notes: "this is the second reminder in the dummy data",
    dueDate: "2022-08-03",
    isCompleted: Statuses.INCOMPLETE,
    priority: Priority.LOW,
  },
  {
    id: "r3",
    name: "reminder 3",
    priority: "medium",
    notes: "this is the second reminder in the dummy data",
    dueDate: "2022-08-03",
    isCompleted: Statuses.INCOMPLETE,
    priority: Priority.MEDIUM,
  },
];

const reminderSlice = createSlice({
  name: "reminders",
  initialState: {
    reminders: DUMMY_DATA,
    filterInput: null,
  },
  reducers: {
    generateReminders: (state, action) => {
      state.reminders = action.payload;
    },
    addReminder: (state, action) => {
      const reminderIndex = state.reminders.findIndex(
        (reminder) => reminder.id === action.payload.id
      );
      const reminderExists = state.reminders[reminderIndex];
      let updateReminder;
      let updatedList;
      if (!reminderExists) {
        return { ...state, reminders: [...state.reminders, action.payload] };
      } else {
        updatedList = [...state.reminders];
        updateReminder = {
          ...reminderExists,
          notes: action.payload.notes,
          name: action.payload.name,
          priority: action.payload.priority,
          dueDate: action.payload.dueDate 
        };
        updatedList[reminderIndex] = updateReminder;
      }
      return { ...state, reminders: updatedList };
    },
    completeReminder: (state, action) => {
      const completedReminder = state.reminders.findIndex(
        (reminderItem) => reminderItem.id === action.payload.id
      );

      state.reminders[completedReminder].isCompleted = Statuses.COMPLETE;
    },
    deleteReminder: (state, action) => {
      const remainingReminders = state.reminders.filter(
        (reminderItem) => reminderItem.id !== action.payload.id
      );
      return { ...state, reminders: remainingReminders };
    },
    reminderFilter: (state, action) => {
      state.filterInput = action.payload;
    },
  },
});

export const {
  addReminder,
  completeReminder,
  reminderFilter,
  generateReminders,
  deleteReminder,
} = reminderSlice.actions;

export default reminderSlice.reducer;
