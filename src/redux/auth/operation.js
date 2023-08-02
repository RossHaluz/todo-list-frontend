import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8888'

const setAuthToken = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

// const removeAuthToken = () => {
//     axios.defaults.headers.common.Authorization = ""
// }

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