/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Page from "./page";

it("Test feedback form @tests:KXITM5PEB1T14C087V8WSB5BTEPAQDE", () => {
  render(<Page />);
  expect(screen.getByRole("heading")).toHaveTextContent("Provider App");
});
