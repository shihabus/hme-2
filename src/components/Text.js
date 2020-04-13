import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const TextStyle1 = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: #222;
  padding: 1rem 0px 0.5rem 0px;
`;

export const Text1 = ({ txt }) => {
  return <TextStyle1>{txt}</TextStyle1>;
};

Text1.propTypes = {
  txt: PropTypes.string
};

const TextStyle2 = styled(TextStyle1)`
  font-size: 1rem;
  padding: 0.5rem 0px 1rem 0px;
`;

export const Text2 = ({ txt }) => {
  return <TextStyle2>{txt}</TextStyle2>;
};

Text2.propTypes = {
  txt: PropTypes.string
};
