import { Box, Button, Field, Input, InputGroup } from "@chakra-ui/react";
import { PasswordInput } from "../ui/password-input";
import { LuMail } from "react-icons/lu";
import { TbLockPassword } from "react-icons/tb";
import useInput from "@/hooks/userInput";

export function FormLogin({ loginProccess }) {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        loginProccess({ email, password });
      }}
    >
      <Box my="5">
        <Field.Root className="my-5">
          <Field.Label>Email</Field.Label>
          <InputGroup startElement={<LuMail />}>
            <Input placeholder="Email" value={email} onChange={onEmailChange} />
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
        Masuk
      </Button>
    </form>
  );
}
