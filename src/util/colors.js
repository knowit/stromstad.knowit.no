import darken from 'polished/lib/color/darken';
import rgba from 'polished/lib/color/rgba';

const dight = '#ceddea';
const dark = '#184673';
const greyLight = '#e8e3e3';
const greyLightest = '#f8f8f8';

export default {
    primary: '#007bba',
    secondary: '#007bbab3',
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
  }
};