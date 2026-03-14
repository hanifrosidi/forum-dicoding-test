import { ThreadItem } from "./ThreadItem";

export function ThreadList({ threads, upVote, downVote, neturalizeVote }) {
  return (
    <>
      {threads.map((thread) => (
        <ThreadItem
          key={thread.id}
          {...thread}
          upVote={upVote}
          downVote={downVote}
          neturalizeVote={neturalizeVote}
        />
      ))}
    </>
  );
}
