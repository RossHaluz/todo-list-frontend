import { authReducer } from "./auth/slice";
import { configureStore } from "@reduxjs/toolkit";
import { sideBarReducer } from "./sidebar/slice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        sidebar: sideBarReducer
    }
})

