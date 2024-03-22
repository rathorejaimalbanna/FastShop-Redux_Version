import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE  = {filter:[]}

const filterSlice = createSlice({
    name:"filter",
    initialState:INITIAL_STATE,
    reducers:{
        addFilter:(state,action)=>{
            state.filter.push(action.payload)
        },
        removeFilter:(state,action)=>{
            state.filter = state.filter.filter((_,id)=> id!== action.payload)
        }
    }
});

export const filterReducer = filterSlice.reducer;
export const filterActions = filterSlice.actions;
export const filterSelectors = (state)=> state.filterReducer.filter;
