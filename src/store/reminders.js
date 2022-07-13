import { createSlice } from "@reduxjs/toolkit";

const DUMMY_DATA = [
  {
    id: "r1",
    name: "reminder 1",
    priority: "high",
    notes: "this is the first reminder in the dummy data",
    dueDate: "2022-10-03",
  },
  {
    id: "r2",
    name: "reminder 2",
    priority: "medium",
    notes: "this is the second reminder in the dummy data",
    dueDate: "2022-08-03",
  },
  {
    id: "r3",
    name: "reminder 3",
    priority: "medium",
    notes: "this is the second reminder in the dummy data",
    dueDate: "2022-08-03",
  },
];

const reminderSlice = createSlice({
  name: "reminders",
  initialState: {
    reminders: [],
    completedReminders: [],
    filterInput: null,
    // searchedReminders: [],
  },
  reducers: {
    generateReminders: (state, action)=>{
         state.reminders= action.payload
    },
    addReminder: (state, action) => {
      return { ...state, reminders: [...state.reminders, action.payload] };
        // state.reminders.push(action.payload)
    },
    removeReminder: (state, action) => {
      const checkedReminder = state.reminders.filter(
        (reminderItem) => reminderItem.id === action.payload.id
      );
      return {
        ...state,
        reminders: state.reminders.filter(
          (reminderItem) => reminderItem.id !== action.payload.id
        ),
        completedReminders: state.completedReminders.concat(checkedReminder),
      };
    },
    reminderFilter: (state, action)=>{
       state.filterInput = action.payload
    }
    // searchReminders: (state, action) => {
    
        //  state.searchedReminders= action.payload
        
    //   return {
    //     ...state,
    //     searchedReminders: [...state.reminders].filter((reminderItem) => {
    //       return reminderItem.name
    //         .toLowerCase()
    //         .includes(action.payload.toLowerCase());
    //     }),
    //   };
    // },
  },
});

export const {
  addReminder,
  removeReminder,
  reminderFilter,
  generateReminders
} = reminderSlice.actions;

export default reminderSlice.reducer;
