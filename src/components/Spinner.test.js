import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Spinner from "./Spinner";

test("Spinner snapshot", () => {
  const { container } = render(<Spinner />);
  expect(container.firstChild).toMatchSnapshot();
});
