// import axios from 'utils/axios';
// import type { Dispatch } from 'reducers/types';
// import { fetchSchema } from 'actions/schema';
// import { fetchContentTypes } from 'actions/content-type';

// ACTIONS
export const TOGGLE_PLAYER_TURN = 'action/turn/toggle';
export const GET_USER_ACTIONS = 'action/get';
export const SAVE_USER_ACTION = 'action/save';
export const SET_WINNER = 'winner/set';
export const RESET_MATCH = 'match/reset';

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

export const getUserActions = item => ({
  type: GET_USER_ACTIONS
});
export const saveUserAction = (cellNo, turn) => ({
  type: SAVE_USER_ACTION,
  payload: {
    cellNo,
    text: turn === 'one' ? 'X' : 'O'
  }
});

// ACTION CREATORS
export const placeMark = (cellNo, turn) => async dispatch => {
  // const saveLog = await axios('log', { turn, cellNo });
  await dispatch(saveUserAction(cellNo, turn));
  dispatch(togglePlayerTurn());
  // const fetchedLog = await axios('log', { turn, cellNo });
};

// export const  = (turn) => async dispatch => {
//   // dispatch({ INIT_APP_DATA });
//   const saveLog = axios.post('log', { player })
//   await dispatch(getUserActions());
//   // await dispatch(fetchContentTypes());
//   // dispatch({ INIT_APP_DATA_DONE });
// };
