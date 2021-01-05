import axios from 'axios';

export const getCurrentGame = () => axios({
  url: '/game',
  method: 'GET',
});

export const resetGame = () => axios({
  url: '/game/reset',
  method: 'POST',
});

export const startNextGame = () => axios({
  url: '/game/next',
  method: 'GET'
});

export const makeMove = (index) => axios({
  url: 'game/move',
  method: 'POST',
  data: { index },
});