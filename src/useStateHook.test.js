import { renderHook, act } from "@testing-library/react-hooks";
import useStateHook from "./useStateHook";

describe("useStateHook", () => {
  const prevState = {
    value: "",
    isValid: false,
    error: ""
  };

  const newState = {
    value: "sss",
    isValid: true,
    error: "enter proper value"
  };

  test("State update", () => {
    const expected = { ...prevState, ...newState };
    const { result } = renderHook(() => useStateHook(prevState));
    act(() => {
      result.current[1](newState);
    });
    const [state] = result.current;
    expect(JSON.stringify(state)).toMatch(JSON.stringify(expected));
  });
});
