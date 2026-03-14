import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { FormLogin } from "./FormLogin.jsx";
import userEvent from "@testing-library/user-event";

import "@testing-library/jest-dom";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

/**
 *  Testing Scenario
 *
 * - LoginInput component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

describe("LoginInput component test", () => {
  it("should handle email typing correctly", async () => {
    //Arrange
    render(
      <ChakraProvider value={defaultSystem}>
        <FormLogin loginProccess={() => {}} />
      </ChakraProvider>,
    );

    const emailInput = await screen.getByPlaceholderText("Email");

    // Action
    await userEvent.type(emailInput, "emailTest");

    // Assert
    expect(emailInput).toHaveValue("emailTest");
  });

  it("should handle password typing correctly", async () => {
    //Arrange
    render(
      <ChakraProvider value={defaultSystem}>
        <FormLogin loginProccess={() => {}} />
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
        <FormLogin loginProccess={mockLogin} />
      </ChakraProvider>,
    );

    const emailInput = await screen.getByPlaceholderText("Email");
    await userEvent.type(emailInput, "emailtest");
    const passwordInput = await screen.getByPlaceholderText("password");
    await userEvent.type(passwordInput, "passwordtest");
    const loginButton = await screen.getByRole("button", { name: "Masuk" });

    // Action
    await userEvent.click(loginButton);

    // Assert
    expect(mockLogin).toBeCalledWith({
      email: "emailtest",
      password: "passwordtest",
    });
  });
});
