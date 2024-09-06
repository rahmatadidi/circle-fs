import { createSlice } from "@reduxjs/toolkit";

interface User {
  username: string;
  fullname: string;
  email: string;
  profileImage: string;
  bio: string;
}

export interface AuthState {
  user: User;
}

const initialState: AuthState = {
  user: {
    fullname: "",
    email: "",
    username: "",
    profileImage: "",
    bio: "",
  },
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_USER: (state, action: { payload: User }) => {
      state.user = action.payload;
    },
  },
});

export const { SET_USER } = AuthSlice.actions;
export default AuthSlice.reducer;
