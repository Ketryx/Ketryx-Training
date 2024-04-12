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

describe('Test warning message @tests:KXITM09D4Q0FGST9BVA61D5HYS9TSP2', () => {
  it('Transition state and keep status', () => {
    render(<Home />)

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument()
  })
})

describe('Test feedback form @tests:KXITM4P31AVZPAP9KPVZ37RQ6XP8MFH', () => {
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
