/**
 * test scenario for shared action
 *
 * - asyncPopulateUsersAndTalks thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import api from "../../utils/api";
import asyncPopulateUsersAndThreads from "./action";
import { setLoading } from "../loading/action";
import { receiveUsersActionCreator } from "../users/action";
import { receiveThreadsActionCreator } from "../threads/action";

const fakeThreadResponse = {
  id: "thread-1",
  title: "Thread Pertama",
  body: "Ini adalah thread pertama",
  category: "General",
  createdAt: "2021-06-21T07:00:00.000Z",
  ownerId: "users-1",
  upVotesBy: [],
  downVotesBy: [],
  totalComments: 0,
};

const fakeUsersResponse = {
  id: "user-123",
  name: "John Doe",
  email: "john@example.com",
  avatar: "https://generated-image-url.jpg",
};

const fakeErrorResponse = new Error("Fetching Gagal");

describe("asyncPopulateUsersAndThreads thunk", () => {
  beforeEach(() => {
    // backup original implementation
    api._getAllUsers = api.getAllUsers;
    api._getAllThreads = api.getAllThreads;
  });

  afterEach(() => {
    // restore original implementation
    api.getAllUsers = api._getAllUsers;
    api.getAllThreads = api._getAllThreads;

    // delete backup
    delete api._getAllThreads;
    delete api._getAllUsers;

    // restore all mocks
    vi.restoreAllMocks();
  });

  it("should dispatch action correctly when data fetching success", async () => {
    // Arrange
    // stub implementation
    api.getAllUsers = () => Promise.resolve(fakeUsersResponse);
    api.getAllThreads = () => Promise.resolve(fakeThreadResponse);
    // mock dispatch
    const dispatch = vi.fn();

    // Action
    await asyncPopulateUsersAndThreads()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(setLoading(true));
    expect(dispatch).toHaveBeenCalledWith(
      receiveUsersActionCreator(fakeUsersResponse),
    );
    expect(dispatch).toHaveBeenCalledWith(
      receiveThreadsActionCreator(fakeThreadResponse),
    );
    expect(dispatch).toHaveBeenCalledWith(setLoading(false));
  });

  it("should dispatch action and call alert correctly when data fetching failed", async () => {
    // Arrange
    // stub implementation
    api.getAllUsers = () => Promise.reject(fakeErrorResponse);
    api.getAllThreads = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = vi.fn();

    // spy window alert
    vi.spyOn(window, "alert").mockImplementation(() => {});

    window.alert(fakeErrorResponse.message);

    // Action
    await asyncPopulateUsersAndThreads()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(setLoading(true));
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);

    expect(dispatch).toHaveBeenCalledWith(setLoading(false));
  });
});
