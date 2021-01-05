import React from 'react';
import dayjs from 'dayjs';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Row = ({ index, style, data }) => {
  const currentItem = data.list[index];
  const secondary = !data.list[index].winner ? 'draw' : `Team ${currentItem.team} by ${currentItem.winner} won`;
  return (
    <ListItem button style={style} key={index}>
      <ListItemText
        primary={`Date is ${dayjs(currentItem.ts).format('MMM D, YYYY h:mm A')}`} 
        secondary={`Match result: ${secondary}`}
      />
    </ListItem>
  );
}

export default Row;