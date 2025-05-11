import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";

export interface User {
    email: string;
    password: string;
}

const initialState: User[] = [];

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        registerUser: (state, action: PayloadAction<User>) => {
            state.push(action.payload);
        },
    },
});

export const { registerUser } = userSlice.actions;
export const selectUsers = (state: RootState) => state.users;
export const userReducer = userSlice.reducer;
