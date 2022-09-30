import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";

const MovieCard = ({ movie }) => {
  return (
    <Badge badgeContent={movie.vote_average} color="warning">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          src={`https://www.themoviedb.org/t/p/w500/${movie.backdrop_path}`}
          component="img"
          height={145}
          sx={{ maxWidth: "100%" }}
        />
        <CardContent>
          <Typography variant="h5">{movie.title}</Typography>
          <Typography variant="body2" marginTop={1} color="text.secondary">
            {movie["overview"].slice(0, 100)}....
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Badge>
  );
};

export default MovieCard;
