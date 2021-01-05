import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import store from './store';
import RootRouter from './RootRouter';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <HashRouter>
          <RootRouter />
        </HashRouter>
      </Provider>
    </ThemeProvider>
  );
};

export default App;