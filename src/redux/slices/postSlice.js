import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postService} from "../../services";

const initialState = {
    posts: [],
    errors: null,
    loading: null,
    selectedPost: null
};

const getAllPosts = createAsyncThunk(
    'postSlice/getAllPosts',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await postService.getAllPosts();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const getPostById = createAsyncThunk(
    'postSlice/getPostById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await postService.getPostById(id);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        setSelectedPost: (state, action) => {
            state.selectedPost = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getAllPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload;
            })
            .addCase(getAllPosts.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllPosts.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload;
            })
            .addCase(getPostById.fulfilled, (state, action) => {
                state.selectedPost = action.payload;
            })
    }
});

const {reducer: postReducer, actions: {setSelectedPost}} = postSlice;

const postActions = {
    getAllPosts,
    getPostById,
    setSelectedPost
};

export {postReducer, postActions};