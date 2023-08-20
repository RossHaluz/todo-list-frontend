import { createSlice } from "@reduxjs/toolkit";
import { createTask, getTasks, updateTask, deleteTask, filterTasks } from "./operations";

const initialState = {
    loading: false,
    tasks: [],
    setFilter: null,
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
        },
        [updateTask.pending](state, action){
            state.loading = true;
        },
        [updateTask.fulfilled](state, action){
            state.loading = false;
            const findIndex = state.tasks.findIndex(item => item._id === action.payload._id);
            state.tasks[findIndex] = action.payload;
        },
        [deleteTask.pending](state, action){
            state.loading = true;
        },
        [deleteTask.fulfilled](state, action) {
            state.loading = false;
            state.tasks = state.tasks.filter(item => item._id !== action.payload._id)
        },
        [filterTasks.pending](state, action){
            state.loading = true;
        },
        [filterTasks.fulfilled](state, action){
            state.loading = false;
            state.tasks = action.payload;
        }
    }
})

export const taskReducer = taskSlice.reducer;