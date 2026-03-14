import NavbarTop from "@/components/nav/NavbarTop";
import { Route, Routes, useLocation, useNavigate } from "react-router";
import { LeaderBoardPages } from "./LeaderBoardPages";
import { ThreadsPages } from "./ThreadsPages";
import { Button } from "@chakra-ui/react";
import { LuPlus } from "react-icons/lu";
import { NotFound } from "./NotFound";
import { AddThreadPages } from "./AddThreadPages";
import { DetailThreadPages } from "./DetailThreadPages";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import asyncPopulateUsersAndThreads from "@/states/shared/action";
import { Box, LinearProgress } from "@mui/material";

export function HomePages() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    threads = [],
    users = [],
    authUser,
    loading = false,
  } = useSelector((states) => states);

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch, location.pathname]);

  const addThreads = () => {
    navigate("/new");
  };

  if (loading) {
    return (
      <div className="h-screen relative overflow-auto">
        <NavbarTop authUser={authUser} />
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      </div>
    );
  } else {
    return (
      <div className="h-screen relative overflow-auto">
        <NavbarTop authUser={authUser} />

        <Routes>
          <Route
            path="/"
            element={
              <ThreadsPages
                threads={threads}
                users={users}
                authUser={authUser}
              />
            }
          />
          <Route path="/leaderboards" element={<LeaderBoardPages />} />
          <Route path="/new" element={<AddThreadPages />} />
          <Route path="/thread/:threadId" element={<DetailThreadPages />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>

        <Button
          onClick={addThreads}
          rounded={"full"}
          position={"fixed"}
          padding={"10px"}
          bottom={20}
          size={{ base: "xl", md: "2xl" }}
          right={5}
          colorPalette="teal"
          variant="solid"
        >
          <LuPlus />
        </Button>
      </div>
    );
  }
}
