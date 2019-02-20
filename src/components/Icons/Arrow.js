import React from 'react';

const Arrow = ({ ...rest }) => {
  return (
    <svg
      {...rest}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 100 125">
      <path
        d="M17.5,63.1L50,95.5L82.5,63l-32.9,0l-0.1-0.1L49.4,63l-14.5,0L34.9,63l-0.1,0.1L17.5,63.1z M48.1,66.9
l12.6,12.6L56,84.1L38.8,66.9L48.1,66.9z M53.5,66.9l9.3,0l5.2,5.2l-4.6,4.6L53.5,66.9z M73.2,66.9l-2.5,2.5l-2.5-2.5L73.2,66.9z
    		 M26.8,66.9l6.6,0l19.9,19.9L50,90.1L26.8,66.9z"
      />
    </svg>
  );
};

export default Arrow;
