import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const Village = ({ village }) => {
  if (!village) {
    return null;
  }
  return (
    <li>
      <Link to={village.path}>{village.name}</Link>
    </li>
  );
};

Village.propTypes = {
  village: PropTypes.shape({
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default Village;
