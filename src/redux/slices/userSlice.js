import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {userService} from "../../services";

const initialState = {
    users: [],
    errors: null,
    loading: null,
    selectedUser: null
};

const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await userService.getAllUsers();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const getUserById = createAsyncThunk(
    'userSlice/getUserById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await userService.getUserById(id);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(getAllUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload;
            })
            .addCase(getUserById.fulfilled, (state, action) => {
                state.selectedUser = action.payload;
            })
    }
});

const {reducer: userReducer, actions: {setSelectedUser}} = userSlice;

const userActions = {
    getAllUsers,
    getUserById,
    setSelectedUser
};

export {userActions, userReducer};