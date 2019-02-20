import React from 'react';
import styled from '@emotion/styled';
import viewmodel from '../json';
import colors from '../util/colors';
import mediaQueries from '../util/mediaQueries';

const StyledGoogleMapsWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;

const StyledGoogleMapsBlocker = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const StyleGoogleMapsContent = styled.div`
  width: 350px;
  height: 180px;
  padding: 20px;
  top: 0.5rem;
  left: 0.5rem;
  position: absolute;
  text-align: left;
  background: white;
  border: 1px solid ${colors.grey};

  @media (${mediaQueries.medium}) {
    width: 60%;
    height: 240px;
  }
`;

const StyledGoogleMaps = styled.iframe`
  height: 100vh;
  width: 100vw;
  border: none;
`;

const GoogleMaps = () => {
  return (
    <StyledGoogleMapsWrapper>
      <StyledGoogleMapsBlocker />
      <StyleGoogleMapsContent>
        <h1>Lokasjon</h1>
        <a
          href="https://goo.gl/maps/hSfJEMs8Kz22"
          target="_blank"
          rel="noopener noreferrer">
          <h3>{viewmodel.event.venue}</h3>
        </a>
        <a
          href="https://goo.gl/maps/hSfJEMs8Kz22"
          target="_blank"
          rel="noopener noreferrer">
          <h3>{viewmodel.event.adress}</h3>
        </a>
        <h3>{viewmodel.event.city}</h3>
      </StyleGoogleMapsContent>
      <StyledGoogleMaps src={viewmodel.event.gmapsUrl} frameBorder="0" />
    </StyledGoogleMapsWrapper>
  );
};

export default GoogleMaps;
