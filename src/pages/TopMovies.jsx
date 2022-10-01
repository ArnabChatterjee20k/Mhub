import React, { useState, useEffect, useCallback } from "react";
import MovieCard from "../components/MovieCard";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { fetchTopMovies } from "../utils/networkCall";
import CardSkeleton from "../components/CardSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import Progressbar from "../components/Progressbar";
import FilterComponent from "../components/FilterComponent";

const TopMovies = () => {
  const [movies, setMovies] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const [with_original_language,setWith_original_language] = useState("")
  const [language,setLanguage] = useState("")

  const fetchMovies = useCallback(() => {
    const movies = fetchTopMovies({page:nextPage});
    movies.then(
      (data) => {
        setMovies((collection) => collection.concat(data.results));
        setNextPage((page) => page + 1);
      },
      [nextPage]
    );
  });
  useEffect(() => {
    fetchMovies();
  }, []);

  const max_pages = import.meta.env.VITE_API_PAGE_LIMIT;

  return (
    <>
    <InfiniteScroll
      scrollableTarget="#container"
      style={{
        overflow: "none",
      }}
      dataLength={movies.length}
      hasMore={nextPage <= max_pages}
      next={fetchMovies}
      loader={<Progressbar />}
    >
      <Grid2 container spacing={4} rowGap={3}>
        {movies.length === 0 ? (
          // while fetching for first time showing the skeleton cards
          <>
            <Grid2 xs={12} sm={6} md={3} justifyContent={"center"}>
              <CardSkeleton />
            </Grid2>
            <Grid2 xs={12} sm={6} md={3} justifyContent={"center"}>
              <CardSkeleton />
            </Grid2>
            <Grid2 xs={12} sm={6} md={3} justifyContent={"center"}>
              <CardSkeleton />
            </Grid2>
          </>
        ) : (
          movies.map((movie) => (
            <Grid2 xs={12} sm={6} md={3} justifyContent={"center"}>
              <MovieCard movie={movie} />
            </Grid2>
          ))
        )}
      </Grid2>
    </InfiniteScroll>
    </>
  );
};

export default TopMovies;
