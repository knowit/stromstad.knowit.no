import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { withPrefix } from 'gatsby-link';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import viewmodel from '../json';
import Content from '../components/Content';
import Paragraph from '../components/Paragraph';
import ButtonGroup from '../components/ButtonGroup';
import CodeOfConduct from '../components/CodeOfConduct';
import Layout from '../layouts';
import colors from '../util/colors';
import spacing from '../util/spacing';
import SafeLink from '../components/SafeLink';

const StyledIntroContent = styled.div`
  min-height: 50vh;
  justify-content: space-between;
  position: relative;
  background-color: ${p => p.backgroundColor || colors.primary};
  z-index: 33;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > * {
    margin: 0 auto;
    text-align: center;
    display: block;
    padding: ${spacing.normal} 0;
  }
`;

const StyledLogo = styled.img`
  width: 200px;
  margin: 0 auto;
`;

const StyledContentInfo = styled.div`
  min-height: 30vh;
  text-align: center;
  background-color: white;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  padding-top: ${spacing.large};
`;

const StyledDivder = styled.div`
  border-bottom: 3px solid ${p => p.color || colors.primary};
  width: 3rem;
  margin: ${spacing.normal} auto;
`;

const arrowDropDownStyle = css`
  color: white;
  height: 50px;
  width: 50px;
`;

const IndexPage = () => (
  <Layout>
    <Content>
      <StyledIntroContent backgroundColor={colors.secondary}>
        <StyledLogo
          alt="Strømstad Knowit logo"
          src={withPrefix('/static/logo.png')}
        />
      </StyledIntroContent>
      <StyledIntroContent>
        <h1>{viewmodel.title}</h1>
        <div>
          <Paragraph color="white">Tid: {viewmodel.event.date}</Paragraph>
          <StyledDivder color="white" />
          <Paragraph color="white">
            Sted: {viewmodel.event.city}, {viewmodel.event.country}
          </Paragraph>
        </div>
        <ButtonGroup>
          <SafeLink to="/schedule/">Program</SafeLink>
        </ButtonGroup>
        <a href="#info">
          <ArrowDropDown style={{ fontSize: 50 }} css={arrowDropDownStyle} />
        </a>
      </StyledIntroContent>
      <StyledContentInfo id="info">
        <h2>Informasjon</h2>
        <Paragraph>
          Knowit Objectnet arrangerer to fagseminarer årlig. Det er de ansatte
          selv som lager programmet. Våren 2019 vil den bli avholdt 22. mars -
          23. mars 2019 i Strømstad, Sverige.
        </Paragraph>
        <StyledDivder />
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
