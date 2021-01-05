import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const Status = ({ isEnd, winner, team, myTeam }) => {
  console.log(winner, '123123123')
  const whoWin = !winner ? 'Ничья' : `Победила команда ${team}`;

  return (
    <Box my={2} textAlign="center">
      <Typography color="secondary">
        {`Вы играете за команду «${myTeam}»`}
      </Typography>
      {isEnd && (
        <Typography variant="h6" color="primary">
          {whoWin}
        </Typography>
      )}
    </Box>
  );
};

const mapStateToProps = ({ game }) => ({
  isEnd: game.end,
  team: game.team,
  winner: game.winner,
  myTeam: game.nextMove,
});

export default connect(mapStateToProps)(Status);