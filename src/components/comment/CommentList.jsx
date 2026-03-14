import { CommentItem } from "./CommentItem";

export function CommentList({
  comments,
  authUser,
  upVoteComment,
  downVoteComment,
  neturalizeVoteComment,
}) {
  return (
    <>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          {...comment}
          authUser={authUser}
          upVote={upVoteComment}
          downVote={downVoteComment}
          neturalizeVote={neturalizeVoteComment}
        />
      ))}
    </>
  );
}
