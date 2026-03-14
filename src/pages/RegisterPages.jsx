import { FormRegister } from "@/components/register/FormRegister";
import { asyncPreloadProcess } from "@/states/isPreload/action";
import { asyncRegisterUser } from "@/states/users/action";
import {
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Separator,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

export function RegisterPages() {
  const dispatch = useDispatch();
  const { authUser } = useSelector((states) => states);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncPreloadProcess());

    if (authUser) {
      navigate("/", { replace: true });
    }
  }, [dispatch, authUser, navigate]);

  const registerProccess = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate("/login");
    alert("User berhasil teregistrasi");
  };

  if (authUser) {
    navigate("/");
  }

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
        Daftar
      </Heading>

      <FormRegister registerProccess={registerProccess} />
      <Separator size="lg" my="7" />
      <Flex gap={"2"}>
        <Heading size={"sm"}>Sudah Punya Akun ?</Heading>
        <Link variant={"underline"} href="/login" colorPalette={"blue"}>
          Masuk Sekarang
        </Link>
      </Flex>
    </Container>
  );
}
