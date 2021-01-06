import { put, call, takeLatest } from 'redux-saga/effects';
import { CURRENT_GAME_REQUEST, currentGameSuccess, currentGameFailure } from '../actions';
import { getCurrentGame } from '../../agents';

function* dataHandler() {
  try {
    const res = yield call(getCurrentGame);
    yield put(currentGameSuccess(res.data.result));
  } catch (err) {
      yield put(currentGameFailure(err));
  }
}

export default function* currentGameSaga() {
  yield takeLatest(CURRENT_GAME_REQUEST, dataHandler);
}