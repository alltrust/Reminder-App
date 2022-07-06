import { configureStore } from "@reduxjs/toolkit";

import ModalReducer from './modalAction'

const store = configureStore({
    reducer:{
        showModal: ModalReducer
    }
});

export default store

