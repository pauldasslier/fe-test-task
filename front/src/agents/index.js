import axios from 'axios';
import { getScore, resetScore } from './scoreAgent';
import { getCurrentGame, resetGame, startNextGame, makeMove } from './gameAgent';

axios.defaults.baseURL = 'http://localhost:3000/api';

export {
  getScore,
  resetScore,
  makeMove,
  resetGame,
  startNextGame,
  getCurrentGame,
};
