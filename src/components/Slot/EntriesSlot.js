import React from 'react';
import PropTypes from 'prop-types';
import { StyledSlot, StyledSlotTime } from './SlotStyles';
import Entries from '../Entries';

const EntriesSlot = ({ collection }) => {
  return (
    <StyledSlot>
      <StyledSlotTime>{collection.time}</StyledSlotTime>
      <Entries
        entries={collection.entries}
        collectionTitle={collection.title}
      />
    </StyledSlot>
  );
};

EntriesSlot.propTypes = {
  collection: PropTypes.object,
};

export default EntriesSlot;
