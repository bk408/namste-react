import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import React from "react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should render Header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const LoginButton = screen.getByRole("button", { Name: "Login" });

  expect(LoginButton).toBeInTheDocument();
});

test("Should render Header component with a cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItem = screen.getByText(/Cart/);
  expect(cartItem).toBeInTheDocument();
});

test("Should render Header component with cart items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart(0 items)");
  expect(cartItems).toBeInTheDocument();
});

test("Should change Login button to Logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const LoginButton = screen.getByRole("button", { Name: "Login" });

  fireEvent.click(LoginButton);

  const LogoutButton = screen.getByRole("button", { Name: "Logout" });

  expect(LogoutButton).toBeInTheDocument();
});
