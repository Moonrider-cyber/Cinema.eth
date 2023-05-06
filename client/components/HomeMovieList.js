import { MovieCard } from "./MovieCard";
import axios from "axios";
import { useEffect } from "react";
import Image from "next/image";
import Carousel from "./layout/Carousel";

const noresultimg = require("../asset/noresult.png");

const HomeMovieList = ({ moviedata, setMoviedata }) => {
  const fetchData = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.THEMOVIEDB_API_KEY}&language=en-US&page=1`;
    await axios
      .get(url)
      .then((res) => {
        console.log("got it");
        setMoviedata(res.data);
      })
      .catch((err) => {
        console.log("catch error:-", err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* movie list */}
      {/* <h1 className="mt-10 mb-5 text-5xl font-bold text-center">
        Popular Movies
      </h1> */}

      {/* {moviedata && moviedata.total_results !== 0 ? (
        <div className="gap-x-2 mx-20 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
          {moviedata && moviedata.results &&
            moviedata.results.map((movie) =>
              movie.poster_path === null ? null : (
                <MovieCard key={movie.id} movie={movie} />
              )
            )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <Image src={noresultimg} alt="no result" className="w-96 h-96" />
          <h1 className="text-3xl font-bold">No Result Found</h1>
        </div>
      )} */}
      {moviedata && moviedata.total_results !== 0 ? (
        <div>
          <Carousel moviedata={moviedata} />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <Image src={noresultimg} alt="no result" className="w-96 h-96" />
          <h1 className="text-3xl font-bold">No Result Found</h1>
        </div>
      )}
    </>
  );
};

export default HomeMovieList;
