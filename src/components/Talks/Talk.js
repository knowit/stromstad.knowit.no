import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import colors from '../../util/colors';
import viewmodel from '../../json';
import TalkDescription from './TalkDescription';
import TalkSpeaker from './TalkSpeaker';

const StyledTalkPause = styled.div`
  padding: 1rem 1rem;
  text-align: center;
  font-weight: bold;
  width: 100%;
  background-color: ${colors.greyLight};
  margin: 1rem -1rem;
`;

const StyledTalk = styled.div`
  margin-top: 3rem;
  display: flex;
`;

const StyledTalkTitle = styled.strong`
  margin-left: 0.2rem;
`;

const StyledTalkInfo = styled.div`
  display: inline-block;
  margin-left: 2rem;
  width: 85%;
`;

const StyledTalkSpeakers = styled.strong`
  display: inline-block;
  text-align: center;
  width: 15%;
`;

class Talk extends React.Component {
  constructor() {
    super();
    this.state = { showDescription: false };
    this.toggleShowDescription = this.toggleShowDescription.bind(this);
  }

  toggleShowDescription() {
    this.setState(prevState => ({
      showDescription: !prevState.showDescription,
    }));
  }

  render() {
    const { talkId } = this.props;
    if (talkId === 'pause') {
      return (
        <StyledTalkPause>
          <span>Pause</span>
        </StyledTalkPause>
      );
    }
    const talk = viewmodel.talks[talkId];
    return (
      <StyledTalk>
        <StyledTalkSpeakers>
          {talk.speakers && talk.speakers.length !== 0 ? (
            <TalkSpeaker
              speaker={talk.speakers[0]}
              numberOfSpeakers={talk.speakers.length}
              talkId={talkId}
            />
          ) : null}
        </StyledTalkSpeakers>

        <StyledTalkInfo>
          <StyledTalkTitle>{talk.title}</StyledTalkTitle>
          <TalkDescription
            description={talk.description}
            showDescription={this.state.showDescription}
            toggleShowDescription={this.toggleShowDescription}
          />
        </StyledTalkInfo>
      </StyledTalk>
    );
  }
}

Talk.propTypes = {
  talkId: PropTypes.string.isRequired,
};

export default Talk;
