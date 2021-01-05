import React, { memo } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const Cell = ({ value, onMove, hasRightBorder }) => {
  const displayedValue = isNaN(parseInt(value)) ? value : null;
  return (
    <Box
      width={70}
      height={70}
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRight={hasRightBorder ? 2 : 0}
      onClick={() => (displayedValue ? null : onMove(value))}
    >
      <Typography variant="h5">
        {displayedValue}
      </Typography>
    </Box>
  );
}

function areEqual({ value: prevValue }, { value: nextValue }) {
  if (prevValue === nextValue) return true;
  return false;
}

export default memo(Cell, areEqual);