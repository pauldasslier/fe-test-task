import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { newGameRequest, resetGameRequest } from '../../../redux/actions';

const Control = ({ startNewGame, resetCurrentGame, isEnd }) => {
  const renderButton = useMemo(() => {
    if (isEnd) {
      return (
        <Button 
          color="primary"
          variant="contained"
          onClick={startNewGame}
        >
          New game
        </Button>
      );
    }
  
    return (
      <Button 
        color="secondary"
        variant="contained"
        onClick={resetCurrentGame}
      >
        Reset this game
      </Button>
    );
  }, [isEnd, resetCurrentGame, startNewGame]);

  return (
    <Box my={2} display="flex" justifyContent="center">
      {renderButton}
    </Box>
  );
};

const mapStateToProps = ({ game }) => ({
  isEnd: game.end,
});

export default connect(mapStateToProps, {
  resetCurrentGame: resetGameRequest,
  startNewGame: newGameRequest,
})(Control);