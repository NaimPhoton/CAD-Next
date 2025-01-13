import {createSlice} from "@reduxjs/toolkit";

interface UserState {
  isLoading: boolean;
  value: unknown;
  isError: string | null;
  access_token: string | null;
}

const initialState: UserState = {
  isLoading: false,
  value: null,
  isError: null,
  access_token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.isError = action.payload;
    },
    setAccessToken: (state, action) => {
      state.access_token = action.payload;
    },
  },
});

export const {setAccessToken, setError} = userSlice.actions;
export default userSlice.reducer;
