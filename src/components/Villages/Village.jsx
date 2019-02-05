import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Link from 'gatsby-link';
import viewmodel from '../../json';


const Village = ({ villageId }) => {
    const village = viewmodel.villages.find(vill => villageId === vill.id);
    console.log(villageId, viewmodel, village)
  if (!village){
    return null;
  }

  return (
    <li>
      <Link to={village.path}>{village.name}</Link>
    </li>
  );
};

Village.propTypes = {
  village: PropTypes.object,
};

export default Village;
