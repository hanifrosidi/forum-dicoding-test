import { asyncUnsetAuthUser } from "@/states/authUser/action";
import {
  Avatar,
  Button,
  Container,
  Flex,
  Heading,
  Image,
} from "@chakra-ui/react";
import { Skeleton } from "@mui/material";
import * as React from "react";
import { useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router";

export default function NavbarTop({ authUser }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(asyncUnsetAuthUser());
    navigate("/login");
  };

  return (
    <Container width={"full"} padding={"3"} fluid bgColor={"#009d88"}>
      <Flex margin={"0"}>
        <Flex gap="2" w="1/2">
          <Image
            src="/logo.png"
            width={100}
            objectFit="contain"
            flexShrink={0}
          />

          <Heading
            fontWeight="bold"
            fontStyle="italic"
            fontFamily="serif"
            color="#283c4f"
            alignSelf={"center"}
            size="md"
          >
            Forum Threads
          </Heading>
        </Flex>

        <Flex gap="2" justifyContent={"end"} w="1/2">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              alignSelf: "center",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            Threads
          </Link>
          <Link
            to="/leaderboards"
            style={{
              textDecoration: "none",
              alignSelf: "center",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            Leaderboards
          </Link>
          {authUser ? (
            <Avatar.Root>
              <Avatar.Fallback name="Segun Adebayo" />
              <Avatar.Image src={authUser.avatar} />
            </Avatar.Root>
          ) : (
            <Skeleton variant="circular" width={40} height={40} />
          )}
          <Button colorPalette={"orange"} onClick={logout}>
            Logout
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
}
