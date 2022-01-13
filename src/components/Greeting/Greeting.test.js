import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("check hello world is available in Greeting Component dom", () => {
  // Arrange
  render(<Greeting />);

  // Act
  // ...nothing to do right now

  // Assert
  const helloWorldElement = screen.getByText("Hello World!", { exact: true });
  expect(helloWorldElement).toBeInTheDocument();
});
