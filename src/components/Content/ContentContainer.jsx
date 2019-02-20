import React from 'react';
import styled from '@emotion/styled';
import mediaQueries from '../../util/mediaQueries';

const StyledContentContainer = styled.div`
  padding: 0 5%;
  background-color: ${p => p.backgroundColor};
  @media (${mediaQueries.xxlarge}) {
    padding: 0 20%;
  }

  @media (${mediaQueries.medium}) {
    padding: 0;
  }
`;

const ContentContainer = ({ children, ...rest }) => (
  <StyledContentContainer {...rest}>{children}</StyledContentContainer>
);

export default ContentContainer;
