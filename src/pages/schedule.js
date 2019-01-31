import React from 'react';
import Link from 'gatsby-link';
import styled from '@emotion/styled';
import { css } from '@emotion/core'
import viewmodel from '../json';
import Paragraph from '../components/Paragraph';
import ButtonGroup from '../components/ButtonGroup';
import Button from '../components/Button';
import Slot from '../components/Slot';
import Content, { ContentContainer } from '../components/Content';
import colors  from '../util/colors';

const buttonGroupStyle = css`
  margin: 2rem auto;
`

const StyledHeader = styled.h1`
    margin: 0 auto;
`

class SchedulePage extends React.Component {
  constructor() {
    super();
    this.onDayClick = this.onDayClick.bind(this);
    this.state = {
      activeIndex: 0,
    };
  }

  onDayClick(evt, activeIndex) {
    evt.preventDefault();
    this.setState({ activeIndex });
  }
  render() {
    const activeDay =
      viewmodel && viewmodel.schedules[this.state.activeIndex]
        ? viewmodel.schedules[this.state.activeIndex]
        : undefined;
    if (!activeDay || !activeDay.day) {
      return <span>Her skjedde noe feil gitt...</span>;
    }
    return (
      <Content backgroundColor={colors.greyLightest}>
        <StyledHeader>Skjema</StyledHeader>
        <ButtonGroup css={buttonGroupStyle}>
          <Link to="/">
            Forside
          </Link>
          <Link to="/speakers/">
            Talere
          </Link>
        </ButtonGroup>
        <ButtonGroup css={buttonGroupStyle}>
          {viewmodel.schedules.map((day, index) => (
            <Button
              key={day.day}
              appearance={this.state.activeIndex === index ? 'active' : ''}
              onClick={evt => this.onDayClick(evt, index)}>
              {day.day}
            </Button>
          ))}
        </ButtonGroup>
        <ContentContainer backgroundColor={colors.greyLightest}>
          {activeDay.collections.map((collection, index) => (
            <Slot
              key={`${collection.title}_${index}`}
              collection={collection}
            />
          ))}
        </ContentContainer>
      </Content>
    );
  }
}

export default SchedulePage;
