import { Card, CardActions, CardContent, Typography } from "@mui/material";
import parse from "html-react-parser";
import { useNavigate } from "react-router";
import postedAt from "./../../utils";
import VoteButton from "./VoteButton";
import CommentIcon from "@mui/icons-material/Comment";
import PropTypes from "prop-types";

function ThreadItem({
  id,
  title,
  body,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  totalComments,
  upVote,
  downVote,
  neturalizeVote,
  threadOwner,
  authUser,
}) {
  const navigate = useNavigate();

  const onThreadClick = () => {
    navigate(`/thread/${id}`);
  };

  return (
    <Card sx={{ mb: 3 }}>
      <CardContent onClick={onThreadClick} sx={{ cursor: "pointer" }}>
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
      <CardActions sx={{ ml: 1 }}>
        <VoteButton
          id={id}
          authUser={authUser}
          upVote={upVote}
          downVote={downVote}
          neturalizeVote={neturalizeVote}
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
        />
        <CommentIcon fontSize="small" />
        <Typography
          variant="body2"
          color="text.primary"
          component="span"
          sx={{ ml: 0.5 }}
        >
          {totalComments}
        </Typography>
        <Typography
          variant="body2"
          color="text.primary"
          component="span"
          sx={{ ml: 0.5 }}
        >
          {postedAt(createdAt)}
        </Typography>
        <Typography
          variant="body2"
          color="text.primary"
          component="span"
          sx={{ ml: 0.5 }}
        >
          Dibuat Oleh {threadOwner.name}
        </Typography>
      </CardActions>
    </Card>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  threadOwner: PropTypes.shape(userShape).isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
  authUser: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neturalizeVote: PropTypes.func.isRequired,
};

export { ThreadItem };
