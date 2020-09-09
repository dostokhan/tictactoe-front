import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Flex, Box } from 'rebass';
import { setWinner } from 'actions/app';

import Cell from './Cell';

const WINNING_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

export default function Board() {
  const board = useSelector(state => state.app.board);
  const dispatch = useDispatch();

  useEffect(
    function checkResult() {
      console.log('check result');

      let winner = null;
      WINNING_CONDITIONS.forEach(combo => {
        if (
          board[combo[0]] !== '_' &&
          board[combo[0]] === board[combo[1]] &&
          board[combo[0]] === board[combo[2]]
        ) {
          winner = board[combo[0]] === 'X' ? 'one' : 'two';
        }
      });

      if (winner === null) {
        winner = board.includes('_') ? null : 'Tie';
      }

      if (winner !== null) {
        dispatch(setWinner(winner));
      }
    },
    [board, dispatch]
  );

  function renderBoard() {
    const cellsCount = [...Array(9).keys()];

    return cellsCount.map(cellNo => (
      <Cell key={`cell-${cellNo}`} cellNo={cellNo} text={board[cellNo]} />
    ));
  }

  return (
    <Box p={3}>
      <Flex flexWrap="wrap" justifyContent="space-between">
        {renderBoard()}
      </Flex>
    </Box>
  );
}
