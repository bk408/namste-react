import React from "react"
import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"


describe('Contact us page Test case', () => {

    test("Should load the heading in contact us component", () => {
      render(<Contact />);

      const heading = screen.getByRole("heading");

      expect(heading).toBeInTheDocument();
    });

    test("Should load the button in contact component", () => {
      render(<Contact />);

      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
    });
})



