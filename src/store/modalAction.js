import {createSlice} from '@reduxjs/toolkit'

const modalSlice = createSlice({
    name: 'modal',
    initialState:{
        showModal: false
    },
    reducers:{
        toggleShowModal: (state)=>{
            state.showModal = !state.showModal
        }
    }
});

export const {toggleShowModal} = modalSlice.actions;

export default modalSlice.reducer
