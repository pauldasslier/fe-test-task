import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import { currentGameRequest } from '../../redux/actions';
import AppLayout from '../../_components/AppLayout';
import Control from './components/Control';
import History from './components/History';
import Status from './components/Status';
import Board from './components/Board/Board';

const Game = ({ isError, isLoading, getCurrentGame }) => {

  useEffect(() => {
    getCurrentGame();
  }, [getCurrentGame]);

  const renderContent = useMemo(() => {
    if (isLoading) {
      return (
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      )
    }

    if (isError) {
      return (
        <Alert severity="error">
          Something went wrong! Please, reload the page!
        </Alert>
      );
    }

    return (
      <>
        <Status />
        <Board />
        <Control />
        <History />
      </>
    );
  }, [isError, isLoading]);

  return (
    <AppLayout>
      {renderContent}
    </AppLayout>
  );
};

const mapStateToProps = ({ game }) => ({
  isLoading: game.isInitialLoading,
  isError: game.isInitialError,
});

export default connect(mapStateToProps, {
  getCurrentGame: currentGameRequest,
})(Game);