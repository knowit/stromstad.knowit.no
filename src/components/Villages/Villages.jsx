import React from 'react';
import PropTypes from 'prop-types';
import Village from './Village';

const Villages = ({ villages }) => {
  console.log(villages)
  if (!villages || villages.length === 0){
    return null;
  }

  return (
    <ul>
      {villages.map(villageId => <Village key={villageId} villageId={villageId} />)}
    </ul>
  );
};

Villages.propTypes = {
  village: PropTypes.object,
};

export default Villages;
