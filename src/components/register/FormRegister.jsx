import { Box, Button, Field, Input, InputGroup } from "@chakra-ui/react";
import { PasswordInput } from "../ui/password-input";
import { LuMailOpen, LuUser } from "react-icons/lu";
import { TbLockPassword } from "react-icons/tb";
import useInput from "@/hooks/userInput";

export function FormRegister({ registerProccess }) {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        registerProccess({ name, email, password });
      }}
    >
      <Box my="5">
        <Field.Root className="my-5">
          <Field.Label>Nama</Field.Label>
          <InputGroup startElement={<LuUser />}>
            <Input value={name} placeholder="name" onChange={onNameChange} />
          </InputGroup>
        </Field.Root>
      </Box>

      <Box my="5">
        <Field.Root className="my-5">
          <Field.Label>Email</Field.Label>
          <InputGroup startElement={<LuMailOpen />}>
            <Input placeholder="email" value={email} onChange={onEmailChange} />
          </InputGroup>
        </Field.Root>
      </Box>

      <Box my="5">
        <Field.Root>
          <Field.Label>Password</Field.Label>
          <InputGroup startElement={<TbLockPassword />}>
            <PasswordInput
              password={password}
              changePassword={onPasswordChange}
              className="mt-10"
            />
          </InputGroup>
        </Field.Root>
      </Box>

      <Button type="submit" width="full" background="#">
        Daftar
      </Button>
    </form>
  );
}
