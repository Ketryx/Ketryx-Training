/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Home from "@/pages/home/index";


describe('Test infusion limitations @tests:KXITM4MR52W3G0T97NRZKRMVDZHY7XX', () => {
  it('Transition state and keep status', () => {
    render(<Home />)

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument()
  })
})

describe('Test database persistance @tests:KW-4', () => {
  it('Transition state and keep status', () => {
    render(<Home />)

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument()
  })
})
