import React from 'react';
import Link from 'gatsby-link';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import viewmodel from '../json';
import Speakers from '../components/Speakers';
import ButtonGroup from '../components/ButtonGroup';
import Content, { ContentContainer } from '../components/Content';
import colors from '../util/colors';

const buttonGroupStyle = css`
  margin: 2rem auto;
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

const SpeakersPage = props => {
  return (
    <Content backgroundColor={colors.greyLightest}>
      <StyledHeader>Talere</StyledHeader>
      <ButtonGroup css={buttonGroupStyle}>
        <Link to="/" css={linkStyle}>
          Forside
        </Link>
        <Link to="/schedule/" css={linkStyle}>
          Skjema
        </Link>
      </ButtonGroup>
      <ContentContainer>
        {Object.keys(viewmodel.talks).map(key => (
          <Speakers key={key} talk={viewmodel.talks[key]} talkKey={key} />
        ))}
      </ContentContainer>
    </Content>
  );
};

export default SpeakersPage;
