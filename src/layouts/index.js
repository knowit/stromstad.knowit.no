import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import viewmodel from '../json';
import GoogleMaps from './GoogleMaps';

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Helmet
        title="Knowit Objectnet Fagseminar 2018"
        meta={[
          {
            name: 'description',
            content:
              'Knowit Objectnet arrangerer to fagseminarer årlig. Det er de ansatte selv som lager programmet. Høsten 2018 vil den bli avholdt 19. oktober - 22. oktober 2018 i Ljubljana, Slovenia.',
          },
          { name: 'keywords', content: 'Fagseminar, Ljubljana, Fag' },
        ]}>
        <link
          href="https://fonts.googleapis.com/css?family=Raleway"
          rel="stylesheet"
        />
      </Helmet>
      {children}
      <GoogleMaps />
    </div>
  );
};

export default DefaultLayout;
