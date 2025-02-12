import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBlogs = createAsyncThunk("blog/fetchBlogs", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
});
const blogSlice = createSlice({
    name: "blogs",
    initialState: {
        loading: false,
        blogs: null,
        error: false,
        isFetched: false,
    },

    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBlogs.pending, (state, action) => {
            state.loading = true;
        });

        builder.addCase(fetchBlogs.rejected, (state, action) => {
            state.loading = false;
            state.error = true;

            console.log("error: " + action.error);
        });

        builder.addCase(fetchBlogs.fulfilled, (state, action) => {
            state.loading = false;
            state.blogs = action.payload;
            isFetched: true;
        });

        // [fetchBlogs .fulfilled]: (state, action) => {
        //     state.posts = action.payload;
        // },
    },
});

export default blogSlice.reducer;
