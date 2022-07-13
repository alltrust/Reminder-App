import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    showModal: null,
    setNotification: null,
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
    toggleShowModalOff: (state, action) => {
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
  },
});

export const {
  toggleShowModalOn,
  toggleShowModalOff,
  setNotification,
} = modalSlice.actions;

export default modalSlice.reducer;
