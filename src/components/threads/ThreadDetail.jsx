import {
  Avatar,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import VoteButton from "./VoteButton";
import postedAt from "@/utils";
import parse from "html-react-parser";

export function ThreadDetail({
  id,
  title,
  body,
  owner,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  upVoteThreadDetail,
  downVoteThreadDetail,
  neturalizeVoteThreadDetail,
  authUser,
}) {
  return (
    <>
      <CardContent sx={{ pb: 0 }}>
        <Typography sx={{ fontSize: 16 }} gutterBottom color="text.secondary">
          {category}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color="text.primary"
          sx={{ fontWeight: "bold" }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.primary" component="span">
          {parse(body)}
        </Typography>
      </CardContent>
      <CardActions sx={{ ml: 1, pb: 4, pt: 2 }}>
        <VoteButton
          id={id}
          authUser={authUser}
          upVote={upVoteThreadDetail}
          downVote={downVoteThreadDetail}
          neturalizeVote={neturalizeVoteThreadDetail}
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
        />
        <Typography variant="body2" color="text.primary" component="span">
          <Stack direction="row" flex={"column"} gap={2}>
            Dibuat Oleh
            <Avatar
              alt="Avatar Icon"
              src={owner.avatar}
              sx={{ width: 20, height: 20 }}
            />
            {owner.name}
          </Stack>
        </Typography>

        <Typography
          variant="body2"
          color="text.primary"
          component="span"
          sx={{ ml: 2 }}
        >
          {postedAt(createdAt)}
        </Typography>
      </CardActions>
    </>
  );
}
