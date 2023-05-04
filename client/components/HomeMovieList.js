import { MovieCard } from "./MovieCard";
import axios from 'axios';
import { useEffect, useState } from "react";

const HomeMovieList = ({moviedata,setMoviedata}) => {

   
    const fetchData = async () => {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.THEMOVIEDB_API_KEY}&language=en-US&page=1&limit=10`;
      const res = await axios.get(url);
      setMoviedata(res.data);
    }
    useEffect(() => {
      fetchData();
    }, [])
  

  return (
    <>
      {/* movie list */}
      <h1 className="mt-10 mb-5 text-5xl font-bold text-center">Popular Movies</h1>
      <div className="gap-x-2 mx-20 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
        {moviedata &&
          moviedata.results.map((movie) => (
            movie.poster_path === null ? null :
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </>
  );
};

export default HomeMovieList;
