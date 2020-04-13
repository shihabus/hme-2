import React, { useRef, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import useStateHook from "./useStateHook";
import validator from "./utils/inputValidator";
import endpoint from "./endpoint";
import initialState from "./initialState";
import { Logo, Text1, Text2, Toast, Modal, SpinnerLoader } from "./components";
import { HEADER, SUB_HEADER } from "./constants/string";
import { LOADING, FAILED, SUCCESS } from "./loginFetchStatus";
import {
  Wrapper,
  Form,
  SubmitButton,
  InputWrapper,
  InputField,
  ErrorText
} from "./styledComponents";

function App({ submit }) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [loginStatus, setLoginStatus] = useState(null);

  const [state, setState] = useStateHook(initialState);

  const {
    email,
    password,
    emailError,
    passwordError,
    emailIsValid,
    passwordIsValid
  } = state;

  const handleChange = (type, ref, event) => {
    event.preventDefault();
    const value = event.currentTarget.value;
    const { isValid, errorMessage } = validator(type, value, ref.current);

    setState({
      [`${type}`]: value,
      [`${type}Error`]: errorMessage,
      [`${type}IsValid`]: isValid
    });
  };

  const clear = () => setState(initialState);

  const handleSubmit = async () => {
    try {
      setLoginStatus(LOADING);
      const response = await axios.get(endpoint);
      const data = response.data;
      clear();
      setLoginStatus(SUCCESS);
    } catch (error) {
      setLoginStatus(FAILED);
    }
  };

  return (
    <Wrapper>
      <Form
        aria-label="form"
        onSubmit={e => {
          e.preventDefault();
          submit();
          handleSubmit();
        }}
      >
        <Logo />
        <Text1 txt={HEADER} />
        <Text2 txt={SUB_HEADER} />
        <InputWrapper>
          <InputField
            ref={emailRef}
            type="email"
            aria-label="email"
            value={email}
            onChange={e => handleChange("email", emailRef, e)}
          />
          {!emailIsValid && <ErrorText>{emailError}</ErrorText>}
        </InputWrapper>
        <InputWrapper>
          <InputField
            ref={passwordRef}
            type="password"
            aria-label="password"
            value={password}
            onChange={e => handleChange("password", passwordRef, e)}
          />
          {!passwordIsValid && <ErrorText>{passwordError}</ErrorText>}
        </InputWrapper>
        <SubmitButton
          type="submit"
          value="Login"
          disabled={!emailIsValid || !passwordIsValid}
        />
      </Form>
      {loginStatus === LOADING && (
        <Modal aria-label="loading">
          <SpinnerLoader loadingText="Loading..." />
        </Modal>
      )}
      {loginStatus === SUCCESS && (
        <Toast
          aria-label="success"
          type="success"
          message="Login was successful."
        />
      )}
      {loginStatus === FAILED && (
        <Toast aria-label="failed" type="error" message="Login failed." />
      )}
    </Wrapper>
  );
}

export default App;

App.defaultProps = {
  submit: () => {}
};

App.propTypes = {
  submit: PropTypes.func
};
