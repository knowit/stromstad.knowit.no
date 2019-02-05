import React from 'react';
import PropTypes from 'prop-types';
import BreakSlot from './BreakSlot';
import EntriesSlot from './EntriesSlot';
import OtherSlot from './OtherSlot';

const Slot = ({ collection }) => {
  if (!collection) {
    return null;
  } else if (collection.isBreak) {
    return <BreakSlot collection={collection} />;
  } else if (collection.entries) {
    return <EntriesSlot collection={collection} />;
  }
  return <OtherSlot collection={collection} />;
};

Slot.propTypes = {
  collection: PropTypes.object,
};

export default Slot;
