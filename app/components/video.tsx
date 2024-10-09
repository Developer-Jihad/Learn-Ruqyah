import { Box } from "@mui/material";
import React from "react";

interface VideoProps {
  url: string;
}

export default function Video({ url }: VideoProps) {
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
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
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