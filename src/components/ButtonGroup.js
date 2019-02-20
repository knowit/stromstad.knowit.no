import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledButtonGroup = styled.div`
  & > * {
    margin-right: 0.4rem;
  }
`;

const ButtonGroup = ({ children, ...rest }) => (
  <StyledButtonGroup {...rest}>{children}</StyledButtonGroup>
);

ButtonGroup.propTypes = {
  css: PropTypes.string,
};

export default ButtonGroup;
