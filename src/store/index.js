import { configureStore } from "@reduxjs/toolkit";
import usersWithRTKReducer from "./slices/users-with-rtk.slice";

export const store = configureStore({
    reducer: {
        usersWithRTK: usersWithRTKReducer
    }
})
