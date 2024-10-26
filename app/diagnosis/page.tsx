"use client";

import React, { useState } from 'react';
import { Container, Box, Typography, CircularProgress } from '@mui/material';

const Diagnosis: React.FC = () => {
  // State to manage loading of the iframe
  const [iframeLoading, setIframeLoading] = useState<boolean>(true);

  // Event handler to hide the loading spinner when iframe loads
  const handleIframeLoad = () => {
    setIframeLoading(false);
  };

  return (
    <Box
      mt={5}
      sx={{
        width: '100%',
        height: '120vh',
        overflow: 'hidden',
      }}
    >
      <Container>
        <Typography variant="body1" sx={{ marginBottom: 3, color: '#333', fontSize: '17px' }}>
          “সেলফ রুকইয়াহ ডায়াগনোসিস” অ্যাপের মাধ্যমে আপনি জিন, জাদু, বদনজর ইত্যাদি প্যারানরমাল সমস্যাগুলো খুব সহজে যাচাই করতে পারবেন। কমপক্ষে এটি সমস্যার ব্যাপারে ধারণা পেতে সহায়ক হবে। আর সমস্যা যাচাইয়ের পর অ্যাপ থেকে একটি প্রাথমিক পরামর্শও দিয়ে দেয়া হবে। বিষয়টা চমৎকার না?
        </Typography>
        <Box sx={{ position: 'relative', width: '100%', height: '100vh' }}>
          {iframeLoading && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                zIndex: 1,
              }}
            >
              <CircularProgress size={60} thickness={4.5} color="primary" />
            </Box>
          )}
          <iframe
            src="https://test.ruqyahbd.org/"
            title="Ruqyah Self Diagnosis Website"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              borderRadius: '10px',
            }}
            onLoad={handleIframeLoad}
            allowFullScreen
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Diagnosis;
