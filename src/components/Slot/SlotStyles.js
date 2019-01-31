import React from 'react';
import PropTypes from 'prop-types';
import { slotClasses } from './';
import colors from '../../util/colors'
import styled from '@emotion/styled';
import { css } from '@emotion/core';



const slotTitleStyles = {
      grey: css`
      text-align: center;
      color: black;
      background-color: ${colors.greyLight};
      border: 1px solid ${colors.greyLight};
      `,
    white: css`
        border: 1px solid ${colors.greyLight};
        background-color: white;
        color: black;
    `

}


const StyledSlot = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-flow: row;
`

const StyledSlotTime = styled.span`
  align-self: center;
  width: 10%;
`;

const StyledSlotTitle = styled.div`
  padding: 1rem 0;
  width: 90%;
  ${p => p.background ? slotTitleStyles[p.background] : ''};
`;


export {
  StyledSlot,
  StyledSlotTime,
  StyledSlotTitle,
}
