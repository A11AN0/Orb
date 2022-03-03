import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";

describe("Login Form Tests", () => {
  it("The form should render the corret fields", () => {
    //1. Arrange
    render(<LoginForm />);

    //2. Act
    const emailInput = screen.getByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Password");

    //3. Assert
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it("The form should detect when a field is not filled correctly", () => {
    //1. Arrange
    render(<LoginForm />);

    //2.Act
    const emailInput = screen.getByPlaceholderText("Email");
    userEvent.type(emailInput, "memes");
    const passwordInput = screen.getByPlaceholderText("Password");
    userEvent.click(screen.getByRole("button", { name: /Login/i }));

    //3. Assert
    const emailAlert = screen.queryByText(/Please enter an email address/i);
    expect(emailAlert).toBeTruthy();
    const passwordAlert = screen.queryByText(/Please enter a valid password/i);
    expect(passwordAlert).toBeTruthy();
  });
});
