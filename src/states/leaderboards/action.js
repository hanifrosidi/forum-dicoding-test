import api from "@/utils/api";
import { setLoading } from "../loading/action";
// import { setLoading } from "../loading/action";

const ActionType = {
  RECEIVE_LEADERBOARDS: "RECEIVE_LEADERBOARDS",
};

function receiveLeaderboardsActionCreator(leaderboards) {
  return {
    type: ActionType.RECEIVE_LEADERBOARDS,
    payload: {
      leaderboards,
    },
  };
}

function asyncPopulateLeaderboards() {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const leaderboards = await api.getLeaderBoards();
      dispatch(receiveLeaderboardsActionCreator(leaderboards));
    } catch (error) {
      alert(error.message);
    } finally {
      dispatch(setLoading(false));
    }
  };
}

export {
  ActionType,
  receiveLeaderboardsActionCreator,
  asyncPopulateLeaderboards,
};
