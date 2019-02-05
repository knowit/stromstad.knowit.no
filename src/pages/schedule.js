import React from 'react';
import Link from 'gatsby-link';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import viewmodel from '../json';
import Paragraph from '../components/Paragraph';
import ButtonGroup from '../components/ButtonGroup';
import Button from '../components/Button';
import Slot from '../components/Slot';
import Content, { ContentContainer } from '../components/Content';
import colors from '../util/colors';
import mediaQueries from '../util/mediaQueries';

const buttonGroupStyle = css`
  margin: 2rem auto;
`;

const pickDayButtonsStyle = css`
  margin: 0 auto;
  margin-bottom: -1rem;
  z-index: 1;

  @media (${mediaQueries.medium}) {
    display: none;
  }
`;

const buttonStyle = css`
  border-radius: 0;
  box-shadow: none;
`;

const StyledSelect = styled.select`
  border-radius: 0;
  height: 3rem;
  width: 80%;
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
  color: ${colors.primary};
  font-size: 1.2rem;
  text-transform: uppercase;

  &:hover,
  &:focus,
  &:visited {
    color: ${colors.primary};
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
        <StyledHeader>Skjema</StyledHeader>
        <ButtonGroup css={buttonGroupStyle}>
          <Link to="/" css={linkStyle}>
            Forside
          </Link>
          <Link to="/speakers/" css={linkStyle}>
            Talere
          </Link>
        </ButtonGroup>
        <ButtonGroup css={pickDayButtonsStyle}>
          {viewmodel.schedules.map((day, index) => (
            <Button
              key={day.day}
              css={buttonStyle}
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
              css={buttonStyle}
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
