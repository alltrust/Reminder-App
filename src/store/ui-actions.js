import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    showModal: null,
    setNotification: null,
    setIsLoading: false,
    displayListType: true,
  },
  reducers: {
    toggleShowModalOn: (state, action) => {
      const { name, notes, priority, dueDate } = action.payload;
      return {
        ...state,
        showModal: {
          name: name,
          notes: notes,
          priority: priority,
          dueDate: dueDate,
        },
      };
    },
    toggleShowModalOff: (state) => {
      return {
        ...state,
        showModal: null,
      };
    },
    setNotification: (state, action) => {
      state.setNotification = {
        status: action.payload.status,
        message: action.payload.message,
        title: action.payload.title,
      };
    },
    toggleRemindersListByStatus: (state) => {
      state.displayListType = !state.displayListType;
    },
    setIsLoading: (state, action) => {
      state.setIsLoading = action.payload;
    },
    
  },
});

export const {
  toggleShowModalOn,
  toggleShowModalOff,
  setNotification,
  toggleRemindersListByStatus,
  setIsLoading,
} = modalSlice.actions;

export default modalSlice.reducer;
