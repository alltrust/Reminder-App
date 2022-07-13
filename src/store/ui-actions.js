import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    showModal: false,
    setNotification: null,
  },
  reducers: {
    toggleShowModalOn: (state, action) => {
      if (action.payload) {
        state.showModal = true;
      }
    },
    toggleShowModalOff: (state, action) => {
      state.showModal = false;
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
