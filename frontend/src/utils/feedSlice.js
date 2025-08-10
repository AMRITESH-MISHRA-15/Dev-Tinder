import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => action.payload,
    removeFeed: (state, action) => null,
    removeUserFromFeed: (state, action) => {
      const newState = state.filter((user) => user._id !== action.payload._id);
      return newState;
    },
  },
});

export const { addFeed,removeUserFromFeed } = feedSlice.actions;
export default feedSlice.reducer;
