import { put, call, takeLatest } from 'redux-saga/effects';
import { RESET_GAME_REQUEST, resetGameSucess, resetGameFailure } from '../actions';
import { resetGame } from '../../agents';

function* dataHandler() {
  try {
    const res = yield call(resetGame);
    yield put(resetGameSucess(res.data.result));
  } catch (err) {
      yield put(resetGameFailure(err));
  }
}

export default function* gameSaga() {
  yield takeLatest(RESET_GAME_REQUEST, dataHandler);
}