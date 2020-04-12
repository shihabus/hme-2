import inputValidator from "./inputValidator";

const ref = {
  setAttribute: () => {}
};

describe("Utils", () => {
  test("Validate: email pattern invalid", () => {
    const type = "email";
    const value = "foxmedia";
    const expected = {
      isValid: false,
      errorMessage: "Please enter a valid email id"
    };

    expect(JSON.stringify(inputValidator(type, value, ref))).toMatch(
      JSON.stringify(expected)
    );
  });

  test("Validate: email pattern valid", () => {
    const type = "email";
    const value = "foxmedia@gmail.com";
    const expected = {
      isValid: true,
      errorMessage: ""
    };

    expect(JSON.stringify(inputValidator(type, value, ref))).toMatch(
      JSON.stringify(expected)
    );
  });

  test("Validate: email length and pattern invalid", () => {
    const type = "email";
    const value = "fox";
    const expected = {
      isValid: false,
      errorMessage: "Min length is 5"
    };

    expect(JSON.stringify(inputValidator(type, value, ref))).toMatch(
      JSON.stringify(expected)
    );
  });

  test("Validate: email length valid and pattern invalid", () => {
    const type = "email";
    const value = "foxmediais";
    const expected = {
      isValid: false,
      errorMessage: "Please enter a valid email id"
    };

    expect(JSON.stringify(inputValidator(type, value, ref))).toMatch(
      JSON.stringify(expected)
    );
  });

  test("Validate: password length and pattern invalid", () => {
    const type = "password";
    const value = "foxmediais";
    const expected = {
      isValid: false,
      errorMessage: "Must contain one Upper case letter"
    };

    expect(JSON.stringify(inputValidator(type, value, ref))).toMatch(
      JSON.stringify(expected)
    );
  });
  test("Validate: password length and pattern valid", () => {
    const type = "password";
    const value = "foxmEdiais";
    const expected = {
      isValid: true,
      errorMessage: ""
    };

    expect(JSON.stringify(inputValidator(type, value, ref))).toMatch(
      JSON.stringify(expected)
    );
  });
});
