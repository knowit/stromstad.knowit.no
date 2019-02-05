import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Talk from './Talk';
import colors from '../../util/colors';
import mediaQueries from '../../util/mediaQueries';

const StyledTalksContainer = styled.div`
  flex: 1 ${p => (p.double ? '50%' : '28%')};
  padding: 1rem;
  background-color: white;
  border: 1px solid ${colors.greyLight};

  @media (${mediaQueries.medium}) {
    flex: 1 100%;
    border-left: none;
    border-right: none;
  }
`;

const StyledTalksType = styled.span`
  color: ${colors.knowit.green};
  font-size: 0.9rem;
`;

const StyledTalksRoom = styled.span`
  font-size: 1.2rem;
  float: right;
  color: ${colors.knowit.green};
`;
const Talks = ({ collectionTitle, entry, columnSize }) => {
  return (
    <StyledTalksContainer double={entry.columnSize === 2}>
      <StyledTalksType>{collectionTitle}</StyledTalksType>
      <StyledTalksRoom>{entry.room}</StyledTalksRoom>
      {entry.slots.map((talkId, index) => (
        <Talk key={`${talkId}_${index}`} talkId={talkId} />
      ))}
    </StyledTalksContainer>
  );
};

Talks.propTypes = {
  collectionTitle: PropTypes.string,
  entry: PropTypes.object,
};

export default Talks;
