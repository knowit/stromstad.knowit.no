import React from 'react';
import Link from 'gatsby-link';
import BEMHelper from 'react-bem-helper';
import viewmodel from '../json';
import Speakers from '../components/Speakers';
import ButtonGroup from '../components/ButtonGroup';

const classes = new BEMHelper({
  name: 'content',
  prefix: 'c-',
});

const SpeakersPage = props => {
  const hash = props.location.hash;
  return (
    <div {...classes('', 'speakers')}>
      <h1>Talere</h1>
      <ButtonGroup>
        <Link to="/">Forside</Link>
        <Link to="/schedule/">Skjema</Link>
      </ButtonGroup>
      <div {...classes('container')}>
        {Object.keys(viewmodel.talks).map(key => (
          <Speakers key={key} talk={viewmodel.talks[key]} talkKey={key} />
        ))}
      </div>
    </div>
  );
};

export default SpeakersPage;
