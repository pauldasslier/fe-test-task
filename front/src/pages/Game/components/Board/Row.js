import React, { memo } from 'react';
import Box from '@material-ui/core/Box';
import Cell from './Cell';

const Row = ({ row, onMove, hasBottomBorder }) => (
  <Box display="flex" borderBottom={hasBottomBorder ? 2 : 0}>
    {row.map((cell, idx, arr) => (
      <Cell
        key={idx}
        value={cell}
        onMove={onMove}
        hasRightBorder={idx !== arr.length - 1}
      />
    ))}
  </Box>
);

function areEqual({ row: prevRow }, { row: nextRow }) {
  if (prevRow.toString() === nextRow.toString()) return true;
  return false;
}

export default memo(Row, areEqual);