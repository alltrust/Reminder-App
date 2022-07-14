import { createSlice } from "@reduxjs/toolkit";

const formControlSlice = createSlice({
    name: "Form Validation",
    initialState:{
        reminderNameValue: '',
        reminderIsValid: false,
        dueDateValue: '',
        dueDateIsValid: false,
    },
    reducers:{
        isReminderNameValid: (state, action)=>{
            state.reminderNameValue = action.payload
            if(action.payload.trim() !== ''){
                state.reminderIsValid = true
            }else{
                return
            }

        },
        isDateValid: (state, action)=>{
            state.dueDateValue = action.payload
            // if(action.payload !== ''){
            //     state
            // }

        },
        reset: (state)=>{
            state.reminderNameValue= ''
        }
    }


});

export const {isReminderNameValid, isDateValid} = formControlSlice.actions;

export default formControlSlice.reducer