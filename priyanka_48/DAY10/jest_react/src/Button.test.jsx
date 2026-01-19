import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

test("shows message after button click", () => {
  render(<Button />);

  const btn = screen.getByText("Click Me");
  fireEvent.click(btn);

  expect(screen.getByText("Button Clicked!")).toBeInTheDocument();
});
