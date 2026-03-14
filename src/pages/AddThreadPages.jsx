import { ThreadInput } from "@/components/threads/ThreadInput";
import { asyncCreateThread } from "@/states/threads/action";
import { Card, Container, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

export function AddThreadPages() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncCreateThread({ title, body, category }));
    navigate("/");
  };

  return (
    <Container sx={{ mt: 2 }}>
      <Card>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color="text.primary"
          sx={{ fontWeight: "bold", ml: 2, mt: 2 }}
        >
          Buat Thread Baru
        </Typography>
        <ThreadInput addThread={onAddThread} />
      </Card>
    </Container>
  );
}
