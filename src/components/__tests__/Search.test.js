import { render, screen } from "@testing-library/react";
import Body from "../Body";
import React from "react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resListMock.json"
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

   
// This will give me a mock function
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})



test("Should render Body component with search option", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const SearchButton = screen.getByRole("button", {name: "Search"});

    expect(SearchButton).toBeInTheDocument()
})