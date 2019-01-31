import React from 'react';
import Link from 'gatsby-link';
import viewmodel from '../json';
import Paragraph from '../components/Paragraph';
import ButtonGroup from '../components/ButtonGroup';
import Arrow from '../components/Icons/Arrow';
import CodeOfConduct from '../components/CodeOfConduct';
import Layout from '../layouts';
import styled from '@emotion/styled';

const StyledIntroContent = styled.div`
  min-height: 50vh;
  justify-content: space-between;
  position: relative;
  background-color: var(--main-color);
  z-index: 33;
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

const StyledContent = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column;
`;

const StyledContentInfo = styled.div`
  min-height: 50vh;
  text-align: center;
  background-color: white;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

const IndexPage = () => (
  <Layout>
    <StyledContent>
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
          <Link to="/speakers/">Talere</Link>
          <Link to="/schedule/">Skjema</Link>
        </ButtonGroup>
        <a href="#info">
          <Arrow />
        </a>
      </StyledIntroContent>
      <StyledContentInfo id="info">
        <h2>Informasjon</h2>
        <Paragraph>
          Knowit Objectnet arrangerer to fagseminarer årlig. Det er de ansatte
          selv som lager programmet. Våren 2019 vil den bli avholdt 21. Mars -
          22. Mars 2019 i Strømstad, Sverige.
        </Paragraph>
        <Paragraph>
          Tidligere har vi besøkt Berlin, Istanbul, Madrid, Dublin, Svalbard,
          Reykjavik, Palma, Ljubljana etc.
        </Paragraph>
      </StyledContentInfo>
      <CodeOfConduct />
    </StyledContent>
  </Layout>
);

export default IndexPage;
