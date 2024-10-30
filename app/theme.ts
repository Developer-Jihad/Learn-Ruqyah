// theme.ts
"use client";

import { createTheme, ThemeOptions } from "@mui/material/styles";

// Define common typography with specific font families
const commonTypography: ThemeOptions["typography"] = {
  fontFamily: "Noto Serif Bengali, sans-serif", // General fallback font
  h1: {
    fontFamily: "Lexend, sans-serif", // Main heading font
    fontWeight: 700,
    fontSize: "2.25rem", // Desktop
    "@media (max-width:1200px)": { fontSize: "2rem" }, // Tablet
    "@media (max-width:900px)": { fontSize: "1.75rem" }, // Mobile
  },
  h2: {
    fontFamily: "Hind Siliguri, sans-serif", // Subheading font
    fontWeight: 700,
    fontSize: "2rem", // Desktop
    "@media (max-width:1200px)": { fontSize: "1.75rem" }, // Tablet
    "@media (max-width:900px)": { fontSize: "1.5rem" }, // Mobile
    color: "#66BB6A",
  },
  h3: {
    fontFamily: "Hind Siliguri, sans-serif", // Lexend font for smaller headings
    fontWeight: 600,
    fontSize: "1.75rem", // Desktop
    "@media (max-width:1200px)": { fontSize: "1.5rem" }, // Tablet
    "@media (max-width:900px)": { fontSize: "1.3rem" }, // Mobile
  },
  h4: {
    fontFamily: "Lexend, sans-serif", // Font for Bengali text
    fontWeight: 600,
    fontSize: "1.25rem", // Desktop
    "@media (max-width:1200px)": { fontSize: "1.1rem" }, // Tablet
    "@media (max-width:900px)": { fontSize: "1rem" }, // Mobile
  },
  h5: {
    fontFamily: "Hind Siliguri, sans-serif",
    fontWeight: 500,
    fontSize: "1.1rem", // Desktop
    "@media (max-width:1200px)": { fontSize: "1rem" }, // Tablet
    "@media (max-width:900px)": { fontSize: "0.9rem" }, // Mobile
  },
  body1: {
    fontFamily: "Noto Serif Bengali, sans-serif", // General body text font
    fontSize: "1rem", // Desktop
    "@media (max-width:1200px)": { fontSize: "0.95rem" }, // Tablet
    "@media (max-width:900px)": { fontSize: "0.90rem" }, // Mobile
    fontWeight: 400,
    lineHeight: 2,
  },
  body2: {
    fontFamily: "Noto Serif Bengali, sans-serif", // Different font for secondary text
    fontSize: "0.875rem", // Desktop
    "@media (max-width:1200px)": { fontSize: "0.85rem" }, // Tablet
    "@media (max-width:900px)": { fontSize: "0.8rem" }, // Mobile
    fontWeight: 400,
    lineHeight: 2,
  },
  button: {
    fontFamily: "Lexend, sans-serif", // Font for button text
    fontWeight: 500,
    fontSize: "0.9rem",
    textTransform: "uppercase",
  },
};

// Light theme
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#66BB6A",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#1B5E20",
      contrastText: "#ffffff",
    },
    background: {
      default: "#ffffff",
      paper: "#f4f4f4",
    },
    text: {
      primary: "#333333",
      secondary: "#555555",
    },
    warning: {
      main: "#e69138",
    },
  },
  typography: commonTypography,
});

// Dark theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#66BB6A",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#9e9e9e",
      contrastText: "#ffffff",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#bbbbbb",
    },
    warning: {
      main: "#ffa726",
    },
  },
  typography: commonTypography,
});

export { lightTheme, darkTheme };
