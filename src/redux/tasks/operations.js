import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8888'

export const createTask = createAsyncThunk('api/createTask', async (params, {rejectWithValue}) => {
   const {id, value} = params;
    try {
        const {data} = await axios.post(`/api/task/create-task/${id}`, value);
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const getTasks = createAsyncThunk('api/getTasks', async (__, {rejectWithValue}) => {
    try {
        const {data} = await axios.get(`/api/task/get-tasks`);
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const updateTask = createAsyncThunk('api/updateTask', async (params, {rejectWithValue}) => {
    const {id: taskId} = params;
    try {
        const {data} = await axios.put(`/api/task/update-task/${taskId}`, params);
        return data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const deleteTask = createAsyncThunk('api/deleteTask', async (taskId, {rejectWithValue}) => {
    try {
        const {data} = await axios.delete(`/api/task/delete-task/${taskId}`);
        return data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const filterTasks = createAsyncThunk('api/filterTasks', async(filterName, {rejectWithValue}) => {
    try {
        const {data} = await axios.get(`/api/task/filter-tasks/${filterName}`);
        return data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const dragTasks = createAsyncThunk('api/dragTasks', async(params, {rejectWithValue}) => {
    const {taskId, columnId, indexFrom, indexTo} = params;
    console.log(params);
    try {
        const {data} = await axios.patch(`/api/task/drag-task/${taskId}`, {columnId, indexFrom, indexTo});
        return data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})