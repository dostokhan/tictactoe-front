import React from 'react';
import { useSelector } from 'react-redux';

import {
  Flex,
  Box
  // Card,
  // Image,
  // Score,
  // Text
} from 'rebass';

export default function Players() {
  const turn = useSelector(state => state.app.turn);

  const turnPlayerOne = turn === 'one';
  const turnPlayerTwo = turn === 'two';

  const playerOneStyle = {
    borderBottom: turnPlayerOne ? '5px solid green' : ''
  };
  const playerTwoStyle = {
    borderBottom: turnPlayerTwo ? '5px solid green' : ''
  };

  return (
    <Flex direction="row" justifyContent="space-between">
      <Box p={3} sx={playerOneStyle}>
        Player One
      </Box>
      <Box p={3} sx={playerTwoStyle}>
        Player Two
      </Box>
    </Flex>
  );
}
