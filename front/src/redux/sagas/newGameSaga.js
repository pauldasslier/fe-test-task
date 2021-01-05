import { put, call, takeLatest } from 'redux-saga/effects';
import { NEW_GAME_REQUEST, newGameSuccess, newGameFailure } from '../actions';
import { startNextGame } from '../../agents';

function* dataHandler() {
  try {
    const res = yield call(startNextGame);
    yield put(newGameSuccess(res.data.result));
  } catch (err) {
      yield put(newGameFailure(err));
  }
}

export default function* playerMoveSaga() {
  yield takeLatest(NEW_GAME_REQUEST, dataHandler);
}