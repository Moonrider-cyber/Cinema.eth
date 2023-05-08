import { MovieCard } from "./MovieCard";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import MovieCarousel, { SeriesCarousel } from "./layout/MovieCarousel";
import Loding from "./Loding";

const noresultimg = require("../asset/noresult.png");

const HomeMovieList = ({ moviedata, setMoviedata }) => {
  
  
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.THEMOVIEDB_API_KEY}&language=en-US&page=1`;
      await axios
        .get(url)
        .then((res) => {
          setMoviedata(res.data);
        })
        .catch((err) => {
          console.log("catch error:-", err);
        });true
    };
    fetchData();
  }, [setMoviedata]);

  return (
    <>
      {moviedata && moviedata.total_results !== 0 && (
        <div>
          <MovieCarousel moviedata={moviedata} />
        </div>
      )}
    </>
  );
};

export default HomeMovieList;




export const HomeSeriesList = ({ seriesdata, setSeriesdata }) => {
  
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.THEMOVIEDB_API_KEY}&language=en-US&page=1`;
      await axios
        .get(url)
        .then((res) => {
          setSeriesdata(res.data);
        })
        .catch((err) => {
          console.log("catch error:-", err);
        });
    };
    fetchData();
  }, [setSeriesdata]);

  return (
    <>
      {seriesdata && seriesdata.total_results !== 0 && (
        <div>
          <SeriesCarousel seriesdata={seriesdata} />
        </div>
      )}
    </>
  );
};

export const SearchMovieList = ({ searchtext, searchmoviedata, setsearchMoviedata }) => {

  const [movieloading, setMovieLoading] = useState(true);

  
  useEffect(() => {
    const fetchsearchData = async () => {
      let urlencode = encodeURI(searchtext);    
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.THEMOVIEDB_API_KEY}&page=1&query=${urlencode}&limit=10`;
        await axios.get(url)
        .then(res => {
            if(res.data.results.length === 0){
              setsearchMoviedata([]);
            }
            setsearchMoviedata(res.data);
            setMovieLoading(false);
        })
        .catch((err) => {
          console.log("catch error:-", err);
        });
    };
    fetchsearchData();
  }, [searchtext, setsearchMoviedata]);

  
  return (
    <>
    
      <h1 className="mt-10 mb-5 text-5xl font-bold text-center">
        Search Movies For {searchtext}
      </h1>

      {
      movieloading ? (<Loding />) :  
      searchmoviedata && searchmoviedata.total_results !== 0 ? (
        <div className="gap-x-2 mx-20 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
          {searchmoviedata && searchmoviedata.results &&
            searchmoviedata.results.map((movie,key) =>
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
      )  
       }
    </>
  );
}