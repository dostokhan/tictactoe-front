import React from 'react';
import { useSelector } from 'react-redux';

import {
  // Flex,
  Box
  // Card,
  // Image,
  // Heading,
  // Text
} from 'rebass';

import Players from './Players';
import Board from './Board';
import Log from './Log';
import Winner from './Winner';

export default function TicTacToe() {
  const winner = useSelector(state => state.app.winner);
  const showWinner = winner !== null;

  return (
    <Box sx={{ width: '100%', maxWidth: 800 }}>
      {showWinner && <Winner won={winner} />}
      {!showWinner && (
        <>
          <Players />

          <Board />

          <Log />
        </>
      )}
    </Box>
  );
}
