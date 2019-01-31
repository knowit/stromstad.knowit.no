import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Talks from './Talks';
import mediaQueries from '../util/mediaQueries';

const StyledEntries = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 90%;

  @media (${mediaQueries.medium}) {
    width: 100%;
  }
`;

const Entries = ({ entries, collectionTitle }) => {
  return (
    <StyledEntries>
      {entries.map((entry, index) => (
        <Talks key={entry.room} entry={entry} />
      ))}
    </StyledEntries>
  );
};

Entries.propTypes = {
  entries: PropTypes.array,
  collectionTitle: PropTypes.string,
};

export default Entries;
