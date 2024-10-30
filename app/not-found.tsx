// pages/404.tsx
"use client";

import React from 'react';
import { Box, Typography, Button, Container, useTheme } from '@mui/material';
import Link from 'next/link';
import "@fontsource/lexend";
import "@fontsource/noto-serif-bengali";

const NotFoundPage = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        padding: 3,
        borderRadius: 2,
        color: isDarkMode ? '#ffffff' : '#000000',
        transition: 'background-color 0.3s, color 0.3s',
      }}
    >
      <Typography
        variant="h1"
        fontFamily="'Lexend', sans-serif"
        gutterBottom
        sx={{ color: isDarkMode ? '#bb86fc' : '#3f51b5' }}
      >
        404
      </Typography>
      <Typography
        variant="h5"
        fontFamily="'Noto Serif Bengali', serif"
        gutterBottom
        sx={{ color: isDarkMode ? '#cfcfcf' : '#000000' }}
      >
        পৃষ্ঠাটি খুঁজে পাওয়া যায়নি
      </Typography>
      <Typography
        variant="body1"
        sx={{ marginBottom: 2, color: isDarkMode ? '#a5a5a5' : '#4a4a4a' }}
      >
        We can't find the page you're looking for. It may have been moved or deleted.
      </Typography>
      <Box mt={2}>
        <Link href="/" passHref>
          <Button
            variant="contained"
            color="primary"
            sx={{
              fontFamily: "'Lexend', sans-serif",
              backgroundColor: isDarkMode ? '#bb86fc' : '#3f51b5',
              '&:hover': {
                backgroundColor: isDarkMode ? '#9f6de0' : '#2c387e',
              },
            }}
          >
            Go Home
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
