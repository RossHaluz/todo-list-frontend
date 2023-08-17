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