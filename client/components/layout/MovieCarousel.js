import React from "react";
import Image from "next/image";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Link from "next/link";

export default function MovieCarousel({ moviedata, seriesdata }) {
  return (
    <div className="container mx-auto">
      <div className="">
        {/* Carousel for desktop and large size devices */}
        <CarouselProvider
          className="lg:block hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={moviedata && moviedata.results.length - 6.5}
          visibleSlides={4}
          step={1}
          // infinite={true}
        >
          <div className="flex justify-between items-center">
            <h1 className="mt-10 mb-5 text-3xl font-bold">Popular Movies</h1>
            <div className="pr-5">
              <ButtonBack
                role="button"
                aria-label="slide backward"
                className=" py-4 px-5"
                id="prev"
              >
                <svg
                  width={20}
                  height={25}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1L1 7L7 13"
                    stroke="white"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonBack>
              <ButtonNext
                role="button"
                aria-label="slide forward"
                className="mr-3 ease-in"
                id="next"
              >
                <svg
                  width={20}
                  height={25}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L7 7L1 13"
                    stroke="white"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonNext>
            </div>
          </div>

          <div className="w-full relative flex items-center justify-center">
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                >
                  {moviedata &&
                    moviedata.results &&
                    moviedata.results.map((movie, key) =>
                      movie.poster_path === null ? null : (
                        <Slide index={key} key={key}>
                          <Link href={`/movie/${movie.id}`} shallow>
                            <div className="cursor-pointer w-[11.5rem] bg-[#303339]  rounded-md shadow-xl hover:transform hover:-translate-y-1 transition ease-in ">
                              <Image
                                loader={({ src }) =>
                                  `https://image.tmdb.org/t/p/w500${src}`
                                }
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt="movie poster"
                                className="rounded-t-md object-cover hover:opacity-75 transition ease-in-out duration-150"
                                width={300}
                                height={450}
                                as="image"
                                priority={key < 4 ? true : false}
                              />

                              <div className="px-5">
                                <h2 className="text-sm py-2 font-bold mt-1 overflow-hidden truncate ">
                                  {movie.title}
                                </h2>
                                <p className="text-gray-400 text-xs mb-2 ">
                                  {movie.overview.slice(0, 34)}...
                                </p>
                                <div className="flex justify-between items-center text-xs">
                                  <p className="text-cyan-400 font-bold flex text-xs">
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

                                    <span className="pl-1">
                                      {movie.vote_average.toFixed(2)}
                                    </span>
                                  </p>
                                  <p className="text-gray-400">
                                    {movie.release_date}
                                  </p>
                                </div>
                                <p className="bg-gray-600 h-[2px] w-full my-2"></p>
                              </div>
                            </div>
                          </Link>
                        </Slide>
                      )
                    )}
                </div>
              </Slider>
            </div>
          </div>
        </CarouselProvider>

        {/* Carousel for tablet and medium size devices */}
        <CarouselProvider
          className="lg:hidden md:block hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={12}
          visibleSlides={2}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                >
                  <Slide index={0}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <Image
                        width={300}
                        height={450}
                        src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F%2FqNBAXBIQlnOThrVvA6mA2B5ggV6.jpg&w=640&q=75"
                        alt="black chair and white table"
                        className="object-cover object-center w-full"
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                        <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                          Catalog 1
                        </h2>
                        <div className="flex h-full items-end pb-6">
                          <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                            The Super Mario
                          </h3>
                        </div>
                      </div>
                    </div>
                  </Slide>
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for mobile and Small size Devices */}
        <CarouselProvider
          className="block md:hidden "
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={12}
          visibleSlides={1}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700"
                >
                  <Slide index={0}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <Image
                        width={300}
                        height={450}
                        loader={({ src }) =>
                          `https://image.tmdb.org/t/p/w500${src}`
                        }
                        src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F%2FqNBAXBIQlnOThrVvA6mA2B5ggV6.jpg&w=640&q=75"
                        alt="black chair and white table"
                        className="object-cover object-center w-full"
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                        <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                          Catalog 1
                        </h2>
                        <div className="flex h-full items-end pb-6">
                          <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                            The Super Mario
                          </h3>
                        </div>
                      </div>
                    </div>
                  </Slide>
                  
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
}

export const SeriesCarousel = ({ seriesdata }) => {
  return (
    <div className="container mx-auto">
      <div className="">
        {/* Carousel for desktop and large size devices */}
        <CarouselProvider
          className="lg:block hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={seriesdata && seriesdata.results.length - 6.5}
          visibleSlides={4}
          step={1}
          // infinite={true}
        >
          <div className="flex justify-between items-center">
            <h1 className="mt-10 mb-5 text-3xl font-bold">Top Rated Series</h1>
            <div className="pr-5">
              <ButtonBack
                role="button"
                aria-label="slide backward"
                className=" py-4 px-5"
                id="prev"
              >
                <svg
                  width={20}
                  height={25}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1L1 7L7 13"
                    stroke="white"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonBack>
              <ButtonNext
                role="button"
                aria-label="slide forward"
                className="mr-3 ease-in"
                id="next"
              >
                <svg
                  width={20}
                  height={25}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L7 7L1 13"
                    stroke="white"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonNext>
            </div>
          </div>

          <div className="w-full relative flex items-center justify-center">
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                >
                  {seriesdata &&
                    seriesdata.results &&
                    seriesdata.results.map((series, key) =>
                      series.poster_path === null ? null : (
                        <Slide index={key} key={key}>
                          <Link href={`/series/${series.id}`} shallow>
                            <div className="cursor-pointer w-[11.5rem] bg-[#303339]  rounded-md shadow-xl hover:transform hover:-translate-y-1 transition ease-in ">
                              <Image
                                src={`https://image.tmdb.org/t/p/w500/${series.poster_path}`}
                                alt="movie poster"
                                width={300}
                                height={450}
                                className="rounded-t-md object-cover hover:opacity-75 transition ease-in-out duration-150"
                              />

                              <div className="px-5">
                                <h2 className="text-sm py-2 font-bold mt-1 overflow-hidden truncate ">
                                  {series.name}
                                </h2>
                                <p className="text-gray-400 text-xs mb-2 ">
                                  {series.overview.slice(0, 34)}...
                                </p>
                                <div className="flex justify-between items-center text-xs">
                                  <p className="text-cyan-400 font-bold flex text-xs">
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

                                    <span className="pl-1">
                                      {series.vote_average.toFixed(2)}
                                    </span>
                                  </p>
                                  <p className="text-gray-400">
                                    {series.release_date}
                                  </p>
                                </div>
                                <p className="bg-gray-600 h-[2px] w-full my-2"></p>
                              </div>
                            </div>
                          </Link>
                        </Slide>
                      )
                    )}
                </div>
              </Slider>
            </div>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
};
