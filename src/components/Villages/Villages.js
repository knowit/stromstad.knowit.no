import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Village from './Village';
import mediaQueries from '../../util/mediaQueries';

const StyledVillages = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (${mediaQueries.medium}) {
    flex-direction: row;
    & > * {
      margin: 0.1rem auto;
    }
  }
`;

const Villages = ({ villages }) => {
  if (!villages || villages.length === 0) {
    return null;
  }
  return (
    <StyledVillages>
      {villages.map(village => (
        <Village key={village.path} village={village} />
      ))}
    </StyledVillages>
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
