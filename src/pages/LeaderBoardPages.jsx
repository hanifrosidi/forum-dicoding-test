import { LeaderBoardItem } from "@/components/leaderboards/LeaderBoardItem";
import { asyncPopulateLeaderboards } from "@/states/leaderboards/action";
// import { setLoading } from "@/states/loading/action";
import {
  Box,
  Card,
  Container,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export function LeaderBoardPages() {
  const dispatch = useDispatch();
  const { leaderboards = [], loading = false } = useSelector(
    (states) => states,
  );

  console.log(loading);

  useEffect(() => {
    // dispatch(setLoading(true));
    dispatch(asyncPopulateLeaderboards());
    // dispatch(setLoading(false));
  }, [dispatch]);

  if (loading) {
    return (
      <Container
        sx={{
          marginY: "10px",
        }}
      >
        <Card>
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            color="text.primary"
            sx={{ fontWeight: "bold", ml: 2, mt: 2 }}
          >
            Leaderboards
          </Typography>
        </Card>
      </Container>
    );
  } else {
    return (
      <Container
        sx={{
          marginY: "10px",
        }}
      >
        <Card>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            color="text.primary"
            sx={{ fontWeight: "bold", ml: 2, mt: 2 }}
          >
            Leaderboards
          </Typography>
          <Grid container spacing={12}>
            <Grid size={10}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="text.primary"
                sx={{
                  fontSize: 20,
                  fontWeight: "bold ",
                  ml: 2,
                  mt: 2,
                }}
              >
                10 Pengguna Teratas
              </Typography>
            </Grid>
            <Grid size={2}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="text.primary"
                sx={{ fontSize: 20, fontWeight: "bold ", mt: 2, ml: 4 }}
              >
                Skor
              </Typography>
            </Grid>
          </Grid>
          {leaderboards.map(({ user, score }) => (
            <LeaderBoardItem key={user.id} user={user} score={score} />
          ))}
        </Card>
      </Container>
    );
  }
}
