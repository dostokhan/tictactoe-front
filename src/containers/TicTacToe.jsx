import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box } from 'rebass';
import { setSession } from 'actions/app';

import Players from './Players';
import Board from './Board';
import Log from './Log';
import Winner from './Winner';

export default function TicTacToe() {
  const winner = useSelector(state => state.app.winner);
  const session = useSelector(state => state.app.session);
  const dispatch = useDispatch();
  const showWinner = winner !== null;

  useEffect(() => {
    if (session === null) {
      dispatch(setSession());
    }
  }, [dispatch, session]);

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
