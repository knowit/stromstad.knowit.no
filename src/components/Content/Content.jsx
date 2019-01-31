import React from 'react';
import styled from '@emotion/styled';

const StyledContent = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column;
  background-color: ${p => p.backgroundColor || 'white'};
`;

const Content = ({ children, ...rest }) => (
  <StyledContent {...rest}>{children}</StyledContent>
);

export default Content;
