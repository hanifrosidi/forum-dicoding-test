import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "./authUser/reducer";
import isPreloadReducer from "./isPreload/reducer";
import leaderboardsReducer from "./leaderboards/reducer";
import threadReducer from "./threads/reducer";
import threadDetailReducer from "./threadDetail/reducer";
import usersReducer from "./users/reducer";
import { loadingReducer } from "./loading/reducer";

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    threads: threadReducer,
    threadDetail: threadDetailReducer,
    leaderboards: leaderboardsReducer,
    loading: loadingReducer,
  },
});

export default store;
