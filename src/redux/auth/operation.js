import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8888'

const setAuthToken = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

const removeAuthToken = () => {
    axios.defaults.headers.common.Authorization = ""
}

export const registerUser = createAsyncThunk('api/registerUser', async(params, {rejectWithValue}) => {
    try {
        const {data} = await axios.post('/api/user/register', params);
        setAuthToken(data.createUser.token)
        return data.createUser
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const loginUser = createAsyncThunk('api/loginUser', async(params, {rejectWithValue}) => {
    try {
        const {data} = await axios.post('/api/user/login', params);
        setAuthToken(data.loginUser.token)
        return data.loginUser
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const logoutUser = createAsyncThunk('api/logoutUser', async (__, {rejectWithValue}) => {
    try {
        await axios.post('/api/user/logout')
        removeAuthToken()
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const currentUser = createAsyncThunk('api/currentUser', async (__, {rejectWithValue, getState}) => {
    const state = getState();
    const token = state.auth.token;
    if(!token) {
        return rejectWithValue()
    }
    setAuthToken(token)
    try {
        const {data} = await axios.get('/api/user/current')
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})