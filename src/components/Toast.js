import React, { useState, useEffect } from "react";
import { BaseModal } from "./BaseOverlay";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 999;
  color: white;
`;

const Notification = styled.div`
  margin: 2rem;
  background: ${props => (props.type === "success" ? "green" : "red")};
  padding: 0.5rem 1.5rem;
  border-radius: 10px;
`;

export default function Toast(props) {
  const [visibility, setVisibility] = useState(true);

  const { type, message } = props;

  useEffect(() => {
    let id = setTimeout(() => {
      setVisibility(false);
    }, 4000);
    return () => {
      clearTimeout(id);
    };
  }, []);

  return (
    <BaseModal {...props}>
      {visibility && message && (
        <Wrapper>
          <Notification type={type}>{message}</Notification>
        </Wrapper>
      )}
    </BaseModal>
  );
}

Toast.defaultProps = {
  message: "",
  type: "success"
};
