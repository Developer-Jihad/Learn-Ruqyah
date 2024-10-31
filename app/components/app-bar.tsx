"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import DescriptionIcon from '@mui/icons-material/Description';
import HealingIcon from '@mui/icons-material/Healing';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import { useThemeToggle } from '../themeContext'; // Adjust path as needed
import { useTheme, useMediaQuery } from '@mui/material';
import logo from '@/public/logo.png';

interface NavItem {
  label: string;
  path: string;
  icon: JSX.Element;
}

const drawerWidth = 200;
const navItems: NavItem[] = [
  { label: 'Docs', path: '/docs', icon: <DescriptionIcon /> },
  { label: 'Videos', path: '/videos', icon: <VideoLibraryIcon /> },
  { label: 'Home', path: '/', icon: <HomeIcon /> },
  { label: 'ডায়াগনোসিস', path: '/diagnosis', icon: <HealingIcon /> },
  { label: 'Ruqy', path: '/ruqy', icon: <PermPhoneMsgIcon /> },
];

export default function UnifiedAppBar() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('/');
  const { toggleTheme, isDarkMode } = useThemeToggle();
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavClick = (path: string) => {
    setActiveTab(path);
    setMobileOpen(false);
  };

  const container = undefined;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h4" sx={{ my: 2, color: isDarkMode ? '#fff' : '#333' }}>
        Learn Ruqyah
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label}>
            <ListItemButton
              component={Link}
              href={item.path}
              onClick={() => handleNavClick(item.path)}
              sx={{
                bgcolor: isDarkMode ? '#333' : '#fff',
                textAlign: 'center',
                borderRadius: '5px',
                border: activeTab !== item.path ? theme.palette.primary.main : (isDarkMode ? '1px solid #66BB6A' : '1px solid #66BB6A'),
                color: activeTab === item.path ? theme.palette.primary.main : (isDarkMode ? '#fff' : '#333'),
                '&:hover': {
                  backgroundColor: isDarkMode ? '#555' : '#CBF5DD',
                },
              }}
            >
              <ListItemText
                sx={{
                  fontFamily: 'Lexend, sans-serif',
                  '& .MuiTypography-root': {
                    fontFamily: 'Lexend, sans-serif',
                    fontWeight: 'bold',
                  },
                }}
                primary={item.label}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ maxWidth: '1200px' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backdropFilter: 'blur(10px)',
          borderBottom: `1px solid ${theme.palette.divider}`,
          backgroundColor: isDarkMode ? 'rgba(05, 10, 20, 08)' : 'rgba(255, 255, 255, 0.8)',
        }}
      >
        <Container disableGutters>
          <Toolbar>
            <Link href="/">
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: '100%',
                }}
              >
                <Image src={logo} alt="Ruqyah logo" width={20} height={21} />
              </Box>
            </Link>

            <Typography
              variant="h4"
              component="div"
              sx={{ flexGrow: 1, ml: 1, color: isDarkMode ? '#fff' : '#333' }}
            >
              <Link href="/">Learn Ruqyah</Link>
            </Typography>

            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  href={item.path}
                  onClick={() => handleNavClick(item.path)}
                  sx={{
                    borderRadius:'0px',
                    borderBottom: activeTab !== item.path ? theme.palette.primary.main : (isDarkMode ? '3px solid #66BB6A' : '3px solid #66BB6A'),
                    color: activeTab === item.path ? theme.palette.primary.main : (isDarkMode ? '#fff' : '#333'),
                    '&:hover': {
                      borderRadius:'5px',
                      backgroundColor: isDarkMode
                        ? '#CBF5DD'
                        : '#CBF5DD',
                    },
                    fontFamily: 'Lexend, sans-serif',
                    px: 3,
                    fontWeight: 'bold',
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            <IconButton edge="end" color="inherit" onClick={toggleTheme}>
              {isDarkMode ? <LightModeIcon /> : <DarkModeIcon sx={{ color: '#333' }} />}
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' }, ml: 1 }}
            >
              {isDarkMode ? <MenuIcon /> : <MenuIcon sx={{ color: '#333' }} />}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backdropFilter: 'blur(10px)',
              backgroundColor: isDarkMode ? 'rgba(05, 10, 20, 08)' : 'rgba(255, 255, 255, 0.8)',
              color: isDarkMode ? '#fff' : '#333',
              height: '100vh',
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      {isMobile && (
        <BottomNavigation
        
          value={activeTab}
          onChange={(event, newValue) => setActiveTab(newValue)}
          style={{
            padding: '35px',
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            borderTop: `1px solid ${theme.palette.divider}`,
            backgroundColor: isDarkMode ? 'rgba(10, 20, 30, 0.8)' : 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            zIndex: 1000,
          }}
        >
          {navItems.map((item) => (
            <BottomNavigationAction
              key={item.label}
              label={item.label}
              value={item.path}
              icon={item.icon}
              component={Link}
              href={item.path}
              onClick={() => setActiveTab(item.path)}
              
              sx={{
                color: activeTab === item.path ? theme.palette.primary.main : theme.palette.text.secondary,
                '& .MuiBottomNavigationAction-label': {
                  fontFamily: "'Noto Serif Bengali', sans-serif",
                  fontSize: theme.typography.button.fontSize,
                  fontWeight: theme.typography.button.fontWeight,
                  color: activeTab === item.path ? theme.palette.primary.main : theme.palette.text.secondary,
                },
                // '&:hover': {
                //   backgroundColor: theme.palette.action.hover,
                // },
              }}
            />
          ))}
        </BottomNavigation>
      )}

      <Toolbar />
    </Box>
  );
}
