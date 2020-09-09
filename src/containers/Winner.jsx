import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { resetMatch } from 'actions/app';
import { Heading, Button } from 'rebass';

import { matchResult } from 'utils';
import { saveLog } from 'actions/app';

export default function Winner({ won }) {
  const dispatch = useDispatch();
  const session = useSelector(state => state.app.session);
  const result = matchResult(won);

  function reset() {
    saveLog(result, session);
    dispatch(resetMatch());
  }
  return (
    <div>
      <Heading fontSize={40} color="primary">
        {result}
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
