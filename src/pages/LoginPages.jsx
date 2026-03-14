import * as React from "react";
import {
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Separator,
} from "@chakra-ui/react";
import { FormLogin } from "@/components/login/FormLogin";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { asyncSetAuthUser } from "@/states/authUser/action";
import { useEffect } from "react";
import { asyncPreloadProcess } from "@/states/isPreload/action";

export function LoginPages() {
  const navigate = useNavigate();
  const { authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  const loginProccess = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
    navigate("/");
  };

  useEffect(() => {
    dispatch(asyncPreloadProcess());

    if (authUser) {
      navigate("/", { replace: true });
    }
  }, [dispatch, authUser, navigate]);

  return (
    <Container
      maxWidth="xl"
      my="5"
      mx="auto"
      p="10"
      overflow="hidden"
      boxSizing="border-box"
      boxShadow="md"
      className=" outline-3 outline-gray-400 rounded-sm "
    >
      <Flex gap="2" w="full">
        <Image
          src="/logo.png"
          boxSize="100px"
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

      <Heading my="5" fontFamily="serif" color="#0a0d14" size="2xl">
        Masuk
      </Heading>

      <FormLogin loginProccess={loginProccess} />
      <Separator size="lg" my="7" />
      <Flex gap={"2"}>
        <Heading size={"sm"}>Belum Punya Akun ?</Heading>
        <Link variant={"underline"} href="/register" colorPalette={"blue"}>
          Daftar Sekarang
        </Link>
      </Flex>
    </Container>
  );
}
