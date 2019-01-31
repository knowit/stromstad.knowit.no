import React from 'react';
import PropTypes from 'prop-types';
import Link, { withPrefix } from 'gatsby-link';
import { speakersClass } from './';
import Person from '../Icons/Person';

const Speaker = ({ speaker }) => {
  return (
    <div {...speakersClass('speaker')}>
      <span key="speaker-img" {...speakersClass('speaker-image')}>
        {speaker.pic ? (
          <img src={withPrefix(`/static/pics/${speaker.pic}`)} />
        ) : (
          <Person />
        )}
      </span>
      <h3 key="speaker-name">{speaker.name}</h3>
      <p key="speaker-bio">{speaker.bio}</p>
    </div>
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
    <div id={talkKey} {...speakersClass()}>
      <div {...speakersClass('divider')} />
      <h2 {...speakersClass('talk-title')}>{title}</h2>
      <div {...speakersClass('container')}>
        {speakers.map(speaker => (
          <Speaker key={speaker.name} speaker={speaker} />
        ))}
      </div>
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
