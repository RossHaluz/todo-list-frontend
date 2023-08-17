import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = 'http://localhost:8888'

export const createColumn = createAsyncThunk('api/createColumn', async (params, {rejectWithValue}) =>{
const {boardName, title} = params;
    try {
    const {data} = await axios.post(`/api/column/create-column/${boardName}`, {title});
    return data
} catch (error) {
    return rejectWithValue(error.message)
}
})

export const getColumns = createAsyncThunk('api/getColumns', async(borderName, {rejectWithValue}) => {
    try {
        const {data} = await axios.get(`/api/column/get-columns/${borderName}`)
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const updateColumn = createAsyncThunk('api/updateColumn', async (params, {rejectWithValue}) => {
    const {id: columnId, value:{title}} = params;
    try {
        const {data} = await axios.put(`/api/column/update-column/${columnId}`, {title});
        return data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const deleteColumn = createAsyncThunk('api/deleteColumn', async (columnId, {rejectWithValue}) => {
    try {
        const {data} = await axios.delete(`/api/column/delete-column/${columnId}`);
        return data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})