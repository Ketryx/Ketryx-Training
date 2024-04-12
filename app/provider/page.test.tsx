/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Page from "./page";

it("Test feedback form @tests:KXITM4P31AVZPAP9KPVZ37RQ6XP8MFH", () => {
  render(<Page />);
  expect(screen.getByRole("heading")).toHaveTextContent("Provider App");
});
