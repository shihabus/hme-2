import inputAttrs from "./inputAttrs";

describe("Utils", () => {
  test("Input Attributes : email", () => {
    let type = "email";
    let expected = {
      required: true,
      minLength: 5,
      placeholder: "Enter your Email",
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      patternText: "Please enter a valid email id"
    };
    expect(JSON.stringify(inputAttrs(type))).toMatch(JSON.stringify(expected));
  });

  test("Input Attributes : password", () => {
    let type = "password";
    let expected = {
      minLength: 6,
      pattern: /(?=.*[A-Z])/g,
      placeholder: "Enter your Password",
      patternText: "Must contain one Upper case letter"
    };
    expect(JSON.stringify(inputAttrs(type))).toMatch(JSON.stringify(expected));
  });

  test("Input Attributes : text", () => {
    let type = "text";
    let expected = {};
    expect(JSON.stringify(inputAttrs(type))).toMatch(JSON.stringify(expected));
  });
});
