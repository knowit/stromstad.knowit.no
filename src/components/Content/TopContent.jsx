import React from 'react';
import styled from '@emotion/styled';
import colors from '../../util/colors';

const StyledTopContent = styled.div`
  background-color: ${p => p.backgroundColor || colors.primary};
  color: white;
  text-align: center;
  padding: 2rem 0;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TopContent = ({ children, ...rest }) => (
  <StyledTopContent {...rest}>{children}</StyledTopContent>
);

export default TopContent;
