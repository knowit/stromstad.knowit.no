import darken from 'polished/lib/color/darken';

const greyLight = '#e8e3e3';
const greyLightest = '#f8f8f8';

export default {
  primary: '#007bba',
  secondary: '#28334A',
  grey: '#777777',
  greyLight: greyLight,
  greyLighter: '#eff0f2',
  greyLightest: greyLightest,
  greyDark: '#4d4d4d',

  background: {
    default: '#ffffff',
    dark: darken(0.1, '#ffffff'),
    darker: darken(0.2, '#ffffff'),
    backgroundGray: greyLightest,
    grayDark: '#e4e4e4',
  },
  knowit: {
    green: '#49b0a4',
  },
};
