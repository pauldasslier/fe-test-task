import React from 'react';
import Box from '@material-ui/core/Box';

import Header from './Header';

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Box p={2}>
        {children}
      </Box>
    </>
  );
};

export default AppLayout;