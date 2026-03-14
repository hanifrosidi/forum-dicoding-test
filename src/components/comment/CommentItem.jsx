import postedAt from "@/utils";
import {
  Avatar,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import parse from "html-react-parser";
import VoteButton from "../threads/VoteButton";

export function CommentItem({
  id,
  content,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  upVote,
  downVote,
  neturalizeVote,
  authUser,
}) {
  return (
    <>
      <CardContent sx={{ pb: 0 }}>
        <Grid container spacing={2}>
          <Grid size={10}>
            <Stack direction="row" spacing={1}>
              <Avatar
                alt="Avatar Icon"
                src={owner.avatar}
                sx={{ width: 20, height: 20 }}
              />
              <Typography
                variant="body2"
                component="div"
                color="text.primary"
                sx={{ fontWeight: "bold" }}
              >
                {owner.name}
              </Typography>
            </Stack>
          </Grid>
          <Grid size={2}>
            <Typography
              variant="body2"
              color="text.primary"
              component="span"
              sx={{ ml: 10 }}
            >
              {postedAt(createdAt)}
            </Typography>
          </Grid>
        </Grid>
        <Typography
          gutterBottom
          variant="body2"
          component="div"
          color="text.primary"
          sx={{ fontWeight: "medium", mt: 1 }}
        >
          {parse(content)}
        </Typography>
      </CardContent>
      <CardActions sx={{ ml: 1, pb: 4, pt: 2 }}>
        <VoteButton
          id={id}
          authUser={authUser}
          upVote={upVote}
          downVote={downVote}
          neturalizeVote={neturalizeVote}
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
        />
      </CardActions>
      <Divider />
    </>
  );
}
