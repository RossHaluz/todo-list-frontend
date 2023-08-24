import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// http://localhost:8888
// https://todolist-nqf3.onrender.com

axios.defaults.baseURL = 'https://todolist-nqf3.onrender.com'

export const getAllBoards = createAsyncThunk('api/getAllBoards', async(__, {rejectWithValue}) => {
    try {
        const {data} = await axios.get('/api/board/get-boards');
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const getBoard = createAsyncThunk('api/getBoard', async(boardName, {rejectWithValue}) => {
    try {
        const {data} = await axios.get(`/api/board/get-board/${boardName}`);
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const createNewBoard = createAsyncThunk('api/createNewBoard', async(params, {rejectWithValue}) => {
    try {
        const {data} = await axios.post('/api/board/create-board', params);
        return data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const delateBoard = createAsyncThunk('api/delateBoard', async(boardId, {rejectWithValue}) => {
    try {
         const {data} = await axios.delete(`/api/board/delate-board/${boardId}`);
         return data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const updateBoard = createAsyncThunk('api/updateBoard', async(params, {rejectWithValue}) => {
const {id: boardId} = params;
    try {
        const {data} = await axios.put(`/api/board/update-board/${boardId}`, params);
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})