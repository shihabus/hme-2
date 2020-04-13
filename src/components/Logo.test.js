import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Logo from "./Logo";

test("Logo snapshot", () => {
  const { container } = render(<Logo />);
  expect(container.firstChild).toMatchSnapshot();
});
