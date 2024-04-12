/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Page from "./page";

it("Test warning message @tests:KXITM09D4Q0FGST9BVA61D5HYS9TSP2", () => {
  render(<Page />);
  expect(screen.getByRole("heading")).toHaveTextContent("Patient App");
});
