import { createAction } from '../utils/createAction';

export const CURRENT_GAME_REQUEST = 'CURRENT_GAME_REQUEST';
export const currentGameRequest = createAction(CURRENT_GAME_REQUEST);

export const CURRENT_GAME_SUCCESS = 'CURRENT_GAME_SUCCESS';
export const currentGameSuccess = createAction(CURRENT_GAME_SUCCESS);

export const CURRENT_GAME_FAILURE = 'CURRENT_GAME_FAILURE';
export const currentGameFailure = createAction(CURRENT_GAME_FAILURE);

export const PLAYER_MOVE_REQUEST = 'PLAYER_MOVE_REQUEST';
export const playerMoveRequest = createAction(PLAYER_MOVE_REQUEST);

export const PLAYER_MOVE_SUCCESS = 'PLAYER_MOVE_SUCCESS';
export const playerMoveSuccess = createAction(PLAYER_MOVE_SUCCESS);

export const PLAYER_MOVE_FAILURE = 'PLAYER_MOVE_FAILURE';
export const playerMoveFailure = createAction(PLAYER_MOVE_FAILURE);

export const RESET_GAME_REQUEST = 'RESET_GAME_REQUEST';
export const resetGameRequest = createAction(RESET_GAME_REQUEST);

export const RESET_GAME_SUCCESS = 'RESET_GAME_SUCCESS';
export const resetGameSucess = createAction(RESET_GAME_SUCCESS);

export const RESET_GAME_FAILURE = 'RESET_GAME_FAILURE';
export const resetGameFailure = createAction(RESET_GAME_FAILURE);

export const NEW_GAME_REQUEST = 'NEW_GAME_REQUEST';
export const newGameRequest = createAction(NEW_GAME_REQUEST);

export const NEW_GAME_SUCCESS = 'NEW_GAME_SUCCESS';
export const newGameSuccess = createAction(NEW_GAME_SUCCESS);

export const NEW_GAME_FAILURE = 'NEW_GAME_FAILURE';
export const newGameFailure = createAction(NEW_GAME_FAILURE);