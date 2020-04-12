const inputAttributes = inputType => {
  let attrs = {};
  let _inputType = String(inputType)
    .trim()
    .toLowerCase();

  if (_inputType === "email") {
    attrs = {
      required: true,
      minLength: 5,
      placeholder: "Enter your Email",
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      patternText: "Please enter a valid email id"
    };
  }

  if (_inputType === "password") {
    attrs = {
      minLength: 6,
      pattern: /(?=.*[A-Z])/g,
      placeholder: "Enter your Password",
      patternText: "Must contain one Upper case letter"
    };
  }

  return attrs;
};

export default inputAttributes;
