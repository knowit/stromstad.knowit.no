import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import viewmodel from '../json';
import ButtonGroup from '../components/ButtonGroup';
import Button from '../components/Button';
import Slot from '../components/Slot';
import Content, { ContentContainer, TopContent } from '../components/Content';
import colors from '../util/colors';
import mediaQueries from '../util/mediaQueries';
import SafeLink from '../components/SafeLink';

const buttonGroupStyle = css`
  margin: 2rem auto;
`;

const pickDayButtonsStyle = css`
  margin: 0 auto;
  z-index: 1;

  @media (${mediaQueries.medium}) {
    display: none;
  }
`;

const StyledSelect = styled.select`
  border-radius: 0;
  height: 4rem;
  width: 100%;
  background-color: white;
  margin: 0 auto;
  display: none;

  @media (${mediaQueries.medium}) {
    display: block;
  }
`;

const StyledHeader = styled.h1`
  margin: 0 auto;
`;

const linkStyle = css`
  text-transform: uppercase;
  color: white;
  font-size: 1.2rem;
  text-transform: uppercase;

  &:hover,
  &:focus,
  &:visited {
    color: white;
  }
`;

class SchedulePage extends React.Component {
  constructor() {
    super();
    this.onDayClick = this.onDayClick.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.state = {
      activeIndex: 0,
    };
  }

  onDayClick(evt, activeIndex) {
    evt.preventDefault();
    this.setState({ activeIndex });
  }

  onSelectChange(evt) {
    this.setState({ activeIndex: evt.target.value });
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
        <TopContent>
          <StyledHeader>Skjema</StyledHeader>
          <ButtonGroup css={buttonGroupStyle}>
            <SafeLink to="/" css={linkStyle}>
              Forside
            </SafeLink>
            <SafeLink to="/speakers/" css={linkStyle}>
              Talere
            </SafeLink>
          </ButtonGroup>
        </TopContent>

        <ButtonGroup css={pickDayButtonsStyle}>
          {viewmodel.schedules.map((day, index) => (
            <Button
              key={day.day}
              appearance={this.state.activeIndex === index ? 'active' : ''}
              onClick={evt => this.onDayClick(evt, index)}>
              {day.day}
            </Button>
          ))}
        </ButtonGroup>
        <StyledSelect onChange={this.onSelectChange}>
          {viewmodel.schedules.map((day, index) => (
            <option
              key={day.day}
              value={index}
              onClick={evt => this.onDayClick(evt, index)}>
              {day.day}
            </option>
          ))}
        </StyledSelect>
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
