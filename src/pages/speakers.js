import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import viewmodel from '../json';
import Speakers from '../components/Speakers';
import ButtonGroup from '../components/ButtonGroup';
import Content, { ContentContainer, TopContent } from '../components/Content';
import colors from '../util/colors';
import SafeLink from '../components/SafeLink';

const buttonGroupStyle = css`
  margin: 2rem auto;
`;

const StyledHeader = styled.h1`
  margin: 0 auto;
`;

const SpeakersPage = props => {
  return (
    <Content backgroundColor={colors.greyLightest}>
      <TopContent backgroundColor={colors.secondary}>
        <StyledHeader>Talere</StyledHeader>
        <ButtonGroup css={buttonGroupStyle}>
          <SafeLink to="/">Forside</SafeLink>
          <SafeLink to="/schedule/">Skjema</SafeLink>
        </ButtonGroup>
      </TopContent>
      <ContentContainer>
        {Object.keys(viewmodel.talks).map(key => (
          <Speakers key={key} talk={viewmodel.talks[key]} talkKey={key} />
        ))}
      </ContentContainer>
    </Content>
  );
};

export default SpeakersPage;
