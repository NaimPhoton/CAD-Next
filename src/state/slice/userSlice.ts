import {createSlice} from "@reduxjs/toolkit";
import {userLogin} from "../action/user";

interface UserState {
  isLoading: boolean;
  value: unknown;
  isError: string | boolean | null;
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
    actionLogin: (state, action) => {
      const result: string = userLogin(action.payload);
      if (!result) {
        state.isError = true;
      } else {
        state.access_token = result;
      }
    },
  },
});

export const {setAccessToken, setError, actionLogin} = userSlice.actions;
export default userSlice.reducer;
