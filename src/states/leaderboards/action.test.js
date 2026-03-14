import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import api from "../../utils/api";
import {
  asyncPopulateLeaderboards,
  receiveLeaderboardsActionCreator,
} from "./action";
import { setLoading } from "../loading/action";

/**
 * test scenario for leaderboards action
 *
 * - asyncPopulateLeaderboards thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

const fakeLeaderboardsResponse = [
  {
    user: {
      id: "users-1",
      name: "John Doe",
      email: "john@example.com",
      avatar: "https://generated-image-url.jpg",
    },
    score: 10,
  },
];

const fakeErrorResponse = new Error("Fetching Data Is Not Success");

describe("asyncPopulateLeaderboards thunk", () => {
  beforeEach(() => {
    // backup original implementation
    api._getLeaderboards = api.getLeaderBoards;
  });

  afterEach(() => {
    // restore original implementation
    api.getLeaderBoards = api._getLeaderboards;

    // delete backup
    delete api._getLeaderboards;

    // restore all mocks
    vi.restoreAllMocks();
  });

  it("should dispatch action correctly when data fetching success", async () => {
    // Arange
    // stub implementation
    api.getLeaderBoards = () => Promise.resolve(fakeLeaderboardsResponse);
    // mock dispatch
    const dispatch = vi.fn();

    // Action
    await asyncPopulateLeaderboards()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(
      receiveLeaderboardsActionCreator(fakeLeaderboardsResponse),
    );
  });

  it("should dispatch action and call alert correctly when data fetching failed", async () => {
    // Arange
    // stub implementation
    api.getLeaderBoards = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = vi.fn();
    vi.spyOn(window, "alert").mockImplementation(() => {});

    // Action
    await asyncPopulateLeaderboards()(dispatch);

    // Assert
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
