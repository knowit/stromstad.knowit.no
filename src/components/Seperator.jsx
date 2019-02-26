import React from 'react';
import styled from '@emotion/styled';

const StyledSvg = styled.svg`
  width: 100%;
  margin-bottom: -2rem;
  fill: ${p => p.fill};

  & polygon {
    fill: ${p => p.fill};
  }
`;

const SectionSeparator = ({ fill }) => {
  return (
    <StyledSvg
      fill={fill}
      class="svg-divider"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none">
      <polygon
        class="svg-polygon"
        fill={fill}
        points="0,0 45,0 50,100, 55,0 100,0 100,100 0,100"
      />
    </StyledSvg>
  );
};

export default SectionSeparator;
