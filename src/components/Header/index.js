import React from 'react';
import SafeLink from '../SafeLink';

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}>
      <h1 style={{ margin: 0 }}>
        <SafeLink
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}>
          Gatsby
        </SafeLink>
      </h1>
    </div>
  </div>
);

export default Header;
