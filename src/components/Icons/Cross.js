import React from 'react';

const Cross = ({ ...rest }) => {
  return (
    <svg {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
      <polygon points="80.9,32.3 77.2,28.5 50,55.7 22.8,28.5 19.1,32.3 46.3,59.5 19.1,86.6 22.8,90.4 50,63.2 77.2,90.4 80.9,86.6 53.7,59.5 " />
    </svg>
  );
};

export default Cross;
