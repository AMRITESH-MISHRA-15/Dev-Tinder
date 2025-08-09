import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => {
      return null;
    },
    removeUserFromFeed: (state, action) => {
      const newState = state.filter((user) => user._id !== action.payload._id);
      return newState;
    },
  },
});

export const { addUser, removeUserFromFeed, removeUser } = userSlice.actions;

export default userSlice.reducer;
