import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@utils/userSlice";
import connectionReducer from "@utils/connectionSlice";
import feedReducer from "@utils/feedSlice";
import requestReducer from "@utils/requestSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
    connections: connectionReducer,
    requests: requestReducer,
  },
});

export default appStore;
