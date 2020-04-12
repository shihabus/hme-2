import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import App from "./App";
import axiosMock from "axios";

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
  // fireEvent.submit(form);

  // await waitForElement(() => {
  //   expect(getByLabelText("success")).toBeTruthy();
  // });

  // expect(mockSubmit).toBeCalledTimes(1);
  // expect(email.value).toBe("");
  // expect(password.value).toBe("");

  // expect(submitBtn.disabled).toBeTruthy();
});
