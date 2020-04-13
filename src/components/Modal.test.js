import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Modal from "./Modal";

test("Modal snap shot", () => {
  const { container } = render(<Modal />);
  expect(container.firstChild).toMatchSnapshot();
});
