import {
  CURRENT_GAME_REQUEST,
  CURRENT_GAME_SUCCESS,
  CURRENT_GAME_FAILURE,
  PLAYER_MOVE_REQUEST,
  PLAYER_MOVE_SUCCESS,
  PLAYER_MOVE_FAILURE,
  RESET_GAME_REQUEST,
  RESET_GAME_SUCCESS,
  RESET_GAME_FAILURE,
  NEW_GAME_REQUEST,
  NEW_GAME_SUCCESS,
  NEW_GAME_FAILURE,
} from '../actions';

const initialState = {
  currentGameMovesHistory: [],
  isNewGameLoading: false,
  isNewGameError: false,
  isInitialLoading: true,
  isInitialError: false,
  isMoveLoading: false,
  isMoveError: false,
  board: [],
  player: 'O',
  ai: 'X',
  end: false,
  nextMove: 'O',
  winner: null,
  team: null,
};

export const gameReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case CURRENT_GAME_REQUEST: {
      return {
        ...state,
        isInitialError: false,
        isInitialLoading: true,
      };
    }

    case CURRENT_GAME_SUCCESS: {
      return {
        ...state,
        ...payload,
        isInitialError: false,
        isInitialLoading: false,
      };
    }

    case CURRENT_GAME_FAILURE: {
      return {
        ...state,
        isInitialError: true,
        isInitialLoading: false,
      };
    }

    case PLAYER_MOVE_REQUEST: {
      return {
        ...state,
        isMoveError: false,
        isMoveLoading: true,
      }
    }

    case PLAYER_MOVE_SUCCESS: {
      return {
        ...state,
        ...payload.result,
        team: payload.result.team,
        winner: payload.result.winner,
        isMoveError: false,
        isMoveLoading: false,
        currentGameMovesHistory: state.currentGameMovesHistory.concat(payload.history),
      }
    }

    case PLAYER_MOVE_FAILURE: {
      return {
        ...state,
        isMoveError: true,
        isMoveLoading: false,
      }
    }

    case RESET_GAME_REQUEST: {
      return {
        ...state,
        isNewGameError: false,
        isNewGameLoading: true,
      }
    }

    case RESET_GAME_SUCCESS: {
      return {
        ...state,
        board: payload.board,
        isNewGameError: false,
        isNewGameLoading: false,
        currentGameMovesHistory: [],
      }
    }

    case RESET_GAME_FAILURE: {
      return {
        ...state,
        isNewGameError: true,
        isNewGameLoading: false,
      }
    }

    case NEW_GAME_REQUEST: {
      return {
        ...state,
        isNewGameError: false,
        isNewGameLoading: true,
      }
    }

    case NEW_GAME_SUCCESS: {
      return {
        ...state,
        ...payload,
        end: false,
        isNewGameError: false,
        isNewGameLoading: false,
        currentGameMovesHistory: [],
      }
    }

    case NEW_GAME_FAILURE: {
      return {
        ...state,
        isNewGameError: true,
        isNewGameLoading: false,
      }
    }

    default:
      return state;
  }
};