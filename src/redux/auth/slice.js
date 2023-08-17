import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { registerUser, loginUser, logoutUser, currentUser, updateUser } from './operation';

const extraActions = [registerUser, loginUser];
const getActions = type => extraActions.map(action => action[type]);

const initialState = {
  user: null,
  loading: false,
  token: null,
  theme: 'dark',
  error: null,
  isLogin: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeTheme(state, action) {
      state.theme = action.payload;
    }
  },
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
      .addCase(logoutUser.pending, (state, __) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.user = null;
        state.loading = false;
        state.token = null;
        state.error = null;
        state.isLogin = false;
        state.isRefreshing = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(currentUser.pending, state => {
        state.loading = true;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.isLogin = true;
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(currentUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLogin = false;
        state.isRefreshing = false;
        state.token = null;
        state.user = null;
        state.loading = false;
      })
      .addCase(updateUser.pending, (state, __) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.user = action.payload;
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
        state.isLogin = true;
        state.error = null;
        state.loading = false;
      })
  },
});

export const {changeTheme} = authSlice.actions;

export const authReducer = authSlice.reducer;

