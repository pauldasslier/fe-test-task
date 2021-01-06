import React from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const Status = ({ isEnd, winner, team, myTeam }) => {
  const whoWin = !winner ? 'Draw' : `Team ${team} won`;

  return (
    <Box my={2} textAlign="center">
      <Typography color="secondary">
        {`You playing for the team «${myTeam}»`}
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