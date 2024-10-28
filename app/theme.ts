// theme.js or theme.ts
"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  
  palette: {
    primary: {
      main: "#333", // Customize the primary color
    },
    secondary: {
      main: "#555555", // Customize the secondary color
    },
    text: {
      primary: "#333333", // Customize the primary text color
      secondary: "#555555", // Customize the secondary text color
    },
    warning: {
      main: "#ffa726", // Customize the warning color
    },
    background: {
      default: "#ffffff", // Default background color
      paper: "#f4f4f4", // Paper background color
    },
  },
  typography: {
    fontFamily: [
      "Hind Siliguri",
      "Gentium Basic",
      "Noto Serif Bengali",
      "Lexend",
      "Arial",
      "sans-serif",
    ].join(","),
    h1: {
      fontFamily: "Lexend, sans-serif",
      fontWeight: 700,
      fontSize: "2.5rem",
    },
    h2: {
      fontFamily: "Hind Siliguri, sans-serif",
      fontWeight: 700,
      fontSize: "1.5rem",
      color: "#66BB6A",
    },
    h3: {
      fontFamily: "Gentium Basic, serif",
      fontWeight: 700,
      fontSize: "1rem",
    },
    h4: {
      fontFamily: "Hind Siliguri, sans-serif",
      fontWeight: 700,
      fontSize: "1rem",
      
    },
    h5: {
      fontFamily: "Lexend, sans-serif",
      fontWeight: 400,
      fontSize: "1.1rem",
      lineHeight: 2,
    },
    body1: {
      fontFamily: "Noto Serif Bengali, serif",
      fontWeight: 400,
      fontSize: ".93rem",
      lineHeight: 1.7,
    },
    body2: {
      fontFamily: "Noto Serif Bengali, serif",
      fontWeight: 400,
      fontSize: ".8rem",
      lineHeight: 2,
      color: "white"
    },
    // body1: {
    //   fontFamily: "Noto Serif Bengali, serif",
    //   fontWeight: 400,
    //   fontSize: ".93rem",
    //   lineHeight: 1.7,
    // },
    // body2: {
    //   fontFamily: "Gentium Basic, serif",
    //   fontWeight: 400,
    // },
  },
});

export default theme;
