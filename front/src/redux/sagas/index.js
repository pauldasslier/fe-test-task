import { fork } from 'redux-saga/effects';
import currentGameSaga from './currentGameSaga';
import playerMoveSaga from './playerMoveSaga';
import resetGameSaga from './resetGameSaga';
import newGameSaga from './newGameSaga';

export function* rootSaga() {
  yield fork(currentGameSaga);
  yield fork(playerMoveSaga);
  yield fork(resetGameSaga);
  yield fork(newGameSaga);
}