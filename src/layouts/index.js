import React from 'react';
import Helmet from 'react-helmet';
import viewmodel from '../json';
import GoogleMaps from './GoogleMaps';

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Helmet
        title={viewmodel.meta.title}
        meta={[
          {
            name: 'description',
            content: viewmodel.meta.description,
          },
          { name: 'keywords', content: viewmodel.meta.description },
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
