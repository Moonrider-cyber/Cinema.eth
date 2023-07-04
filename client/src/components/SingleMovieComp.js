import React, { useCallback, useEffect, useState, useContext } from "react";
import { SingleMovieLoding } from "./Loding.js";
import Link from "next/link";
import Image from "next/image";
import { ReviewComp } from "./layout/ReviewComp";
import { useRouter } from "next/navigation";
import AuthContext from "../utils/AuthContext";
import { toast } from 'react-toastify';

const SingleMovieComp = ({ movieid, seriesid }) => {
  const { isLogged, contract, address } = useContext(AuthContext);
  
  const [movieloading, setMovieLoading] = useState(true);
  const [moviedetails, setMoviedetails] = useState();
  const [featcherr, setFeatcherr] = useState(false);
  
  const [isReview, setIsReview] = useState(false);
  const [Ratingdetails,setRatingdetails] = useState({
    totalRate:0,
    avgRate:0
  });
  
    
  const router = useRouter();

  const fetchData = useCallback(async () => {
    try {
      const url = `https://api.themoviedb.org/3/${movieid ? "movie" : "tv"}/${
        movieid ? movieid : seriesid
      }?api_key=${
        process.env.THEMOVIEDB_API_KEY
      }&language=en-US&page=1&append_to_response=videos,images,credits,reviews,external_ids`;

      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setMoviedetails(data);
          setMovieLoading(false);
        });
    } catch (err) {
      toast("Something went wrong!");
      setFeatcherr(true);
      console.error("failed to fetch data in SingleMovieComp",err);
    }
  }, [movieid, seriesid]);
  
  
  const getmovierating = useCallback(async () => {
    if(contract != null){
      await contract.getMovieRating(movieid)
      .then((res)=>{
        setRatingdetails({
          totalRate:parseInt(res[1]),
          avgRate:parseInt(res[2])
        })
      })
      .catch((err)=>{
        toast("Something went wrong!");
        console.error("error getting while single movie getting rating",err);
      })
    }
  },[contract, movieid]);
  
  const checkAlreadyRated = useCallback(async () => {
    if(address != null){
      await contract.checkRatingExists(movieid, address)
      .then((res)=>{
        setIsReview(res);
      })
      .catch((err)=>{
        toast("Something went wrong!");
        console.error("error while checking user already rated",err);
      })
    }
  },[address, contract, movieid]);
  
  useEffect(() => {  
    fetchData();
    getmovierating();
  }, [contract, fetchData, getmovierating, movieid, seriesid]);
  
  useEffect(() => {
    if(isLogged){
      checkAlreadyRated();
    }
  }, [address, checkAlreadyRated, isLogged]);
  
  const handle_retry = useCallback(() => {
    setFeatcherr(false);
    fetchData();
  }, [fetchData]);

  return (
    <>
      {featcherr ? (
        <div className="container mx-auto px-4 py-16">
          <div className="text-center text-2xl"> Something went wrong</div>
          {/* try data featch again */}
          <div className="text-center mt-4">
            <button
              className="bg-orange-500 text-gray-900 px-4 py-2 rounded hover:bg-orange-600 transition ease-in-out duration-150"
              onClick={handle_retry}
            >
              Try Again
            </button>
            <button
              className="ml-5 bg-orange-500 text-gray-900 px-4 py-2 rounded hover:bg-orange-600 transition ease-in-out duration-150"
              onClick={() => router.push("/")}
            >
              Go Home
            </button>
          </div>
        </div>
      ) : (
        <>
          <div>
            {movieloading ? (
              <SingleMovieLoding />
            ) : (
              <div className="md:container mx-auto movie-info border-b border-gray-800 px-4 py-16 flex flex-col md:flex-row">
                <div className="flex-none self-center">
                  <Image
                    placeholder="blur"
                    blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYGBgYHBwYJCgkKCQ0MCwsMDRQODw4PDhQfExYTExYTHxshGxkbIRsxJiIiJjE4Ly0vOEQ9PURWUVZwcJYBBgYGBgYGBgcHBgkKCQoJDQwLCwwNFA4PDg8OFB8TFhMTFhMfGyEbGRshGzEmIiImMTgvLS84RD09RFZRVnBwlv/CABEIBzEDUgMBIQACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAAB//aAAgBAQAAAACWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAP/2gAIAQIQAAAAuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAP/2gAIAQMQAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/8QAFBABAAAAAAAAAAAAAAAAAAAA4P/aAAgBAQABPwBBG//EABQRAQAAAAAAAAAAAAAAAAAAAND/2gAIAQIBAT8AQuv/xAAUEQEAAAAAAAAAAAAAAAAAAADQ/9oACAEDAQE/AELr/9k='
                    loader={({ src }) =>
                      `https://image.tmdb.org/t/p/w500${src}`
                    }
                    src={`https://image.tmdb.org/t/p/w500${
                      moviedetails && moviedetails.poster_path
                    }`}
                    alt="movie poster"
                    className="w-64 lg:w-96"
                    width={500}
                    height={750}
                    priority={true}
                  />
                </div>
                <div className="md:ml-24 md:text-left text-center">
                  <h2 className="text-3xl mt-4 md:mt-0 font-bold">
                    {seriesid
                      ? moviedetails && moviedetails.name
                      : moviedetails && moviedetails.title}
                    <span className="font-medium">
                      {moviedetails && moviedetails.release_date === undefined
                        ? ""
                        : " (" +
                          new Date(
                            moviedetails && moviedetails.release_date
                          ).getFullYear() +
                          ")"}
                    </span>
                  </h2>

                  <div className="flex flex-wrap items-center text-gray-400 text-sm pt-3 md:justify-start justify-center">
                    <span className="ml-1">
                      {moviedetails && moviedetails.status}
                    </span>
                    <span className="mx-2">|</span>
                    <span>
                      {seriesid
                        ? moviedetails && moviedetails.first_air_date
                        : moviedetails && moviedetails.release_date}
                    </span>
                    <span className="mx-2">|</span>
                    <span>
                      {seriesid
                        ? moviedetails &&
                          moviedetails.number_of_seasons + " season"
                        : moviedetails && moviedetails.runtime + " min"}{" "}
                    </span>
                    <span className="mx-2">|</span>
                    <span>
                      {moviedetails &&
                        moviedetails.genres.map((genre, index) => (
                          <span key={index}>
                            {genre.name}{" "}
                            {index === moviedetails.genres.length - 1
                              ? ""
                              : ", "}
                          </span>
                        ))}
                    </span>
                  </div>

                  <div className="flex gap-10 md:justify-start justify-center">
                    {/* tmdb rating*/}
                    <div className="flex items-center mt-4">
                      <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-2xl font-bold">
                        {moviedetails && moviedetails.vote_average.toFixed(1)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm text-gray-400">TMDB Rating</div>
                        <div className="flex items-center text-sm text-gray-400">
                          <svg
                            className="fill-current text-orange-500 w-4"
                            viewBox="0 0 24 24"
                          >
                            <g data-name="Layer 2">
                              <path
                                d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
                                data-name="star"
                              ></path>
                            </g>
                          </svg>
                          <span className="ml-1">
                            {moviedetails &&
                              moviedetails.vote_average.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Movie Cinema rating */}
                    <div className="flex items-center mt-4">
                      <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-2xl font-bold">
                        {Ratingdetails.avgRate}.0
                      </div>
                      <div className="ml-4">
                        <div className="text-sm text-gray-400">
                          Movie Cinema Rating
                        </div>
                        <div className="flex items-center text-sm text-gray-400">
                          <svg
                            className="fill-current text-orange-500 w-4"
                            viewBox="0 0 24 24"
                          >
                            <g data-name="Layer 2">
                              <path
                                d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
                                data-name="star"
                              ></path>
                            </g>
                          </svg>
                          <span className="ml-1">
                            {Ratingdetails && Ratingdetails.avgRate}.0 
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mt-7 md:pr-20 line-clamp-5">
                    {" "}
                    {/* {console.log(moviedetails)} */}
                    {moviedetails && moviedetails.overview}
                  </p>

                  <div className="mt-8">
                    <div className="flex mt-2">
                      {moviedetails &&
                        moviedetails.credits.crew
                          .slice(0, 4)
                          .map((crew, key) => (
                            <div className="mr-8" key={key}>
                              <div>{crew.name}</div>
                              <div className="text-sm text-gray-400">
                                {crew.job}
                              </div>
                            </div>
                          ))}
                    </div>
                  </div>

                  <div className="flex gap-14 md:mt-8 md:justify-start justify-center">
                    {/* trailer button */}
                    {moviedetails && moviedetails.videos.results.length > 0 && (
                      <div>
                        {/* youtube trailer link   */}

                        <button className="bg-orange-500 text-gray-900 rounded font-semibold px-5 py-4 hover:bg-orange-600 transition ease-in-out duration-150">
                          <Link
                            href={`https://www.youtube.com/watch?v=${
                              moviedetails &&
                              moviedetails.videos.results.length > 0 &&
                              moviedetails.videos.results[
                                moviedetails.videos.results.length - 1
                              ].key
                            }`}
                            target="_blank"
                            className="flex items-center"
                          >
                            <svg
                              className="w-6 fill-current"
                              viewBox="0 0 24 24"
                            >
                              <path d="M0 0h24v24H0z" fill="none"></path>
                              <path d="M9 16.5v-9l7 4.5-7 4.5z"></path>
                            </svg>
                            <span className="ml-2">Play Trailer</span>
                          </Link>
                        </button>
                      </div>
                    )}
                      <a href={"#cast"} >
                    <button className="bg-orange-500 flex h-full items-center text-gray-900 rounded font-semibold px-4 py-2 hover:bg-orange-600 transition ease-in-out duration-150">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#2c2121"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="bevel"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <span className="ml-2">Movie cast</span>
                    </button>
                      </a>
                  </div>
                </div>
              </div>
            )}

            <ReviewComp moviedetails={moviedetails} isReview={isReview} setIsReview={setIsReview} />
          </div>
          <div className="border-b border-gray-800" id="cast">
            <div className="md:container mx-auto px-4 py-5">
              <h2 className="text-4xl font-semibold flex">
                <div className="mr-3 w-1 bg-yellow-400"></div> Top Cast
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                {moviedetails &&
                  moviedetails.credits &&
                  moviedetails.credits.cast.slice(0, 12).map(
                    (cast, index) =>
                      cast.profile_path && (
                        <div className="mt-8" key={index}>
                          <Link href="/">
                            <Image
                              width={200}
                              height={200}
                              loader={({ src }) =>
                                `https://image.tmdb.org/t/p/w185${src}`
                              }
                              src={`https://image.tmdb.org/t/p/w185${cast.profile_path}`}
                              alt="cast"
                              priority={false}
                              className="hover:opacity-75 transition ease-in-out duration-150"
                            />
                          </Link>
                          <div className="mt-2">
                            <Link
                              href="/"
                              className="text-lg mt-2 hover:text-gray:300"
                            >
                              {cast.name}
                            </Link>
                            <div className="text-sm text-gray-400">
                              {cast.character}
                            </div>
                          </div>
                        </div>
                      )
                  )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SingleMovieComp;
