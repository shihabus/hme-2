import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Form = styled.form`
  position: relative;
  width: 45%;
  max-width: 400px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  text-align: center;
  border-radius: 10px;
  padding: 2.5% 2%;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.15);
`;

const SubmitButton = styled.input.attrs({ type: "submit" })`
  background: #e82b28;
  padding: 0.75rem 0.5rem;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  border: none;
  cursor: pointer;

  :disabled {
    background: #e1e1e1;
    cursor: no-drop;
  }
`;

const InputWrapper = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
  height: 4rem;
`;

const InputField = styled.input`
  padding: 5px 10px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1.5rem;

  ::placeholder {
    color: #e1e1e1;
    font-size: 1.25rem;
  }

  :invalid {
    border: 1px solid #c12e2e;
  }

  :focus {
    border: 1px solid blue;
  }
`;

const ErrorText = styled.p`
  margin-top: 0.25rem;
  font-size: 0.975rem;
  color: #c12e2e;
`;

export { Wrapper, Form, SubmitButton, InputWrapper, InputField, ErrorText };
