import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false
}

const sideBarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        openSideBar(state, action) {
            state.isOpen = action.payload;
        }
    }
})

export const {openSideBar} = sideBarSlice.actions;

export const sideBarReducer = sideBarSlice.reducer;