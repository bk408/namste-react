import {render, screen} from "@testing-library/react"
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom";
import React from "react";


test("Should render Restaurant card component with Props Data", () => {

    render(<RestaurantCard resData={MOCK_DATA} />)

    const name = screen.getByText("KFC");

    expect(name).toBeInTheDocument()
})

test("Should render avgRating of Restaurant card", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const avgRating = screen.getByText("4.1");

  expect(avgRating).toBeInTheDocument();
});

