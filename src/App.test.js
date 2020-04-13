import React from "react";
import { render, fireEvent, waitForElement, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import axiosMock from "axios";
import endpoint from "./endpoint";

jest.mock("axios");

test("Login form", async () => {
  const mockSubmit = jest.fn();
  const { getByText, getByLabelText } = render(<App submit={mockSubmit} />);

  const form = getByLabelText("form");
  const email = getByLabelText("email");
  const password = getByLabelText("password");
  const submitBtn = getByText(/login/i);

  const inputEmailVal = "fedex@fedex.io";
  fireEvent.change(email, { target: { value: inputEmailVal } });
  expect(email.value).toBe(inputEmailVal);

  const inputPasswordVal = "fakeUser1";
  fireEvent.change(password, { target: { value: inputPasswordVal } });
  expect(password.value).toBe(inputPasswordVal);

  expect(submitBtn.disabled).toBeFalsy();

  axiosMock.get.mockResolvedValueOnce({
    data: {
      result: "success"
    }
  });

  expect(submitBtn).toBeTruthy();
  fireEvent.submit(form);

  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toHaveBeenCalledWith(endpoint);
});

test("App snapshot", () => {
  const { container } = render(<App />);
  expect(container.firstChild).toMatchSnapshot();
});
