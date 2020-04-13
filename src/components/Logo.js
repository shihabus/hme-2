import React from "react";
import logo from "../assets/logo.png";
import styled from "styled-components";
import PropTypes from "prop-types";

const Image = styled.img`
  width: ${props => props.logoWidth};
  height: auto;
  align-self: center;
`;

export default function Logo({ logoWidth }) {
  return <Image src={logo} alt="healthifyme logo" logoWidth={logoWidth} />;
}

Logo.propTypes = {
  logoWidth: PropTypes.string
};

Logo.defaultProps = {
  logoWidth: "40%"
};
