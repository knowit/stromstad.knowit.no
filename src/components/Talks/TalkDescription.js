import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import colors from '../../util/colors'
import Person from '../Icons/Person';

import Cross from '../Icons/Cross';
import Button from '../Button';

const descriptionButtonStyle = css`
      margin: 1rem auto;
      color: black; 

      &:focus,
      &:hover {
        color: ${colors.knowit.green};
      };
`

const StyledTalkDescription = styled.span`
    margin-top: 0.2rem;
    display: block;
`

const DESCRIPTION_LENGTH = 100;

const shortDescription = description => {
  if (description.length > DESCRIPTION_LENGTH) {
    return `${description.substring(0, 100)}... Les mer`;
  }
  return description;
};

const TalkDescription = ({
  showDescription,
  toggleShowDescription,
  description,
}) => {
  if (description.length < DESCRIPTION_LENGTH + 1) {
    return <StyledTalkDescription>{description}</StyledTalkDescription>;
  }

  if (showDescription) {
    return (
      <StyledTalkDescription>
        <div dangerouslySetInnerHTML={{ __html: description }} />
        <Button appearance="stripped" onClick={toggleShowDescription} css={descriptionButtonStyle}>
          <Cross />
        </Button>
      </StyledTalkDescription>
    );
  }

  return (
    <StyledTalkDescription onClick={toggleShowDescription}>
      <div
        dangerouslySetInnerHTML={{ __html: shortDescription(description) }}
      />
    </StyledTalkDescription>
  );
};

TalkDescription.propTypes = {
  showDescription: PropTypes.bool.isRequired,
  toggleShowDescription: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
};

TalkDescription.defaultProps = {
  description: '',
};

export default TalkDescription;
