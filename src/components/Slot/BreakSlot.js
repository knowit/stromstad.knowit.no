import React from 'react';
import PropTypes from 'prop-types';
import { StyledSlot, StyledSlotTime, StyledSlotTitle } from './SlotStyles';

const BreakSlot = ({ collection }) => {
  return (
    <StyledSlot>
      <StyledSlotTime>{collection.time}</StyledSlotTime>
      <StyledSlotTitle background="grey">
        <span>{collection.title}</span>
      </StyledSlotTitle>
    </StyledSlot>
  );
};

BreakSlot.propTypes = {
  collection: PropTypes.object,
};

export default BreakSlot;
