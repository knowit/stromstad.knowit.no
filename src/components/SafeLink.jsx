import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { css } from '@emotion/core';

const linkStyle = css`
  text-transform: uppercase;
  color: white;
  font-size: 1.2rem;
  text-transform: uppercase;

  &:hover,
  &:focus,
  &:visited {
    color: white;
  }
`;

const SafeLink = ({ to, children, ...rest }) => {
  if (to) {
    return (
      <Link to={to} css={linkStyle} {...rest}>
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
};

export default SafeLink;
