import React from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';

const History = ({ movesHistory }) => {
  if (!movesHistory.length) return null;
  return (
    <Box
      p={2}
      display="flex"
      alignItems="center"
      flexDirection="column"
    >
      <Typography color="primary">Your moves history</Typography>
      <List>
        {movesHistory.map((item) => (
          <ListItem key={item}>
          <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

const mapStateToProps = ({ game }) => ({
  movesHistory: game.currentGameMovesHistory,
});

export default connect(mapStateToProps)(History);