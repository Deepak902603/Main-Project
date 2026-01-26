import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import Counter from "./components/Counter";

describe("Counter Component Tests", () => {

  test("renders initial count", () => {
    render(<Counter />);

    const countText = screen.getByText(/Count: 0/i);
    expect(countText).toBeInTheDocument();
  });

  test("button click increments count", () => {
    render(<Counter />);

    const button = screen.getByRole("button", { name: /increment/i });
    fireEvent.click(button);

    const updatedCount = screen.getByText(/Count: 1/i);
    expect(updatedCount).toBeInTheDocument();
  });

});
