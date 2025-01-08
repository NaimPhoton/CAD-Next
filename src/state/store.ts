import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice";
import themeReducer from "./slice/themeSlice";

// Configure the Redux store
const store = configureStore({
  reducer: {
    counter: counterReducer, // Add the counter reducer to the store
    theme: themeReducer, // Add the theme reducer to the store
  },
});

// Types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>; // Type for the RootState
export type AppDispatch = typeof store.dispatch; // Type for the AppDispatch
export default store;
