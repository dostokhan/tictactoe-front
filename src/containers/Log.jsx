import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Box, Text } from 'rebass';

import { fetchLogs } from 'actions/app';

export default function Log() {
  const dispatch = useDispatch();
  const logs = useSelector(state => state.app.log);
  const board = useSelector(state => state.app.board);

  const allCreatedAt = logs.map(log => log.createdAt);
  const latestCreatedAt = Math.max(...allCreatedAt);

  useEffect(
    function checkLog() {
      // dispatch(fetchLogs(latestCreatedAt));
      dispatch(fetchLogs());
    },
    [dispatch, board, latestCreatedAt]
  );

  return (
    <Box p={3} sx={{ height: '200px', overflow: 'auto' }}>
      <ul>
        {logs.map(log => (
          <li key={`log-${log._id}`}>
            <Text sx={{ fontSize: 18 }}>{log.action}</Text>
          </li>
        ))}
      </ul>
    </Box>
  );
}
