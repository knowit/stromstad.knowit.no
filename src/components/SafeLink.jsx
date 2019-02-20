import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { css } from '@emotion/core';
import colors from '../util/colors';

const linkStyle = (hoverColor = colors.primary) => css`
  padding: 0.8rem 3rem;
  background-color: transparent;
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  border: 2px solid white;

  &:hover,
  &:focus {
    color: ${hoverColor};
    background-color: white;
  }
`;

const SafeLink = ({ to, children, hoverColor, ...rest }) => {
  if (to) {
    return (
      <Link to={to} css={linkStyle(hoverColor)} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a css={linkStyle} {...rest}>
      {children}
    </a>
  );
};

SafeLink.propTypes = {
  to: PropTypes.string,
  hoverColor: PropTypes.string,
};

export default SafeLink;
