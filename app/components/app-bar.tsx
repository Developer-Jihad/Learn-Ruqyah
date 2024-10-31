"use client";

import Link from "next/link";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import LightMenuIcon from "@mui/icons-material/Menu";
import DarkMenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import logo from "@/public/logo.png";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useThemeToggle } from "../themeContext"; // Adjust path as needed

interface Props {
  window?: () => Window;
}

const drawerWidth = 200;
const navItems = [
  { label: "Home", path: "/" },
  { label: "Videos", path: "/videos" },
  { label: "Docs", path: "/docs" },
  { label: "ডায়াগনোসিস", path: "/diagnosis" },
  { label: "Ruqy", path: "/ruqy" },
];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { toggleTheme, isDarkMode } = useThemeToggle();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h4" sx={{ my: 2, color: isDarkMode ? "#fff" : "#333" }}>
        Learn Ruqyah
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label}>
            <ListItemButton
              component={Link}
              href={item.path}
              sx={{
                bgcolor: isDarkMode ? "#333" : "#fff",
                textAlign: "center",
                borderRadius: "5px",
                color: isDarkMode ? "#fff" : "#333",
                "&:hover": {
                  backgroundColor: isDarkMode ? "#555" : "#f0f0f0",
                },
              }}
            >
              <ListItemText
                sx={{
                  fontFamily: "Lexend, sans-serif",
                  "& .MuiTypography-root": {
                    fontFamily: "Lexend, sans-serif",
                    fontWeight:'bold'
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

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ maxWidth: "1200px" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backdropFilter: "blur(10px)",
          backgroundColor: isDarkMode ? "rgba(10, 20, 30, 0.9)" : "rgba(255, 255, 255, 0.9)",
          // borderBottom: isDarkMode ? "1px solid #fff" : "1px solid #333",
        }}
      >
        <Container disableGutters>
          <Toolbar>
            <Link href="/">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Image src={logo} alt="Ruqyah logo" width={20} height={21} />
              </Box>
            </Link>

            <Typography
              variant="h4"
              component="div"
              sx={{ flexGrow: 1, ml: 1, color: isDarkMode ? "#fff" : "#333" }}
            >
              <Link href="/">Learn Ruqyah</Link>
            </Typography>

            <Box sx={{ display: { xs: "none", md: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  href={item.path}
                  sx={{
                    color: isDarkMode ? "#fff" : "#333",
                    "&:hover": {
                      backgroundColor: isDarkMode
                        ? "rgba(255, 255, 255, 0.1)"
                        : "rgba(0, 0, 0, 0.1)",
                    },
                    fontFamily: "Lexend, sans-serif",
                    px: 3,
                    fontWeight: 'bold'
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
            {/* Theme Toggle Button */}
            <IconButton edge="end" color="inherit" onClick={toggleTheme}>
              {isDarkMode ? <LightModeIcon /> : <DarkModeIcon sx={{ color: "#333" }}/>}
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none"}, ml:1 }}
            >
              {isDarkMode ? <LightMenuIcon /> : <DarkMenuIcon sx={{ color: "#333" }}/>}
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
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backdropFilter: "blur(10px)",
              backgroundColor: isDarkMode ? "rgba(10, 20, 30, 0.9)" : "rgba(255, 255, 255, 0.9)",
              color: isDarkMode ? "#fff" : "#333",
              height: "100vh",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <Toolbar />
    </Box>
  );
}
