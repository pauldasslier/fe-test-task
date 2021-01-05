import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Score from './pages/Score/Score';
import Game from './pages/Game/Game';

const RootRouter = () => {
  return (
    <Switch>
      <Route path="/" component={Game} exact />
      <Route path="/score" component={Score} exact />
      <Redirect to="/" />
    </Switch>
  );
};

export default RootRouter;