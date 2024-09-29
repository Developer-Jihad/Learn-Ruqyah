import { Box } from "@mui/material";
import React from "react";

export default function Video({ url }) {
  return (
    <Box
      sx={{
        position: "relative",
        paddingBottom: "56.25%",
        overflow: "hidden",
        maxWidth: "100%",
        height: '100%'
      }}
    >
      <iframe
        width="1236"
        height="695"
        src={url}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: "7px",
        }}
      />
    </Box>
  );
}


// sx={{
//   height: {
//     xs: "130%", 
//     sm: "130%", 
//     md: "130%", 
//   },
// }}