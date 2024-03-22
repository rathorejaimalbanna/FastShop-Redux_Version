import { createSlice } from "@reduxjs/toolkit";

// Adding initial state
const INITIAL_STATE = {user:[]}

// creating slice for users data
const userSlice = createSlice({
    name:"user",
    initialState:INITIAL_STATE,
    reducers:{
        addUser:(state,action)=>{
            state.user = action.payload
        },
        removeUser:(state)=>{
            state.user = []
        }
    }
});

// export reducer, actions and slelectors
export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
export const userSelectors = (state) => state.userReducer.user