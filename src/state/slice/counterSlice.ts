// src/store/counterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number; // Define the shape of the counter state
}

const initialState: CounterState = {
  value: 0, // Initial counter value
};

const counterSlice = createSlice({
  name: 'counter', // Slice name
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1; // Increment the counter value
    },
    decrement: (state) => {
      state.value -= 1; // Decrement the counter value
    },
    reset: (state) => {
      state.value = 0; // Reset the counter value
    },
    set: (state, action: PayloadAction<number>) => {
      state.value = action.payload; // Set the counter value
    },
  },
});

// Export actions for use in components
export const { increment, decrement, reset, set } = counterSlice.actions;

// Export the reducer to be used in the store
export default counterSlice.reducer;
