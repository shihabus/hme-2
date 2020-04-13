import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Toast from "./Toast";

test("Toast snapshot", () => {
  const { container } = render(<Toast />);
  expect(container.firstChild).toMatchSnapshot();
});
