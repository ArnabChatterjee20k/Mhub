import React, { useState, useEffect, useRef } from "react";
import MovieCard from "../components/MovieCard";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { fetchTopMovies } from "../utils/networkCall";
import CardSkeleton from "../components/CardSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import Progressbar from "../components/Progressbar";
import { useFilter } from "../context/FIlterContext/FilterContextProvider";

const TopMovies = () => {
  const [movies, setMovies] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const { filter } = useFilter();
  const filterRef = useRef(false)
  console.log("🚀 ~ file: TopMovies.jsx ~ line 15 ~ TopMovies ~ filterRef", filterRef)

  const fetchMovies = (signal,defaultPage)=>{
    const movies = fetchTopMovies(nextPage, filter, signal,defaultPage);
      movies.then((data) => {
        setMovies((collection) => collection.concat(data.results));
        setNextPage(page=>page+1)
      });
  }

  // we dont have to run
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    
    fetchMovies(signal);
    return () => {
      controller.abort();
    };

  }, []);

  useEffect(()=>{
    // so that the request is not made after the mount of the component. 
    // After mount filterRef will be true and then with change in filter the request can be made
    if(filterRef.current){
      const controller = new AbortController();
      const signal = controller.signal;
      setMovies([])
      setNextPage(1)
      fetchMovies(signal,true); // default is set true as setNextPage will take time to get updated. So to fetch from first page
      return () => {
        controller.abort();
      };
    }
    filterRef.current = true
  },[filter])

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
            movies.map((movie,id) => (
              <Grid2 xs={12} sm={6} md={3} key={id} justifyContent={"center"}>
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
