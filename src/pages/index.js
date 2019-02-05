import React from 'react';
import Link from 'gatsby-link';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import viewmodel from '../json';
import Content from '../components/Content';
import Paragraph from '../components/Paragraph';
import ButtonGroup from '../components/ButtonGroup';
import Arrow from '../components/Icons/Arrow';
import CodeOfConduct from '../components/CodeOfConduct';
import Layout from '../layouts';
import colors from '../util/colors';

const StyledIntroContent = styled.div`
  min-height: 50vh;
  justify-content: space-between;
  position: relative;
  background-color: ${colors.primary};
  z-index: 33;
  color: white;

  & > * {
    margin: 0 auto;
    text-align: center;
    display: block;
    padding-top: 2rem;
  }
`;

const StyledLogo = styled.img`
  width: 200px;
  margin: 0 auto;
  height: 200px;
`;

const StyledContentInfo = styled.div`
  min-height: 50vh;
  text-align: center;
  background-color: white;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

const linkStyle = css`
  text-transform: uppercase;
  font-size: 1.2rem;
  text-transform: uppercase;
  color: white;

  &:hover,
  &:focus,
  &:visited {
    color: white;
  }
`;

const IndexPage = () => (
  <Layout>
    <Content>
      <StyledIntroContent>
        <StyledLogo src="./static/ljubljana_logo.png" />
        <h1>{viewmodel.title}</h1>
        <div>
          <Paragraph color="white">Tid: {viewmodel.event.date}</Paragraph>
          <Paragraph color="white">
            Sted: {viewmodel.event.city}, {viewmodel.event.country}
          </Paragraph>
        </div>
        <ButtonGroup>
          <Link to="/schedule/" css={linkStyle}>
            Skjema
          </Link>
          <Link to="/speakers/" css={linkStyle}>
            Talere
          </Link>
        </ButtonGroup>
        <a href="#info">
          <Arrow />
        </a>
      </StyledIntroContent>
      <StyledContentInfo id="info">
        <h2>Informasjon</h2>
        <Paragraph>
          Knowit Objectnet arrangerer to fagseminarer årlig. Det er de ansatte
          selv som lager programmet. Våren 2019 vil den bli avholdt 22. Mars -
          23. Mars 2019 i Strømstad, Sverige.
        </Paragraph>
        <Paragraph>
          Tidligere har vi besøkt Berlin, Istanbul, Madrid, Dublin, Svalbard,
          Reykjavik, Palma, Ljubljana etc.
        </Paragraph>
      </StyledContentInfo>
      <CodeOfConduct />
    </Content>
  </Layout>
);

export default IndexPage;
