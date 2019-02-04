import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { StyledSlot, StyledSlotTime, StyledSlotTitle } from './SlotStyles';
import Villages from '../Villages/Villages';

const StyledSpan = styled.span`
  padding: 2rem;
  display: inline-block;
`;

const OtherSlot = ({ collection }) => {
  return (
    <StyledSlot>
      <StyledSlotTime>{collection.time}</StyledSlotTime>
      <StyledSlotTitle background="white">
        <StyledSpan>{collection.title}</StyledSpan>
        <Villages villages={collection.villages}/>
      </StyledSlotTitle>
    </StyledSlot>
  );
};

OtherSlot.propTypes = {
  collection: PropTypes.object,
};

export default OtherSlot;
