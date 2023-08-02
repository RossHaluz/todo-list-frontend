import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { registerUser, loginUser } from './operation';

const extraActions = [registerUser, loginUser];
const getActions = type => extraActions.map(action => action[type]);

const initialState = {
  user: null,
  loading: false,
  token: null,
  error: null,
  isLogin: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    return builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
      })
      .addMatcher(isAnyOf(...getActions('pending')), state => {
        state.loading = true;
        state.user = null;
        state.error = null;
        state.token = null;
        state.isLogin = false;
        state.isRefreshing = false;
      })
      .addMatcher(isAnyOf(...getActions('rejected')), (state, action) => {
        state.loading = false;
        state.user = null;
        state.token = null;
        state.error = action.payload;
        state.isLogin = false;
        state.isRefreshing = false;
      })
      .addMatcher(isAnyOf(...getActions('fulfilled')), state => {
        state.error = null;
        state.loading = false;
      })
  },
});

export const authReducer = authSlice.reducer;

