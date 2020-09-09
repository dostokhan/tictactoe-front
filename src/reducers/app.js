import {
  SET_WINNER,
  TOGGLE_PLAYER_TURN,
  SAVE_USER_ACTION,
  RESET_MATCH,
  FETCH_LOGS_SUCCESS,
  SET_SESSION
} from 'actions/app';

// export const getRootEntityType = state => state.app.rootEntityType;

const INITIAL_STATE = {
  session: null,
  loading: false,
  turn: 'one',
  board: ['_', '_', '_', '_', '_', '_', '_', '_', '_'],
  winner: null,
  log: []
};

export default function appReducer(
  state = { ...INITIAL_STATE },
  { type, payload }
) {
  switch (type) {
    case SET_SESSION:
      return {
        ...state,
        session: payload
      };
    case RESET_MATCH:
      return {
        ...state,
        turn: INITIAL_STATE.turn,
        board: [...INITIAL_STATE.board],
        winner: null
      };
    case SET_WINNER:
      return {
        ...state,
        winner: payload
      };
    case TOGGLE_PLAYER_TURN:
      return {
        ...state,
        turn: state.turn === 'one' ? 'two' : 'one'
      };

    case FETCH_LOGS_SUCCESS:
      return {
        ...state,
        log: [...payload]
      };
    case SAVE_USER_ACTION:
      return {
        ...state,
        board: state.board.map((text, index) =>
          payload.cellNo === index ? payload.text : text
        )
      };
    default:
      return state;
  }
}
