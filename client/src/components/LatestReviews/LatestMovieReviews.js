import React, { useState } from "react";
import latestreview from "../../asset/latestreview.png";
import Image from "next/image";
import {
  CarouselProvider,
  Slider,
  Slide
} from "pure-react-carousel";
import Jazzicon from "react-jazzicon/dist/Jazzicon";
import Link from "next/link";

export const LatestMovieReviews = ({ latestReviews, latestSort, setLatestSort }) => {

  const handlemovie = () => {
    setLatestSort("movie");
  };
  const handleseries = () => {
    setLatestSort("tv");
  };
  
  return (
    <>
      <div className="mt-14 pt-3 bg-[#2f2f33]">
        <div className="ml-3 flex sm:mx-10">
          <div className="pt-5 xl:block xs:hidden">
            <Image
              src={latestreview}
              alt="latestreview image"
              width={430}
              height={430}
            />
          </div>
          <div className="xl:pl-10 flex flex-col w-full">
            {/* sorting */}
            <div className="py-7 flex justify-center sm:justify-start">
              <div className="inline-block border border-gray-500 sm:rounded-full ">
                <button
                  className={`px-7 py-1 font-semibold w-full sm:w-auto sm:rounded-full ${latestSort == "movie" && "bg-gray-700"
                    }`}
                onClick={handlemovie}
                >
                  Movie Reviews
                </button>
                <button
                  className={`px-5 py-1 font-semibold w-full sm:w-auto sm:rounded-full ${latestSort == "tv" && "bg-gray-700"
                    }`}
                onClick={handleseries}
                >
                  Series Reviews
                </button>
              </div>
            </div>
            {/* reviews */}
            <div className="md:block xs:hidden sm:hidden">
              <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={100}
                totalSlides={latestReviews?.length}
                visibleSlides={4}
                touchEnabled={false}
              >
                <Slider>
                  {latestReviews?.map((reviews,key) => (
                    <Slide index={key} key={key} className="cursor-grab">
                      
                      <div className="p-2">
                        <div className="rounded-3xl" style={{"background":"linear-gradient(180deg,rgba(255,255,255,.10126057258841037) 0,rgba(255,255,255,0) 100%)"}}>
                          {/* card */}
                          <div className="flex flex-col px-5 py-4">
                            <div className="flex items-center">
                              <Jazzicon
                                diameter={35}
                                seed={parseInt(reviews?.useraddress.slice(2, 10), 16)}
                              />
                              <div>
                                <p className="text-gray-50 font-semibold text-sm ml-2">
                                  {reviews.useraddress.slice(0, 5) + "..." + reviews.useraddress.slice(-4)}
                                </p>
                              </div>
                            </div>
                            <div className=" py-5">
                              <p className="text-white text-sm ml-2 line-clamp-3">
                                {reviews.comment}
                              </p>
                            </div>
                            
                            <div className="flex pt-10 gap-2 text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="bevel"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/></svg>
                              <Link href={"/"} className="text-sm truncate">
                                {reviews.moviename}
                                title
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Slide>
                  ))}
                </Slider>
              </CarouselProvider>
            </div>
            
            <div className="md:hidden xs:hidden sm:block">
              <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={110}
                totalSlides={latestReviews?.results?.length}
                visibleSlides={2}
              >
                <Slider>
                  {latestReviews?.results?.map((movie,key) => (
                    <Slide index={key} key={key} className="cursor-grab">
                      <div className="p-2">
                        <div className="rounded-3xl" style={{"background":"linear-gradient(180deg,rgba(255,255,255,.10126057258841037) 0,rgba(255,255,255,0) 100%)"}}>
                          {/* card */}
                          <div className="flex flex-col px-5 py-4">
                            <div className="flex items-center">
                              <Jazzicon
                                diameter={35}
                              />
                              <div>
                                <p className="text-gray-50 font-semibold text-sm ml-2">
                                  0x1234567890
                                </p>
                              </div>
                            </div>
                            <div className=" py-5">
                              <p className="text-white font-semibold text-sm ml-2 line-clamp-3">
                                lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                    
                              </p>
                            </div>
                            
                            <div className="flex pt-10 gap-2 text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="bevel"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/></svg>
                              <Link href={"/"}  className="text-sm truncate">
                                {movie.title}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Slide>
                  ))}
                </Slider>
              </CarouselProvider>
            </div>
            
            
            {/* xs small device reviews */}
            <div className="md:hidden xs:block sm:hidden">
              <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={75}
                totalSlides={latestReviews?.results?.length}
                visibleSlides={1}
              >
                <Slider>
                  {latestReviews?.results?.map((movie,key) => (
                    <Slide index={key} key={key} className="cursor-grab">
                      
                      <div className="p-2">
                        <div className="rounded-3xl" style={{"background":"linear-gradient(180deg,rgba(255,255,255,.10126057258841037) 0,rgba(255,255,255,0) 100%)"}}>
                          {/* card */}
                          <div className="flex flex-col px-5 py-4">
                            <div className="flex items-center">
                              <Jazzicon
                                diameter={35}
                              />
                              <div>
                                <p className="text-gray-50 font-semibold text-sm ml-2">
                                  0x1234567890
                                </p>
                              </div>
                            </div>
                            <div className=" py-5">
                              <p className="text-white font-semibold text-sm ml-2 line-clamp-3">
                                lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                    
                              </p>
                            </div>
                            
                            <div className="flex pt-10 gap-2 text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="bevel"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/></svg>
                              <Link href={"/"}  className="text-sm truncate">
                                {movie.title}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Slide>
                  ))}
                </Slider>
              </CarouselProvider>
            </div>
          </div>

        </div>
      </div>


    </>
  );
};
