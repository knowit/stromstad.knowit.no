import React from 'react';
import PropTypes from 'prop-types';
import Village from './Village';

const Villages = ({ villages }) => {
  if (!villages || villages.length === 0) {
    return null;
  }
  return (
    <ul>
      {villages.map(villageId => (
        <Village key={villageId} villageId={villageId} />
      ))}
    </ul>
  );
};

Villages.propTypes = {
  village: PropTypes.arrayOf(PropTypes.string),
};

export default Villages;
