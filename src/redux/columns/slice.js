import { createSlice } from "@reduxjs/toolkit";
import { createColumn, getColumns, updateColumn, deleteColumn } from "./operations";

const initialState = {
    columns: [],
    loading: false
}

const columnSlice = createSlice({
    name: 'column',
    initialState,
    reducers:{},
    extraReducers:{
        [createColumn.pending](state, action){
            state.loading = true;
        },
        [createColumn.fulfilled](state, action){
            state.loading = false;
            state.columns.push(action.payload)
        },
        [getColumns.pending](state, action) {
            state.loading = true;
        },
        [getColumns.fulfilled](state, action) {
            state.loading = false;
            state.columns = action.payload;
        },
        [updateColumn.pending](state, action){
            state.loading = true;
        },
        [updateColumn.fulfilled](state, action){
            state.loading = true;
            const findItem = state.columns?.findIndex(item => item?._id === action.payload?._id);
            state.columns[findItem] = action.payload;
        },
        [deleteColumn.pending](state, action) {
            state.loading = true;
        },
        [deleteColumn.fulfilled](state, action){
            state.loading = false;
            state.columns = state.columns.filter(item => item._id !== action.payload.data._id)
        }
    }
})

export const columnReducer = columnSlice.reducer;