import React from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert';
import { playerMoveRequest } from '../../../../redux/actions';
import Row from './Row';

const Board = ({ board, onMove, isLoading, isEnd, isError }) => {
  console.log(isLoading, 'isLoading 123')
  if (!board.length) return null;
  return (
    <Box display="flex" justifyContent="center">
      {isError && (
        <Alert severity="error">
          Something went wrong! Please, try again!
        </Alert>
      )}
      <Box
        border={2}
        borderColor="primary"
        style={{
          backgroundColor: isLoading ? 'grey' : '',
          pointerEvents: isLoading || isEnd ? 'none' : 'auto',
        }}
      >
        {board.map((row, idx, arr) => {
          return (
            <Row
              row={row}
              key={idx}
              onMove={onMove}
              hasBottomBorder={idx !== arr.length - 1}
            />
          );
        })}
      </Box>
    </Box>
  );
};

const mapStateToProps = ({ game }) => ({
  isEnd: game.end,
  board: game.board,
  isLoading: game.isMoveLoading || game.isNewGameLoading,
  isError: game.isMoveError || game.isNewGameError,
});

export default connect(mapStateToProps, { onMove: playerMoveRequest })(Board);