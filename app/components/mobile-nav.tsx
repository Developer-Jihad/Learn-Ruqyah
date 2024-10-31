// MobileBottomNav.js
'use client'

import React, { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import DescriptionIcon from '@mui/icons-material/Description';
import HealingIcon from '@mui/icons-material/Healing';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import Link from 'next/link';
import { useTheme, useMediaQuery } from '@mui/material';
import { useThemeToggle } from "../themeContext"; // Adjust path as needed


const navItems = [
  { label: 'Docs', path: '/docs', icon: <DescriptionIcon /> },
  { label: 'Videos', path: '/videos', icon: <VideoLibraryIcon /> },
  { label: 'Home', path: '/', icon: <HomeIcon /> },
  { label: 'ডায়াগনোসিস', path: '/diagnosis', icon: <HealingIcon /> },
  { label: 'Ruqy', path: '/ruqy', icon: <PermPhoneMsgIcon /> },
];

const MobileBottomNav = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:600px)');
  const { toggleTheme, isDarkMode } = useThemeToggle();


  if (!isMobile) return null; // Only render on mobile view

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '35px',
        // height: "70px",
        borderTop: `1px solid ${theme.palette.divider}`,
        backgroundColor: isDarkMode ? "rgba(10, 20, 30, 0.9)" : "rgba(255, 255, 255, 0.9)",
        backdropFilter: 'blur(10px)', // Match AppBar's blur effect
        zIndex: 1000,
      }}
    >
      {navItems.map((item, index) => (
        <BottomNavigationAction
          key={item.label}
          label={item.label}
          icon={item.icon}
          component={Link}
          href={item.path}
          onClick={() => setValue(index)}
          sx={{
            color: value === index ? theme.palette.primary.main : theme.palette.text.secondary,
            '& .MuiBottomNavigationAction-label': {
              fontFamily: "'Noto Serif Bengali', sans-serif", // Set to Noto Serif Bengali
              fontSize: theme.typography.button.fontSize,
              fontWeight: theme.typography.button.fontWeight,
              color: value === index ? theme.palette.primary.main : theme.palette.text.secondary,
            },
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            },
          }}
        />
      ))}
    </BottomNavigation>
  );
};

export default MobileBottomNav;
