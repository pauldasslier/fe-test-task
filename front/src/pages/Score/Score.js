import React, { useState, useEffect, useMemo } from 'react';
import { FixedSizeList } from 'react-window';
import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getScore, resetScore } from '../../agents';
import AppLayout from '../../_components/AppLayout';
import Row from './components/Row';

const Score = () => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [score, setScore] = useState(null);

  const doRequest = (apiRequest) => {
    apiRequest()
      .then(({ data }) => {
        setScore(data.result);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  };

  useEffect(() => {
    doRequest(getScore);
  }, []);

  const renderContent = useMemo(() => {
    if (isLoading) {
      return (
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      );
    }

    if (isError) {
      return (
        <Alert severity="error">
          Something went wrong! Please, reload the page!
        </Alert>
      );
    }

    if (score?.list?.length) {
      return (
        <>
          <Box my={2} border={1}>
            <FixedSizeList
              width="100%"
              height={400} 
              itemSize={46}
              itemCount={score.list.length}
              itemData={{ list: score.list }}
            >
              {Row}
            </FixedSizeList>
          </Box>
          <Box display="flex" justifyContent="center">
            <Button
              color="secondary" 
              variant="contained"
              onClick={() => doRequest(resetScore)}
            >
              Resel all history
            </Button>
          </Box>
        </>
      );
    }

    return (
      <Alert severity="info">
        There is no game history yet
      </Alert>
    )
  }, [isLoading, isError, score])

  return (
    <AppLayout>
      {renderContent}
    </AppLayout>
  );
};

export default Score;



