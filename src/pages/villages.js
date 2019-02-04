import React from 'react';
import Link from 'gatsby-link';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import viewmodel from '../json';
import Speakers from '../components/Speakers';
import ButtonGroup from '../components/ButtonGroup';
import Content, { ContentContainer } from '../components/Content';
import colors from '../util/colors';
import VillageMarkdown from '../components/Villages/VillageMarkdown';

const buttonGroupStyle = css`
  margin: 2rem auto;
`;

const StyledHeader = styled.h1`
  margin: 0 auto;
`;

const VillagesPage = props => {
  return (
    <Content backgroundColor={colors.greyLightest}>
      <StyledHeader>Talere</StyledHeader>
      <ButtonGroup css={buttonGroupStyle}>
        <Link to="/">Forside</Link>
        <Link to="/schedule/">Skjema</Link>
      </ButtonGroup>
      <ContentContainer>
        <ul>
        {viewmodel.villages.map(village => {
          return <li><Link to={`/village/${village.id}`}>{village.name}</Link></li>
        })}
        </ul>
      </ContentContainer>
    </Content>
  );
};

export default VillagesPage;
