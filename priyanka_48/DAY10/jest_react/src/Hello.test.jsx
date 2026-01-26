import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hello from "./Hello";

test("renders hello text on screen", () => {
  render(<Hello />);
  expect(screen.getByText("Hello React Testing")).toBeInTheDocument();
});
