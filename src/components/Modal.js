import React from "react";
import styled from "styled-components";
import { BaseModal } from "./BaseOverlay";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  height: 100vh;
  width: 100vw;
  z-index: 999;
  color: white;
`;

export default function Modal(props) {
  return (
    <BaseModal>
      <Wrapper>{props.children}</Wrapper>
    </BaseModal>
  );
}
