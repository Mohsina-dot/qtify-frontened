import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function SongCard({ image, title, subtitle }) {
  return (
    <Card sx={{ width: 180, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="180"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography variant="subtitle1" noWrap>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SongCard;
