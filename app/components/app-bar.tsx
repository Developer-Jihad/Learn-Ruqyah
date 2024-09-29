"use client";

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
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import logo from "@/public/logo.png";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 200;
const navItems = ["Home", "Videos", "Docs", "Ruqy"];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h5" sx={{ my: 2, color: 'white' }}>
        Learn Ruqyah
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item}>
            <ListItemButton
              sx={{
                bgcolor: "#444",
                textAlign: "center",
                borderRadius: "5px",
                color: "white",
                "&:hover": {
                  backgroundColor: "#555",
                },
              }}
            >
              <ListItemText
                sx={{
                  fontFamily: "Lexend, sans-serif",
                  "& .MuiTypography-root": {
                    fontFamily: "Lexend, sans-serif",
                  },
                }}
                primary={item}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ maxWidth: "1200px" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
      >
        <Container disableGutters>
          <Toolbar>
            <Image src={logo} alt="Ruqyah logo" width={38} height={35} />
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1, ml: 1 }}
            >
              Learn Ruqyah
            </Typography>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                    fontFamily: "Lexend, sans-serif",
                    ml: 2,
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
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
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backdropFilter: "blur(10px)", backgroundColor: "rgba(0, 0, 0, 0.6)", height: '100vh'
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



