import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./slice/Blog";

// Load state from localStorage
const loadState = () => {
    try {
        const serializedState = localStorage.getItem("blogsState");
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

// Save state to localStorage
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state.blogs);
        localStorage.setItem("blogsState", serializedState);
    } catch (err) {
        console.error("Error saving state to localStorage:", err);
    }
};

// Initialize the store with preloaded state (from localStorage)
const preloadedState = {
    blogs: {
        blogs: [],
        loading: false,
        error: null,
        isFetched: false,
        ...loadState(), // Load state from localStorage
    },
};

const store = configureStore({
    reducer: {
        blogs: blogReducer,
    },
    preloadedState,
});

// Subscribe to store updates and save blogs to localStorage
store.subscribe(() => {
    saveState(store.getState().blogs);
});

export default store;
