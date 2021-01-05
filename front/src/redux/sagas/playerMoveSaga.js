import { put, call, takeLatest } from 'redux-saga/effects';
import { PLAYER_MOVE_REQUEST, playerMoveSuccess, playerMoveFailure } from '../actions';
import { makeMove } from '../../agents';

function* dataHandler({ payload }) {
  try {
    const res = yield call(makeMove, payload);
    yield put(playerMoveSuccess({ result: res.data.result, history: `You went to space ${payload}` }));
  } catch (err) {
      yield put(playerMoveFailure(err));
  }
}

export default function* playerMoveSaga() {
  yield takeLatest(PLAYER_MOVE_REQUEST, dataHandler);
}