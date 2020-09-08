import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { placeMark } from 'actions/app';

import {
  // Flex,
  Box
  // Card,
  // Image,
  // Score,
  // Text
} from 'rebass';

const cellStyle = {
  fontSize: 48,
  padding: 40,
  cursor: 'pointer',
  border: '1px solid #666',
  textAlign: 'center'
};

export default function Cell({ cellNo, text }) {
  const dispatch = useDispatch();
  const turn = useSelector(state => state.app.turn);

  function clickHandler() {
    if (text === '_') {
      dispatch(placeMark(cellNo, turn));
    }
  }

  return (
    <Box width={1 / 3} sx={cellStyle} onClick={clickHandler}>
      {text}
    </Box>
  );
}
