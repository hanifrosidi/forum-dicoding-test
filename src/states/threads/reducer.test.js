import { describe, it, expect } from "vitest";
import threadsReducer from "./reducer";
import { ActionType } from "./action";

/*
    Test Scenario threadReducer

    threadReducers function
    1 should return the initial state when given by unknown action
    2 should return the thread  when given by RECEIVE_THREADS action
    3 should return new thread  when given by CREATE_THREAD action
    4 should return the thread  with toggled UpVote when given by UP_VOTE_THREAD action
    5 should return the thread with toggled DownVote when given by DOWN_VOTE_THREAD action
    6 should return the thread without toggled UpVote and DownVote when given
      by NEUTRALIZE_VOTE_THREAD action
*/

describe("threadsReducers function", () => {
  it("should return the initial state when give by uknown action", () => {
    // Arrange
    const initialState = [];
    const action = { type: "UKNOWN" };

    // Action
    const nextState = threadsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(initialState);
  });

  it("should return the thread  when given by RECEIVE_THREADS action", () => {
    // Arrange
    const initialState = [];
    const action = {
      type: ActionType.RECEIVE_THREADS,
      payload: {
        threads: [
          {
            id: "thread-Np47p4jhUXYhrhRn",
            title: "Bagaimana pengalamanmu belajar Redux?",
            body: "Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?",
            category: "redux",
            createdAt: "2023-05-29T07:55:52.266Z",
            ownerId: "user-mQhLzINW_w5TxxYf",
            totalComments: 1,
            upVotesBy: ["user-mQhLzINW_w5TxxYf"],
            downVotesBy: [],
          },
          {
            id: "thread-91KocEqYPRz68MhD",
            title: "Halo! Selamat datang dan silakan perkenalkan diri kamu",
            body: "<div>Bagaimana kabarmu? Semoga baik-baik saja ya. Sekali lagi saya ucapkan selamat datang semuanya!</div><div><br></div><div>Seperti yang sudah disampaikan sebelumnya, pada diskusi ini kamu bisa memperkenalkan diri kamu dan juga berkenalan dengan teman sekelas lainnya.</div><div><br></div><div>Berhubungan baik dengan teman sekelas dan instruktur merupakan bagian penting dari pembelajaran di kelas ini, karena mereka dapat membantu jika kamu mengalami kendala dalam mempelajari dan memahami materi.&nbsp;&nbsp;</div><div><br></div><div>Oleh karena itu, luangkanlah waktumu untuk saling mengenal dan mencairkan suasana. Membangun interaksi dengan siswa lain akan membuat pengalaman belajar kamu jauh lebih menyenangkan dan menarik.&nbsp;</div><div><br></div><div>Beberapa hal yang dapat kamu tulis pada perkenalan diri:</div><div><br></div><div>- Siapa kamu dan dari mana kamu berasal?</div><div>- Apa pekerjaan atau pendidikan kamu saat ini?</div><div>- Kenapa kamu mengambil pelatihan ini? Apakah mungkin karena kamu sedang mengejar perubahan dalam karir, atau lainnya?</div>",
            category: "perkenalan",
            createdAt: "2023-05-29T07:54:35.746Z",
            ownerId: "user-aROWej8yYA1sOfHN",
            totalComments: 1,
            upVotesBy: ["user-mQhLzINW_w5TxxYf"],
            downVotesBy: [],
          },
        ],
      },
    };

    // Action
    const nextState = threadsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(action.payload.threads);
  });

  it("should return new thread  when given by CREATE_THREAD action", () => {
    // Arrange
    const initialState = [
      {
        id: "thread-1",
        title: "Perang Israel Iran",
        body: "Perang ini menyebabkan jalur distribusi minyak dunia yaitu selat hormuz menjadi tertutup dan menyebabkan kenaikan harga minyak",
        category: "World News",
        createdAt: "2026-04-21T07:00:00.000Z",
        ownerId: "users-1",
        upVotesBy: [],
        downVotesBy: [],
      },
    ];

    const action = {
      type: ActionType.CREATE_THREAD,
      payload: {
        thread: {
          id: "thread-2",
          title: "Brankas Minyak Iran Dibom Israel",
          body: "Israel menyerang Brankas Minyak yang dimiliki oleh Iran pada hari ini dan akan semakin memanas.",
          category: "World News",
          createdAt: "2026-04-21T07:00:00.000Z",
          ownerId: "users-2",
          upVotesBy: [],
          downVotesBy: [],
        },
      },
    };

    // Action
    const nextState = threadsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });

  it("should return the thread  with toggled UpVote when given by UP_VOTE_THREAD action", () => {
    // Arrange
    const initialState = [
      {
        id: "thread-1",
        title: "Perang Israel Iran",
        body: "Perang ini menyebabkan jalur distribusi minyak dunia yaitu selat hormuz menjadi tertutup dan menyebabkan kenaikan harga minyak",
        category: "World News",
        createdAt: "2026-04-21T07:00:00.000Z",
        ownerId: "users-1",
        upVotesBy: [],
        downVotesBy: [],
      },
    ];

    const action = {
      type: ActionType.UP_VOTE_THREAD,
      payload: {
        threadId: "thread-1",
        userId: "users-1",
      },
    };

    // Action
    const nextState = threadsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
        downVotesBy: [],
      },
    ]);
  });

  it("should return the thread with toggled DownVote when given by DOWN_VOTE_THREAD action", () => {
    // Arrange
    const initialState = [
      {
        id: "thread-1",
        title: "Perang Israel Iran",
        body: "Perang ini menyebabkan jalur distribusi minyak dunia yaitu selat hormuz menjadi tertutup dan menyebabkan kenaikan harga minyak",
        category: "World News",
        createdAt: "2026-04-21T07:00:00.000Z",
        ownerId: "users-1",
        upVotesBy: [],
        downVotesBy: [],
      },
    ];

    const action = {
      type: ActionType.DOWN_VOTE_THREAD,
      payload: {
        threadId: "thread-1",
        userId: "users-1",
      },
    };

    // Action
    const nextState = threadsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [],
        downVotesBy: [action.payload.userId],
      },
    ]);
  });

  it("should return the thread without toggled UpVote and DownVote when given", () => {
    // Arrange
    const initialState = [
      {
        id: "thread-1",
        title: "Perang Israel Iran",
        body: "Perang ini menyebabkan jalur distribusi minyak dunia yaitu selat hormuz menjadi tertutup dan menyebabkan kenaikan harga minyak",
        category: "World News",
        createdAt: "2026-04-21T07:00:00.000Z",
        ownerId: "users-1",
        upVotesBy: ["users-1"],
        downVotesBy: [],
      },
    ];

    const action = {
      type: ActionType.NEUTRALIZE_VOTE_THREAD,
      payload: {
        threadId: "thread-1",
        userId: "users-1",
      },
    };

    // Action
    const nextState = threadsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [],
        downVotesBy: [],
      },
    ]);
  });
});
