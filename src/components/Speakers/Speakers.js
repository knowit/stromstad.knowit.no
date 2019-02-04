import React from 'react';
import PropTypes from 'prop-types';
import Link, { withPrefix } from 'gatsby-link';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import colors from '../../util/colors';
import Person from '../Icons/Person';

const StyledSpeakers = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  margin-top: 2rem;
  text-align: center;
`;

const StyledDivider = styled.div`
  width: 40%;
  border-bottom: 5px solid ${colors.primary};
  margin: 4rem auto;
`;

const StyledTalkTitle = styled.div`
  text-align: center;
`;

const StyledSpeaker = styled.div`
  text-align: center;
  flex: 1 30%;
  margin: 0 1rem;
`;

const StyledSpeakerImage = styled.img`
  height: 160px;
  border-bottom: 3px solid ${colors.primary};
`;

const Speaker = ({ speaker }) => {
  return (
    <StyledSpeaker>
      <span>
        {speaker.pic ? (
          <StyledSpeakerImage src={withPrefix(`/static/pics/${speaker.pic}`)} />
        ) : (
          <Person
            css={css`
              heigt: 160px;
            `}
          />
        )}
      </span>
      <h3>{speaker.name}</h3>
      <p>{speaker.bio}</p>
    </StyledSpeaker>
  );
};

Speaker.propTypes = {
  speaker: PropTypes.shape({
    img: PropTypes.string,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string,
  }),
};

const Speakers = ({ talk: { speakers, title }, talkKey }) => {
  return (
    <div id={talkKey}>
      <StyledDivider />
      <StyledTalkTitle>{title}</StyledTalkTitle>
      <StyledSpeakers>
        {speakers.map(speaker => (
          <Speaker key={speaker.name} speaker={speaker} />
        ))}
      </StyledSpeakers>
    </div>
  );
};

Speakers.propTypes = {
  talk: PropTypes.shape({
    title: PropTypes.string.isRequired,
    speakers: PropTypes.arrayOf(
      PropTypes.shape({
        img: PropTypes.string,
        name: PropTypes.string.isRequired,
        bio: PropTypes.string,
      }),
    ),
  }).isRequired,
  talkKey: PropTypes.string.isRequired,
};

export default Speakers;
