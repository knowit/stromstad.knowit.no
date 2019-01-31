import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import styled from '@emotion/styled';

const classes = new BEMHelper({
  name: 'paragraph',
  prefix: 'c-',
});

const StyledParagraph = styled.p`
  color: ${p => p.color || 'black'};
`;

const Paragraph = ({ color, children }) => (
  <StyledParagraph color={color}>{children}</StyledParagraph>
);

Paragraph.propTypes = {
  color: PropTypes.string,
};

export default Paragraph;
