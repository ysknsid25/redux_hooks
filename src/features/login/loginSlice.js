import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiURL = "http://localhost:8080/";

//! 非同期系の関数はスライスの外に定義する
export const fetchAsyncLogin = createAsyncThunk("login/post", async (auth) => {
    const res = await axios.post(`${apiUrl}`);
});

const loginSlice = createSlice({
    name: "login",
    initialState: {
        authen: {
            username: "",
            password: "",
        },
        isLoginView: true,
        profile: {
            id: 0,
            username: "",
        },
    },
    reducers: {
        editUsername(state, action) {
            state.authen.username = action.payload;
        },
        editPassword(state, action) {
            state.authen.password = action.payload;
        },
    },
    toggleMode(state) {
        state.isLoginView = !state.isLoginView;
    },
});
