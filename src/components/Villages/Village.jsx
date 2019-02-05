import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import viewmodel from '../../json';

const Village = ({ villageId }) => {
  const village = viewmodel.villages.find(vill => villageId === vill.id);
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
  villageId: PropTypes.string,
};

export default Village;
