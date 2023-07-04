import { MovieCard } from "./MovieCard";
import { useEffect, useState } from "react";
import Image from "next/image";
import MovieCarousel, { SeriesCarousel } from "./layout/MovieCarousel";
import {
  HeroImgLoading,
  HomeCarouselLoding,
  HomeMovieListLoding,
} from "./Loding";

const noresultimg = require("../asset/noresult.png");

const HomeMovieList = ({ moviedata, Loading, setMovieSort }) => {
  return (
    <>
      {Loading ? (
        <HomeCarouselLoding />
      ) : (
        moviedata &&
        moviedata.total_results !== 0 && (
          <div>
            <MovieCarousel moviedata={moviedata} Loading={Loading} setMovieSort={setMovieSort} />
          </div>
        )
      )}
    </>
  );
};

export default HomeMovieList;

export const HomeSeriesList = ({ seriesdata, Loading }) => {
  return (
    <>
      {Loading ? (
        <HomeCarouselLoding />
      ) : (
        seriesdata &&
        seriesdata.total_results !== 0 && (
          <div>
            <SeriesCarousel seriesdata={seriesdata} Loading={Loading} />
          </div>
        )
      )}
    </>
  );
};

export const SearchMovieList = ({
  searchtext,
  searchmoviedata,
  setsearchMoviedata,
}) => {
  const [movieloading, setMovieLoading] = useState(true);

  useEffect(() => {
    const fetchsearchData = async () => {
      let urlencode = encodeURI(searchtext);
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.THEMOVIEDB_API_KEY}&page=1&query=${urlencode}&limit=10`;

      const res = await fetch(url);

      if (!res.ok) {
        console.log("Failed to fetch data");
      }
      const data = await res.json();
      setsearchMoviedata(data);
      setMovieLoading(false);
    };
    fetchsearchData();
  }, [searchtext, setsearchMoviedata]);

  return (
    <>
      <h1 className="my-10 text-5xl font-bold text-center">
        Search Movies For {searchtext}
      </h1>

      {searchmoviedata && searchmoviedata.total_results !== 0 ? (
        <div className="gap-x-10 gap-y-10 mx-20 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
          {searchmoviedata &&
            searchmoviedata.results &&
            searchmoviedata.results.map((movie, key) =>
              movie.poster_path === null ? null : (
                <MovieCard key={key} movie={movie} />
              )
            )}
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
