import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import colors from '../util/colors';
import darken from 'polished/lib/color/darken';

const hoverStyle = css`
  background-color: ${darken(0.1, colors.primary)};
  border: 1px solid ${darken(0.1, colors.primary)};
  color: white;
`;

const strippedStyle = css`
  transition: background-color none;
  padding: 0;
  border-radius: 0;
  font-size: 1em;
  color: inherit;
  background-color: transparent;
  outline: none;
  border: none;
  display: block;
  box-shadow: none;
`;

const appearances = {
  stripped: css`
    ${strippedStyle} &:hover,
        &:focus {
      ${strippedStyle};
    }
  `,
  outline: css`
    background-color: white;
    color: ${colors.primary};

    &:hover,
    &:focus {
      background-color: ${colors.primary};
      border-color: ${colors.primary};
      color: white;
    }
  `,
  active: hoverStyle,
};

const StyledButton = styled.button`
  padding: 0.8rem 3rem;
  background-color: ${colors.primary};
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  font-weight: 100;
  border-radius: 4px;
  border: 1px solid ${colors.primary};
  box-shadow: 0 6px 6px -6px black;
  &:hover,
  &:focus {
    ${hoverStyle};
  }
  ${p => appearances[p.appearance]};
}
`;

const Button = ({ appearance, children, ...rest }) => (
  <StyledButton appearance={appearance} {...rest}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  appearance: PropTypes.string,
};

export default Button;
