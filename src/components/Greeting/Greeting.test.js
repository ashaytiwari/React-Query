import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Component test suite", () => {
  test("check hello world is available in Greeting Component dom", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ...nothing to do right now

    // Assert
    const helloWorldElement = screen.getByText("Hello World!", { exact: true });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("render 'dummy text' to be available in the Greeting Component dom", () => {
    render(<Greeting />);

    const dummyTextElement = screen.getByText("Dummy text", { exact: false });
    expect(dummyTextElement).toBeInTheDocument();
  });

  test("render 'Changed!' to be available in the Greeting Component dom if button is clicked", () => {
    //   Arrange
    render(<Greeting />);

    //   Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const changedTextElement = screen.getByText("Changed!");
    expect(changedTextElement).toBeInTheDocument();
  });

  test("check 'dummy text' will be shown only if button is not clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const dummyTextElement = screen.queryByText("Dummy text", { exact: false });
    expect(dummyTextElement).toBeNull();
  });
});
