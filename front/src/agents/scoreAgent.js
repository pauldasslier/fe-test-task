import axios from 'axios';

export const getScore = () => axios({
  url: '/score',
  method: 'GET',
});

export const resetScore = () => axios({
  url: '/score/reset',
  method: 'POST',
});