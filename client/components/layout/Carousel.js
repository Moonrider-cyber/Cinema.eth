import React from "react";
import Image from 'next/image';
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function Carousel({moviedata}) {

    
    return (
        <div className="container mx-auto">
            <div className="">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider
                    className="lg:block hidden"
                    naturalSlideWidth={100}
                    isIntrinsicHeight={true}
                    totalSlides={moviedata && moviedata.results.length }
                    visibleSlides={4}
                    step={1}
                    // infinite={true}
                >
                    <div className="flex justify-between items-center">
                <h1 className="mt-10 mb-5 text-3xl font-bold">
                    Popular Movies
                </h1>
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
                                <div id="slider"
                                    className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                                >

                                    {
                                    
                                    moviedata && moviedata.results &&
                                        moviedata.results.map((movie,key) =>
                                          movie.poster_path === null ? null : (
                                            <Slide index={key}>
                                                <div className="cursor-pointer w-[11.5rem] bg-[#303339]  rounded-md shadow-xl hover:transform hover:-translate-y-1 transition ease-in " > 
                                                <Image
                                                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                                    alt="movie poster"
                                                    className="rounded-t-md object-cover"
                                                    width={300}
                                                    height={250}
                                                    priority

                                                />

                                                    <div className="px-5">
                                                    <h2 className="text-sm py-2 font-bold mt-3 overflow-hidden truncate ">{movie.title}</h2>
                                                    <p className="text-gray-400 text-xs mb-2 ">
                                                      {movie.overview.slice(0, 34)}...
                                                    </p>
                                                    <div className="flex justify-between items-center text-xs">
                                                      <p className="text-cyan-400 font-bold flex text-xs">
                                                      <svg xmlns="http://www.w3.org/2000/svg" 
                                                      width="14" height="14" viewBox="0 0 24 24" fill="yellow" stroke="yellow" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="bevel"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                      </svg>
                                                        <span className="pl-2">4.7</span> 
                                                      </p>
                                                      <p className="text-gray-400">
                                                        {movie.release_date}
                                                      </p>
                                                    </div>
                                                <p className="bg-gray-600 h-[2px] w-full my-2"></p>
                                            </div>
                                        </div>
                                    </Slide>
                                          )
                                    )}
                                    
                                    
                                </div>
                            </Slider>
                        </div>
                    </div>
                </CarouselProvider>

                {/* Carousel for tablet and medium size devices
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
                                            <img
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
                                    <Slide index={1}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img
                                                src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F%2FqNBAXBIQlnOThrVvA6mA2B5ggV6.jpg&w=640&q=75"
                                                alt="sitting area"
                                                className="object-cover object-center w-full"
                                            />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                                    Catalog 2
                                                </h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                                        The Super Mario
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img
                                                src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F%2FqNBAXBIQlnOThrVvA6mA2B5ggV6.jpg&w=640&q=75"
                                                alt="sitting area"
                                                className="object-cover object-center w-full"
                                            />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                                    Catalog 2
                                                </h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                                        The Super Mario
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img
                                                src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F%2FqNBAXBIQlnOThrVvA6mA2B5ggV6.jpg&w=640&q=75"
                                                alt="sitting area"
                                                className="object-cover object-center w-full"
                                            />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                                    Catalog 2
                                                </h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                                        The Super Mario
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img
                                                src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F%2FqNBAXBIQlnOThrVvA6mA2B5ggV6.jpg&w=640&q=75"
                                                alt="black chair and white table"
                                                className="object-cover object-center w-full"
                                            />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                                    Catalog 2
                                                </h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                                        The Super Mario
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={5}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img
                                                src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F%2FqNBAXBIQlnOThrVvA6mA2B5ggV6.jpg&w=640&q=75"
                                                alt="sitting area"
                                                className="object-cover object-center w-full"
                                            />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                                    Catalog 2
                                                </h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                                        The Super Mario
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={6}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img
                                                src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F%2FqNBAXBIQlnOThrVvA6mA2B5ggV6.jpg&w=640&q=75"
                                                alt="sitting area"
                                                className="object-cover object-center w-full"
                                            />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                                    Catalog 2
                                                </h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                                        The Super Mario
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={7}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img
                                                src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F%2FqNBAXBIQlnOThrVvA6mA2B5ggV6.jpg&w=640&q=75"
                                                alt="sitting area"
                                                className="object-cover object-center w-full"
                                            />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                                    Catalog 2
                                                </h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                                        The Super Mario
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={8}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img
                                                src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F%2FqNBAXBIQlnOThrVvA6mA2B5ggV6.jpg&w=640&q=75"
                                                alt="black chair and white table"
                                                className="object-cover object-center w-full"
                                            />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="texlg:t-xl le leading-4 text-basealg:ding-tight text-white">
                                                    Catalog 2
                                                </h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                                        The Super Mario
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={9}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img
                                                src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F%2FqNBAXBIQlnOThrVvA6mA2B5ggV6.jpg&w=640&q=75"
                                                alt="sitting area"
                                                className="object-cover object-center w-full"
                                            />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                                    Catalog 2
                                                </h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                                        The Super Mario
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={10}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img
                                                src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F%2FqNBAXBIQlnOThrVvA6mA2B5ggV6.jpg&w=640&q=75"
                                                alt="sitting area"
                                                className="object-cover object-center w-full"
                                            />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                                    Catalog 2
                                                </h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                                        The Super Mario
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={11}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img
                                                src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F%2FqNBAXBIQlnOThrVvA6mA2B5ggV6.jpg&w=640&q=75"
                                                alt="sitting area"
                                                className="object-cover object-center w-full"
                                            />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                                    Catalog 2
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

                Carousel for mobile and Small size Devices
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
                                            <img
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
                                    <Slide index={1}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img
                                                src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F%2FqNBAXBIQlnOThrVvA6mA2B5ggV6.jpg&w=640&q=75"
                                                alt="sitting area"
                                                className="object-cover object-center w-full"
                                            />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                                    Catalog 2
                                                </h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                                        The Super Mario
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img
                                                src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F%2FqNBAXBIQlnOThrVvA6mA2B5ggV6.jpg&w=640&q=75"
                                                alt="sitting area"
                                                className="object-cover object-center w-full"
                                            />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                                    Catalog 2
                                                </h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                                        The Super Mario
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img
                                                src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F%2FqNBAXBIQlnOThrVvA6mA2B5ggV6.jpg&w=640&q=75"
                                                alt="sitting area"
                                                className="object-cover object-center w-full"
                                            />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                                    Catalog 2
                                                </h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                                        The Super Mario
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img
                                                src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F%2FqNBAXBIQlnOThrVvA6mA2B5ggV6.jpg&w=640&q=75"
                                                alt="black chair and white table"
                                                className="object-cover object-center w-full"
                                            />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                                    Catalog 2
                                                </h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                                        The Super Mario
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={5}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img
                                                src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F%2FqNBAXBIQlnOThrVvA6mA2B5ggV6.jpg&w=640&q=75"
                                                alt="sitting area"
                                                className="object-cover object-center w-full"
                                            />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                                    Catalog 2
                                                </h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                                        The Super Mario
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={6}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img
                                                src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F%2FqNBAXBIQlnOThrVvA6mA2B5ggV6.jpg&w=640&q=75"
                                                alt="sitting area"
                                                className="object-cover object-center w-full"
                                            />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                                    Catalog 2
                                                </h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                                        The Super Mario
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={7}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img
                                                src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F%2FqNBAXBIQlnOThrVvA6mA2B5ggV6.jpg&w=640&q=75"
                                                alt="sitting area"
                                                className="object-cover object-center w-full"
                                            />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                                    Catalog 2
                                                </h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                                        The Super Mario
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={8}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img
                                                src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F%2FqNBAXBIQlnOThrVvA6mA2B5ggV6.jpg&w=640&q=75"
                                                alt="black chair and white table"
                                                className="object-cover object-center w-full"
                                            />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="texlg:t-xl le leading-4 text-basealg:ding-tight text-white">
                                                    Catalog 2
                                                </h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                                        The Super Mario
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={9}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img
                                                src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F%2FqNBAXBIQlnOThrVvA6mA2B5ggV6.jpg&w=640&q=75"
                                                alt="sitting area"
                                                className="object-cover object-center w-full"
                                            />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                                    Catalog 2
                                                </h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                                        The Super Mario
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={10}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img
                                                src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F%2FqNBAXBIQlnOThrVvA6mA2B5ggV6.jpg&w=640&q=75"
                                                alt="sitting area"
                                                className="object-cover object-center w-full"
                                            />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                                    Catalog 2
                                                </h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                                        The Super Mario
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={11}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img
                                                src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F%2FqNBAXBIQlnOThrVvA6mA2B5ggV6.jpg&w=640&q=75"
                                                alt="sitting area"
                                                className="object-cover object-center w-full"
                                            />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                                    Catalog 2
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
                </CarouselProvider> */}
            </div>
        </div>
    );
}
