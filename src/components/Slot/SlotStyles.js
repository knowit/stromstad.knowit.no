import React from 'react';
import PropTypes from 'prop-types';
import { slotClasses } from './';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import colors from '../../util/colors';
import mediaQueries from '../../util/mediaQueries';

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
    @media(${mediaQueries.medium}) {
      border-left: none;
      border-right: none;
    }
  `,
};

const StyledSlot = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-flow: row;

  @media(${mediaQueries.medium}) {
    flex-flow: column;
  }
`;

const StyledSlotTime = styled.span`
  align-self: center;
  width: 10%;

  @media(${mediaQueries.medium}) {
    align-self: center;
    width: 100%;
    text-align: center;
    margin-bottom: 1rem;
  }
`;

const StyledSlotTitle = styled.div`
  padding: 1rem 0;
  width: 90%;
  @media(${mediaQueries.medium}) {
    padding: 1rem 0;
    font-weight: bold;
    width: 100%;
  }
  ${p => (p.background ? slotTitleStyles[p.background] : '')};
`;

export { StyledSlot, StyledSlotTime, StyledSlotTitle };