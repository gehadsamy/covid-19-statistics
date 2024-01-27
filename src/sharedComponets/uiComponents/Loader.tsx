import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
`;

const StyledLoader = styled.div`
  border: 10px solid #111827;
  border-top: 10px solid #14b8a6;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <StyledLoader />
    </LoaderContainer>
  );
};

export default Loader;
