import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    loading: true,
    error: { message: '' }
}

const usersWithRTKSlice = createSlice({
    name: 'usersWithRTK',
    initialState,
    reducers: {
        fetch_users: (state, { payload }) => {
            state.users = payload
        },
        add_user: (state, { payload }) => {
            state.users = [...state.users, payload]
        },
        set_error: (state, { payload }) => {
            state.error = payload
        },
        set_loading: (state, { payload }) => {
            state.loading = payload
        },
    }
})

export const { add_user, fetch_users, set_error, set_loading } = usersWithRTKSlice.actions

const usersWithRTKReducer = usersWithRTKSlice.reducer

export default usersWithRTKReducer;
