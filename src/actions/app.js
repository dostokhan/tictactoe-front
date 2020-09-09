import axios from 'utils/axios';
import { v4 as uuidv4 } from 'uuid';

// ACTIONS
export const TOGGLE_PLAYER_TURN = 'action/turn/toggle';
export const FETCH_LOGS_SUCCESS = 'logs/get';
export const SAVE_USER_ACTION = 'action/save';
export const SET_WINNER = 'winner/set';
export const RESET_MATCH = 'match/reset';
export const SET_SESSION = 'session/set';

// ACTION CREATORS
export const setSession = () => {
  const session = uuidv4();
  return {
    type: SET_SESSION,
    payload: session
  };
};

export const resetMatch = () => ({
  type: RESET_MATCH
});
export const setWinner = winner => ({
  type: SET_WINNER,
  payload: winner
});

export const togglePlayerTurn = () => ({
  type: TOGGLE_PLAYER_TURN
});

export const saveUserAction = (cellNo, turn) => ({
  type: SAVE_USER_ACTION,
  payload: {
    cellNo,
    text: turn === 'one' ? 'X' : 'O'
  }
});

export const saveLog = async (log, session) => {
  try {
    await axios({
      method: 'post',
      url: 'log',
      data: { log },
      headers: { session }
    }).then(response => response.data);
  } catch (e) {
    console.warn(e);
  }
};

export const placeMark = (cellNo, turn) => async (dispatch, getState) => {
  const state = getState();
  const { session } = state.app;
  const mark = turn === 'one' ? 'X' : 'O';
  const row = Math.floor(cellNo / 3) + 1;
  const col = (cellNo % 3) + 1;

  const log = `Player ${turn} Placed ${mark} on Cell [${row}][${col}]`;

  await saveLog(log, session);
  await dispatch(saveUserAction(cellNo, turn));
  dispatch(togglePlayerTurn());
  // const fetchedLog = await axios('log', { turn, cellNo });
};

const fetchLogsSuccess = logs => ({
  type: FETCH_LOGS_SUCCESS,
  payload: logs
});

export const fetchLogs = createdAt => async (dispatch, getState) => {
  try {
    const state = getState();
    const { session } = state.app;
    const logs = await axios
      .get('log', {
        params: { createdAt },
        headers: { session }
      })
      .then(response => response.data);
    dispatch(fetchLogsSuccess(logs));
  } catch (e) {
    console.warn(e);
  }
};
