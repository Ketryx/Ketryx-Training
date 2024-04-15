/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Page from "./page";

it("App Router: Works with Server Components", () => {
  render(<Page />);
  expect(screen.getByRole("heading")).toHaveTextContent("Sample App");
});

describe('Test infusion limitations @tests:KXITM4MR52W3G0T97NRZKRMVDZHY7XX', () => {
  it('Transition state and keep status', () => {
    render(<Page />)

    const heading = screen.getByRole("heading", {
      name: /Sample App/i,
    });

    expect(heading).toBeInTheDocument()
  })
})

describe('Test database persistence @tests:KW-4', () => {
  it('Transition state and keep status', () => {
    render(<Page />)

    const heading = screen.getByRole("heading", {
      name: /Sample App/i,
    });

    expect(heading).toBeInTheDocument()
  })
})
