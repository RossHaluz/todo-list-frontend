import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage';
import { sideBarReducer } from "./sidebar/slice";
import { authReducer } from "./auth/slice";
import { boardReducer } from "./boards/slice";
import { columnReducer } from "./columns/slice";
import { taskReducer } from "./tasks/slice";

const persistConfig = {
    key: 'token',
    storage,
    whitelist: ['token', 'theme'],
  }

export const store = configureStore({
    reducer: {
        auth: persistReducer(persistConfig, authReducer),
        sidebar: sideBarReducer,
        board: boardReducer,
        column: columnReducer,
        task: taskReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);