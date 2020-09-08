import React from 'react';
import { useDispatch } from 'react-redux';

import { resetMatch } from 'actions/app';
import { Heading, Button } from 'rebass';

export default function Winner({ won }) {
  const dispatch = useDispatch();
  function result() {
    switch (won) {
      case 'one':
        return 'Player One Won';
      case 'two':
        return 'Player Two Won';
      case 'Tie':
      default:
        return 'Tie';
    }
  }

  function reset() {
    dispatch(resetMatch());
  }
  return (
    <div>
      <Heading fontSize={40} color="primary">
        {result()}
      </Heading>
      <Button
        sx={{
          color: 'text',
          bg: 'background'
        }}
        mr={3}
        onClick={reset}
      >
        Reset
      </Button>
    </div>
  );
}
