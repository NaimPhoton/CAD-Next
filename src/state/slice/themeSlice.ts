// src/store/themeSlice.ts
import { createSlice } from '@reduxjs/toolkit';

// Define the shape of the theme state
interface ThemeState {
  theme: 'light' | 'dark'; // Theme can be either 'light' or 'dark'
}

// Initial state
const initialState: ThemeState = {
  theme: 'light', // Default theme is light
};

// Create a slice for theme management
const themeSlice = createSlice({
  name: 'theme', // Slice name
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light'; // Toggle between light and dark
    },
  },
});

// Export actions for use in components
export const { toggleTheme } = themeSlice.actions;

// Export the reducer to be used in the store
export default themeSlice.reducer;
