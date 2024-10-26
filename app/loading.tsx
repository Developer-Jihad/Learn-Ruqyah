import React from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';

const LoadingPage: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        bgcolor: '#f5f5f5',
      }}
    >
      <CircularProgress size={60} thickness={5} sx={{ color: '#66BB6A', marginBottom: 3 }} />
      <Typography variant="h6" sx={{ color: '#66BB6A' }}>
        Loading, please wait...
      </Typography>
    </Box>
  );
};

export default LoadingPage;