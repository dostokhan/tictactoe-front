import {
  SET_WINNER,
  TOGGLE_PLAYER_TURN,
  GET_USER_ACTIONS,
  SAVE_USER_ACTION,
  RESET_MATCH
} from '../actions/app';

// export const getRootEntityType = state => state.app.rootEntityType;

const INITIAL_STATE = {
  loading: false,
  turn: 'one',
  board: ['_', '_', '_', '_', '_', '_', '_', '_', '_'],
  winner: null
};

export default function appReducer(
  state = { ...INITIAL_STATE },
  { type, payload }
) {
  switch (type) {
    case RESET_MATCH:
      return {
        ...INITIAL_STATE
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

    case GET_USER_ACTIONS:
      return {
        ...state
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
