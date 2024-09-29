import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import '@fontsource/hind-siliguri/400.css'; // Normal weight
import '@fontsource/hind-siliguri/600.css'; // Bold weight
import '@fontsource/gentium-basic/400.css'; // Normal weight
import '@fontsource/gentium-basic/700.css'; // Bold weight
import '@fontsource/noto-serif-bengali/400.css'; // Normal weight
import '@fontsource/noto-serif-bengali/700.css'; // Bold weight
import '@fontsource/lexend/400.css'; // Normal weight
import '@fontsource/lexend/700.css'; // Bold weight

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme'; // Adjust the path as needed
// const inter = Inter({ subsets: ["latin"] });

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
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
