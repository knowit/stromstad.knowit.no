import React from 'react';
import PropTypes from 'prop-types';
import Village from './Village';

const Villages = ({ villages }) => {
  if (!villages || villages.length === 0) {
    return null;
  }
  return (
    <ul>
      {villages.map(village => (
        <Village key={village.path} village={village} />
      ))}
    </ul>
  );
};

Villages.propTypes = {
  villages: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};

export default Villages;
