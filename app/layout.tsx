// layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/hind-siliguri/400.css";
import "@fontsource/hind-siliguri/700.css";
import "@fontsource/gentium-basic/400.css";
import "@fontsource/gentium-basic/700.css";
import "@fontsource/noto-serif-bengali/400.css";
import "@fontsource/noto-serif-bengali/700.css";
import "@fontsource/lexend/400.css";
import "@fontsource/lexend/700.css";
import { Box } from "@mui/material";

import DrawerAppBar from "./components/app-bar";
import Footer from "./components/footer";
import { ThemeToggleProvider } from "./themeContext"; // Adjust the path
import CssBaseline from "@mui/material/CssBaseline";
import MobileBottomNav from "./components/mobile-nav";

export const metadata: Metadata = {
  title: "Learn Ruqyah",
  description: "Learn Ruqyah and Share the Knowledge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body>
        <ThemeToggleProvider>
          <CssBaseline />
          <DrawerAppBar />
          {children}
          <Footer />
          <Box sx={{display: { xs: "block", md: "none" }, height: '50px'}}/>
          {/* <MobileBottomNav/> */}
        </ThemeToggleProvider>
      </body>
    </html>
  );
}
