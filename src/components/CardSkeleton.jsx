import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Skeleton } from "@mui/material";
const CardSkeleton = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Skeleton variant="rectangular" width={345} height={140} />
      <CardContent>
        <Skeleton animation="wave" height={10} variant="rounded" />
      </CardContent>
    </Card>
  );
};

export default CardSkeleton;
