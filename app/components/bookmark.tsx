import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Link,
} from "@mui/material";

export default function Bookmark({ title, description, url, coverImage }) {
  return (
    <Card sx={{ maxWidth: 345, height: '100%' }}>
      <CardActionArea
        component="a"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Cover Image */}
        <CardMedia
          component="img"
          height="170"
          image={coverImage}
          alt={title}
        />
        {/* Content */}
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" py={1}>
            <b>{title}</b>
          </Typography>
          
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          {/* <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
          >
            {url}
          </Link> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
