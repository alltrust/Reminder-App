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
      return {
        ...state,
        showModal: action.payload
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
