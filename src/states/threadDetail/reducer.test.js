import { describe, expect, it } from "vitest";
import threadDetailReducer from "./reducer";
import { ActionType } from "./action";

/**
 * test scenario for threadDetailReducer
 *
 * - threadDetailReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the thread detail when given by RECEIVE_THREAD_DETAIL action
 *  - should return the thread detail with toggled UpVote when given
 *    by UP_VOTE_THREAD_DETAIL action
 *  - should return the thread detail with toggled DownVote when given
 *    by DOWN_VOTE_THREAD_DETAIL action
 *  - should return the thread detail without toggled UpVote and DownVote when given
 *    by NEUTRALIZE_VOTE_THREAD_DETAIL action
 *  - should return the thread detail with new comment when given by CREATE_COMMENT action
 *  - should return the thread detail with toggled UpVote comment when given
 *    by UP_VOTE_COMMENT action
 *  - should return the thread detail with toggled DownVote comment when given
 *    by DOWN_VOTE_COMMENT action
 *  - should return the thread detail without toggled UpVote and DownVote comment
 *    when given by NEUTRALIZE_VOTE_COMMENT action
 *
 */

describe("threadDetailReducer function", () => {
  it("should return the initial state when given by unknown action", () => {
    // Arrange
    const initialState = [];
    const action = {
      type: "UKNOWN",
    };

    // Action
    const nextState = threadDetailReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(initialState);
  });

  it("should return the thread detail when given by RECEIVE_THREAD_DETAIL action", () => {
    // Arrange
    const initialState = [];
    const action = {
      type: ActionType.RECEIVE_THREAD_DETAIL,
      payload: {
        threadDetail: {
          id: "thread-Np47p4jhUXYhrhRn",
          title: "Bagaimana pengalamanmu belajar Redux?",
          body: "Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?",
          createdAt: "2023-05-29T07:55:52.266Z",
          owner: {
            id: "user-mQhLzINW_w5TxxYf",
            name: "Dimas Saputra",
            avatar:
              "https://ui-avatars.com/api/?name=Dimas Saputra&background=random",
          },
          category: "redux",
          comments: [
            {
              id: "comment-0xncglGkDd3wlTCB",
              content: "ada",
              createdAt: "2025-03-11T09:44:28.387Z",
              owner: {
                id: "user-mQhLzINW_w5TxxYf",
                name: "Dimas Saputra",
                avatar:
                  "https://ui-avatars.com/api/?name=Dimas Saputra&background=random",
              },
              upVotesBy: ["user-mQhLzINW_w5TxxYf"],
              downVotesBy: [],
            },
          ],
          upVotesBy: ["user-mQhLzINW_w5TxxYf"],
          downVotesBy: [],
        },
      },
    };

    // Action
    const nextState = threadDetailReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(action.payload.threadDetail);
  });

  it("should return the thread detail with toggled UpVote when given by UP_VOTE_THREAD_DETAIL action", () => {
    // Arrange
    const initialState = {
      id: "thread-Np47p4jhUXYhrhRn",
      title: "Bagaimana pengalamanmu belajar Redux?",
      body: "Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?",
      createdAt: "2023-05-29T07:55:52.266Z",
      owner: {
        id: "user-mQhLzINW_w5TxxYf",
        name: "Dimas Saputra",
        avatar:
          "https://ui-avatars.com/api/?name=Dimas Saputra&background=random",
      },
      category: "redux",
      comments: [
        {
          id: "comment-0xncglGkDd3wlTCB",
          content: "ada",
          createdAt: "2025-03-11T09:44:28.387Z",
          owner: {
            id: "user-mQhLzINW_w5TxxYf",
            name: "Dimas Saputra",
            avatar:
              "https://ui-avatars.com/api/?name=Dimas Saputra&background=random",
          },
          upVotesBy: ["user-mQhLzINW_w5TxxYf"],
          downVotesBy: [],
        },
      ],
      upVotesBy: ["user-mQhLzINW_w5TxxYf"],
      downVotesBy: [],
    };

    const action = {
      type: ActionType.UP_VOTE_THREAD_DETAIL,
      payload: {
        userId: "presiden-mbg-indonesia",
      },
    };

    // Action
    const nextState = threadDetailReducer(initialState, action);

    // Assert
    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [...initialState.upVotesBy, action.payload.userId],
    });
  });

  it("should return the thread detail with toggled DownVote when given by DOWN_VOTE_THREAD_DETAIL action", () => {
    // Arrange
    const initialState = {
      id: "thread-Np47p4jhUXYhrhRn",
      title: "Bagaimana pengalamanmu belajar Redux?",
      body: "Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?",
      createdAt: "2023-05-29T07:55:52.266Z",
      owner: {
        id: "user-mQhLzINW_w5TxxYf",
        name: "Dimas Saputra",
        avatar:
          "https://ui-avatars.com/api/?name=Dimas Saputra&background=random",
      },
      category: "redux",
      comments: [
        {
          id: "comment-0xncglGkDd3wlTCB",
          content: "ada",
          createdAt: "2025-03-11T09:44:28.387Z",
          owner: {
            id: "user-mQhLzINW_w5TxxYf",
            name: "Dimas Saputra",
            avatar:
              "https://ui-avatars.com/api/?name=Dimas Saputra&background=random",
          },
          upVotesBy: ["user-mQhLzINW_w5TxxYf"],
          downVotesBy: [],
        },
      ],
      upVotesBy: ["user-mQhLzINW_w5TxxYf"],
      downVotesBy: [],
    };

    const action = {
      type: ActionType.DOWN_VOTE_THREAD_DETAIL,
      payload: {
        userId: "presiden-mbg-indonesia",
      },
    };

    // Action
    const nextState = threadDetailReducer(initialState, action);

    // Assert
    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: initialState.upVotesBy,
      downVotesBy: [action.payload.userId],
    });
  });

  it("should return the thread detail without toggled UpVote and DownVote when given by NEUTRALIZE_VOTE_THREAD_DETAIL action", () => {
    // Arrange
    const initialState = {
      id: "thread-Np47p4jhUXYhrhRn",
      title: "Bagaimana pengalamanmu belajar Redux?",
      body: "Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?",
      createdAt: "2023-05-29T07:55:52.266Z",
      owner: {
        id: "user-mQhLzINW_w5TxxYf",
        name: "Dimas Saputra",
        avatar:
          "https://ui-avatars.com/api/?name=Dimas Saputra&background=random",
      },
      category: "redux",
      comments: [
        {
          id: "comment-0xncglGkDd3wlTCB",
          content: "ada",
          createdAt: "2025-03-11T09:44:28.387Z",
          owner: {
            id: "user-mQhLzINW_w5TxxYf",
            name: "Dimas Saputra",
            avatar:
              "https://ui-avatars.com/api/?name=Dimas Saputra&background=random",
          },
          upVotesBy: ["user-mQhLzINW_w5TxxYf"],
          downVotesBy: [],
        },
      ],
      upVotesBy: ["user-mQhLzINW_w5TxxYf", "presiden-mbg-indonesia"],
      downVotesBy: [],
    };

    const action = {
      type: ActionType.NEUTRALIZE_VOTE_THREAD_DETAIL,
      payload: {
        userId: "presiden-mbg-indonesia",
      },
    };

    // Action
    const nextState = threadDetailReducer(initialState, action);

    // Assert
    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: initialState.upVotesBy.filter(
        (vote) => vote !== action.payload.userId,
      ),
      downVotesBy: [],
    });
  });

  it("should return the thread detail with new comment when given by CREATE_COMMENT action", () => {
    // Arrange
    const initialState = {
      id: "thread-Np47p4jhUXYhrhRn",
      title: "Bagaimana pengalamanmu belajar Redux?",
      body: "Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?",
      createdAt: "2023-05-29T07:55:52.266Z",
      owner: {
        id: "user-mQhLzINW_w5TxxYf",
        name: "Dimas Saputra",
        avatar:
          "https://ui-avatars.com/api/?name=Dimas Saputra&background=random",
      },
      category: "redux",
      comments: [
        {
          id: "comment-0xncglGkDd3wlTCB",
          content: "ada",
          createdAt: "2025-03-11T09:44:28.387Z",
          owner: {
            id: "user-mQhLzINW_w5TxxYf",
            name: "Dimas Saputra",
            avatar:
              "https://ui-avatars.com/api/?name=Dimas Saputra&background=random",
          },
          upVotesBy: ["user-mQhLzINW_w5TxxYf"],
          downVotesBy: [],
        },
      ],
      upVotesBy: ["user-mQhLzINW_w5TxxYf", "presiden-mbg-indonesia"],
      downVotesBy: [],
    };

    const action = {
      type: ActionType.CREATE_COMMENT,
      payload: {
        comment: "Sangat seru dong soalnya sangat menantang",
      },
    };

    // Action
    const nextState = threadDetailReducer(initialState, action);

    // Assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [action.payload.comment, ...initialState.comments],
    });
  });

  it("should return the thread detail with toggled UpVote comment when given by UP_VOTE_COMMENT action", () => {
    // Arrange
    const initialState = {
      id: "thread-Np47p4jhUXYhrhRn",
      title: "Bagaimana pengalamanmu belajar Redux?",
      body: "Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?",
      createdAt: "2023-05-29T07:55:52.266Z",
      owner: {
        id: "user-mQhLzINW_w5TxxYf",
        name: "Dimas Saputra",
        avatar:
          "https://ui-avatars.com/api/?name=Dimas Saputra&background=random",
      },
      category: "redux",
      comments: [
        {
          id: "comment-0xncglGkDd3wlTCB",
          content: "ada",
          createdAt: "2025-03-11T09:44:28.387Z",
          owner: {
            id: "user-mQhLzINW_w5TxxYf",
            name: "Dimas Saputra",
            avatar:
              "https://ui-avatars.com/api/?name=Dimas Saputra&background=random",
          },
          upVotesBy: ["user-mQhLzINW_w5TxxYf"],
          downVotesBy: [],
        },
      ],
      upVotesBy: ["user-mQhLzINW_w5TxxYf", "presiden-mbg-indonesia"],
      downVotesBy: [],
    };

    const action = {
      type: ActionType.UP_VOTE_COMMENT,
      payload: {
        commentId: "comment-0xncglGkDd3wlTCB",
        userId: "presiden-mbg-users",
      },
    };

    // Action
    const nextState = threadDetailReducer(initialState, action);

    // Assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: [
            ...initialState.comments[0].upVotesBy,
            action.payload.userId,
          ],
        },
      ],
    });
  });

  it("should return the thread detail with toggled DownVote comment when given by DOWN_VOTE_COMMENT action", () => {
    // Arrange
    const initialState = {
      id: "thread-Np47p4jhUXYhrhRn",
      title: "Bagaimana pengalamanmu belajar Redux?",
      body: "Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?",
      createdAt: "2023-05-29T07:55:52.266Z",
      owner: {
        id: "user-mQhLzINW_w5TxxYf",
        name: "Dimas Saputra",
        avatar:
          "https://ui-avatars.com/api/?name=Dimas Saputra&background=random",
      },
      category: "redux",
      comments: [
        {
          id: "comment-0xncglGkDd3wlTCB",
          content: "ada",
          createdAt: "2025-03-11T09:44:28.387Z",
          owner: {
            id: "user-mQhLzINW_w5TxxYf",
            name: "Dimas Saputra",
            avatar:
              "https://ui-avatars.com/api/?name=Dimas Saputra&background=random",
          },
          upVotesBy: ["user-mQhLzINW_w5TxxYf"],
          downVotesBy: [],
        },
      ],
      upVotesBy: ["user-mQhLzINW_w5TxxYf"],
      downVotesBy: [],
    };

    const action = {
      type: ActionType.DOWN_VOTE_COMMENT,
      payload: {
        commentId: "comment-0xncglGkDd3wlTCB",
        userId: "presiden-mbg-users",
      },
    };

    // Action
    const nextState = threadDetailReducer(initialState, action);

    // Assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: [...initialState.comments[0].upVotesBy],
          downVotesBy: [action.payload.userId],
        },
      ],
    });
  });

  it("should return the thread detail without toggled UpVote and DownVote comment when given by NEUTRALIZE_VOTE_COMMENT action", () => {
    // Arrange
    const initialState = {
      id: "thread-Np47p4jhUXYhrhRn",
      title: "Bagaimana pengalamanmu belajar Redux?",
      body: "Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?",
      createdAt: "2023-05-29T07:55:52.266Z",
      owner: {
        id: "user-mQhLzINW_w5TxxYf",
        name: "Dimas Saputra",
        avatar:
          "https://ui-avatars.com/api/?name=Dimas Saputra&background=random",
      },
      category: "redux",
      comments: [
        {
          id: "comment-0xncglGkDd3wlTCB",
          content: "ada",
          createdAt: "2025-03-11T09:44:28.387Z",
          owner: {
            id: "user-mQhLzINW_w5TxxYf",
            name: "Dimas Saputra",
            avatar:
              "https://ui-avatars.com/api/?name=Dimas Saputra&background=random",
          },
          upVotesBy: ["user-mQhLzINW_w5TxxYf", "presiden-mbg-users"],
          downVotesBy: [],
        },
      ],
      upVotesBy: ["user-mQhLzINW_w5TxxYf"],
      downVotesBy: [],
    };

    const action = {
      type: ActionType.NEUTRALIZE_VOTE_COMMENT,
      payload: {
        commentId: "comment-0xncglGkDd3wlTCB",
        userId: "presiden-mbg-users",
      },
    };

    // Action
    const nextState = threadDetailReducer(initialState, action);

    // Assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: initialState.comments[0].upVotesBy.filter(
            (votes) => votes !== action.payload.userId,
          ),
          downVotesBy: [],
        },
      ],
    });
  });
});
