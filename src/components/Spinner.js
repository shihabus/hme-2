import React from "react";
import PropTypes from "prop-types";
import styled, {keyframes} from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerLoaderWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.wrapperPadding};
`;

const Spinner = styled.div`
  border: ${(props) => `${props.ringBorderWidth} solid ${props.ringColor}`};
  border-top: ${(props) => `${props.ringBorderWidth} solid ${props.sectorColor}`};
  border-radius: 50%;
  width: ${(props) => props.dimension};
  height: ${(props) => props.dimension};
  animation: ${spin} 2s linear infinite;
`;

const LoadingText = styled.p`
  padding-left: 0.5rem;
  font-size: 1rem;
`;

const SpinnerLoader = (props) => (
  <SpinnerLoaderWrapper {...props}>
    <Spinner {...props} />
    <LoadingText>{props.loadingText}</LoadingText>
  </SpinnerLoaderWrapper>
);

SpinnerLoader.propTypes = {
  wrapperPadding: PropTypes.string,
  dimension: PropTypes.string,
  ringBorderWidth: PropTypes.string,
  sectorColor: PropTypes.string,
  ringColor: PropTypes.string,
  loadingText: PropTypes.string,
};

SpinnerLoader.defaultProps = {
  wrapperPadding: "10% 0",
  dimension: "3rem",
  ringBorderWidth: "0.25rem",
  sectorColor: "#e82b28",
  ringColor: "white",
  loadingText: "",
};

export default SpinnerLoader;
