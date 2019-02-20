import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

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
