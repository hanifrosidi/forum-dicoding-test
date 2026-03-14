import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { FormRegister } from "./FormRegister.jsx";
import userEvent from "@testing-library/user-event";

import "@testing-library/jest-dom";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

/**
 *  Testing Scenario
 *
 * - RegisterInput component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call register function when register button is clicked
 */

describe("LoginInput component test", () => {
  it("should handle name typing correctly", async () => {
    //Arrange
    render(
      <ChakraProvider value={defaultSystem}>
        <FormRegister registerProccess={() => {}} />
      </ChakraProvider>,
    );

    const nameInput = await screen.getByPlaceholderText("name");

    // Action
    await userEvent.type(nameInput, "wakidi");

    // Assert
    expect(nameInput).toHaveValue("wakidi");
  });

  it("should handle email typing correctly", async () => {
    //Arrange
    render(
      <ChakraProvider value={defaultSystem}>
        <FormRegister registerProccess={() => {}} />
      </ChakraProvider>,
    );

    const emailInput = await screen.getByPlaceholderText("email");

    // Action
    await userEvent.type(emailInput, "passwordtest");

    // Assert
    expect(emailInput).toHaveValue("passwordtest");
  });

  it("should handle password typing correctly", async () => {
    //Arrange
    render(
      <ChakraProvider value={defaultSystem}>
        <FormRegister registerProccess={() => {}} />
      </ChakraProvider>,
    );

    const passwordInput = await screen.getByPlaceholderText("password");

    // Action
    await userEvent.type(passwordInput, "passwordtest");

    // Assert
    expect(passwordInput).toHaveValue("passwordtest");
  });

  it("should call login function when login button is clicked", async () => {
    // Arrange
    const mockLogin = vi.fn();
    render(
      <ChakraProvider value={defaultSystem}>
        <FormRegister registerProccess={mockLogin} />
      </ChakraProvider>,
    );

    const nameInput = await screen.getByPlaceholderText("name");
    await userEvent.type(nameInput, "wakidi");
    const emailInput = await screen.getByPlaceholderText("email");
    await userEvent.type(emailInput, "wakidi@gmail.com");
    const passwordInput = await screen.getByPlaceholderText("password");
    await userEvent.type(passwordInput, "passwordtest");
    const loginButton = await screen.getByRole("button", { name: "Daftar" });

    // Action
    await userEvent.click(loginButton);

    // Assert
    expect(mockLogin).toBeCalledWith({
      name: "wakidi",
      email: "wakidi@gmail.com",
      password: "passwordtest",
    });
  });
});
