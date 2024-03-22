import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./Redux/filterReducer";
import { userReducer } from "./Redux/userReducer";

export const store = configureStore({
    reducer:{
        filterReducer,
        userReducer
    }
});