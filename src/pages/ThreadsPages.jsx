import { ThreadList } from "@/components/threads/ThreadsList";
import {
  asyncDownVoteThread,
  asyncNeturalizeVoteThread,
  asyncUpVoteThread,
} from "@/states/threads/action";
import { Container } from "@chakra-ui/react";
import { Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";

export function ThreadsPages({ threads, users, authUser }) {
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();

  const categories = new Set(threads.map((thread) => thread.category));

  const onUpVoteThread = (id) => {
    dispatch(asyncUpVoteThread(id));
  };

  const onDownVoteThread = (id) => {
    dispatch(asyncDownVoteThread(id));
  };

  const onNeturalizeVoteThread = (id) => {
    dispatch(asyncNeturalizeVoteThread(id));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    threadOwner: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <Container my={10}>
      {Array.from(categories).map((category) => {
        return (
          <Button
            key={category}
            variant="outlined"
            onClick={() => setFilter(category)}
            sx={{ mr: 2, mb: 2 }}
          >
            {`#${category}`}
          </Button>
        );
      })}

      <ThreadList
        threads={
          filter
            ? threadList.filter((thread) => thread.category === filter)
            : threadList
        }
        upVote={onUpVoteThread}
        downVote={onDownVoteThread}
        neturalizeVote={onNeturalizeVoteThread}
      />
    </Container>
  );
}
