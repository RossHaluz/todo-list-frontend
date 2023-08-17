import { createSlice } from "@reduxjs/toolkit";
import { createTask, getTasks } from "./operations";

const initialState = {
    loading: false,
    tasks: [],
    task: null
}

const taskSlice = createSlice({
    name: 'task',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [createTask.pending](state, action){
            state.loading = true
        },
        [createTask.fulfilled](state, action){
            state.loading = false;
            state.tasks.push(action.payload)
        }, 
        [getTasks.pending](state, __) {
            state.pending = true;
        }, 
        [getTasks.fulfilled](state, action){
            state.pending = false;
           state.tasks = (action.payload);
        }
    }
})

export const taskReducer = taskSlice.reducer;