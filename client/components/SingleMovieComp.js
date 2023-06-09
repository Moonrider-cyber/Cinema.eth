import React, { useEffect, useState } from "react";
import axios from "axios";
import { SingleMovieLoding } from "./Loding";
import Link from "next/link";
import Image from "next/image";

let user = require("../asset/user.png");

const SingleMovieComp = ({ movieid, seriesid }) => {
  const [movieloading, setMovieLoading] = useState(true);

  const [moviedetails, setMoviedetails] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.themoviedb.org/3/${movieid ? "movie" : "tv"}/${
        movieid ? movieid : seriesid
      }?api_key=${
        process.env.THEMOVIEDB_API_KEY
      }&language=en-US&page=1&append_to_response=videos,images,credits,reviews,external_ids`;
      await axios
        .get(url)
        .then((res) => {
          setMoviedetails(res.data);
          setMovieLoading(false);
          
        })
        .catch((err) => {
          console.log("catch error:-", err);
        });
    };
    fetchData();
  }, [movieid, seriesid]);

  return (
    <>
      <div>
        {movieloading ? (
          <SingleMovieLoding />
        ) : (
          <div className="container mx-auto movie-info border-b border-gray-800 px-4 py-16 flex flex-col md:flex-row">
            <div className="flex-none">
              <Image
                loader={({ src }) => `https://image.tmdb.org/t/p/w500${src}`}
                src={`https://image.tmdb.org/t/p/w500${
                  moviedetails && moviedetails.poster_path
                }`}
                alt="poster"
                className="w-64 lg:w-96"
                width={500}
                height={750}
                priority={true}
              />
            </div>
            <div className="md:ml-24">
              <h2 className="text-3xl mt-4 md:mt-0 font-bold">
                {seriesid
                  ? moviedetails && moviedetails.name
                  : moviedetails && moviedetails.title}
                <span className="font-medium">
                  {moviedetails && moviedetails.release_date === undefined
                    ? ""
                    : " (" +
                      new Date(moviedetails && moviedetails.release_date).getFullYear() +
                      ")"}
                </span>
              </h2>

              <div className="flex flex-wrap items-center text-gray-400 text-sm pt-3">
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
                    ? moviedetails && moviedetails.number_of_seasons + " season"
                    : moviedetails && moviedetails.runtime + " min"}{" "}
                </span>
                <span className="mx-2">|</span>
                <span>
                  {moviedetails &&
                    moviedetails.genres.map((genre, index) => (
                      <span key={index}>
                        {genre.name}{" "}
                        {index === moviedetails.genres.length - 1 ? "" : ", "}
                      </span>
                    ))}
                </span>
              </div>

              <div className="flex gap-10">
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
                        {moviedetails && moviedetails.vote_average.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                {/* Movie Cinema rating */}
                <div className="flex items-center mt-4">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-2xl font-bold">
                    {moviedetails && moviedetails.vote_average.toFixed(1)}
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
                        {moviedetails && moviedetails.vote_average.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mt-7 pr-20 line-clamp-5">
                {" "}
                {/* {console.log(moviedetails)} */}
                {moviedetails && moviedetails.overview}
              </p>

              <div className="mt-8">
                <div className="flex mt-2">
                  {moviedetails &&
                    moviedetails.credits.crew.slice(0, 4).map((crew, key) => (
                      <div className="mr-8" key={key}>
                        <div>{crew.name}</div>
                        <div className="text-sm text-gray-400">{crew.job}</div>
                      </div>
                    ))}
                </div>
              </div>

              {/* trailer button */}
              {moviedetails && moviedetails.videos.results.length > 0 && (
                <div className="mt-8">
                  {/* youtube trailer link   */}
                  <Link
                    href={`https://www.youtube.com/watch?v=${
                      moviedetails &&
                      moviedetails.videos.results.length > 0 &&
                      moviedetails.videos.results[
                        moviedetails.videos.results.length - 1
                      ].key
                    }`}
                    target="_blank"
                  >
                    <button className="flex items-center bg-orange-500 text-gray-900 rounded font-semibold px-5 py-4 hover:bg-orange-600 transition ease-in-out duration-150">
                      <svg className="w-6 fill-current" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M9 16.5v-9l7 4.5-7 4.5z"></path>
                      </svg>
                      <span className="ml-2">Play Trailer</span>
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="container mx-auto px-4 py-1">
          <div className="flex justify-between items-center">
            <h2 className="my-5 text-4xl font-semibold flex">
              <div className="mr-3 w-1 bg-yellow-400"></div> User reviews
            </h2>
            <button className="flex items-center justify-center space-x-2 text-white bg-transparent border border-white py-2 px-4 rounded-lg transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="bevel"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              <span>Review</span>
            </button>
          </div>
          <article className="my-5 border px-5 py-5 border-neutral-600">
            <div className="flex justify-between items-center mb-3 space-x-4">
              <div className="flex items-center space-x-4">
                <Image className="w-10 h-10 rounded-full" src={user} alt="" />
                <div className="space-y-1 font-medium dark:text-white">
                  <p>
                    Jese Leos
                    <time
                      dateTime="2014-08-16 19:00"
                      className="block text-sm text-gray-500 dark:text-gray-400"
                      >
                      Reviewed on March 3, 2017
                    </time>
                  </p>
                </div>
              </div>
              <div>
              <div className="flex items-center text-sm text-gray-200 pr-4">
                      <svg
                        className="fill-current text-yellow-400 w-4"
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
                        {moviedetails && moviedetails.vote_average.toFixed(0)} / 10
                      </span>
                    </div>
              </div>
            </div>
            <div className="flex items-center mb-1">
              <h3 className="mt-1 text-md font-semibold text-gray-900 dark:text-white">
                Best Movie Ever!
              </h3>
            </div>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              necessitatibus incidunt ut officiis explicabo inventore.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              necessitatibus incidunt ut officiis explicabo inventore.

            </p>
            
          </article>
        </div>
      </div>
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-5">
          <h2 className="text-4xl font-semibold flex">
            <div className="mr-3 w-1 bg-yellow-400"></div> Top Cast
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {moviedetails &&
              moviedetails.credits &&
              moviedetails.credits.cast.slice(0, 5).map(
                (cast, index) =>
                cast.profile_path && (
                  <div className="mt-8" key={index}>
                      <Link href="/">
                      
                        <Image
                          width={500}
                          height={750}
                          loader={({ src }) => `https://image.tmdb.org/t/p/w500${src}`}
                          src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                          alt="cast"
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
  );
};

export default SingleMovieComp;

export const MovieCast = ({ movieid, seriesid }) => {
  const [cradit, setCradit] = React.useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.themoviedb.org/3/${movieid ? "movie" : "tv"}/${
        movieid ? movieid : seriesid
      }/credits?api_key=${
        process.env.THEMOVIEDB_API_KEY
      }&language=en-US&page=1`;
      await axios
        .get(url)
        .then((res) => {
          setCradit(res.data);
        })
        .catch((err) => {
          console.log("catch error:-", err);
        });
    };
    fetchData();
  }, [movieid, seriesid]);

  return <></>;
};
