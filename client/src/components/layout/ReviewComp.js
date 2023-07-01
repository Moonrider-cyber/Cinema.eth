"use client";

import React,{ useContext } from "react";
import Image from "next/image";
import AuthContext from "../../utils/AuthContext";

let user = require("../../asset/user.png");

export const ReviewComp = ({ moviedetails }) => {
  
  const { isLogged } = useContext(AuthContext);
  
  const [isRiview, setIsRiview] = React.useState(false);

  const reviewpost = (e) => {
    e.preventDefault();
    if(isLogged){
      
    }else{
      alert("Please connect wallet");
    }
  };
  

  return (
    <>
      <div className="md:container mx-auto px-4 py-1">
        <div className="flex justify-between items-center">
          <h2 className="my-5 text-4xl font-semibold flex">
            <div className="mr-3 w-1 bg-yellow-400"></div> User reviews
          </h2>
        </div>

        {!isRiview && (
          <form onSubmit={reviewpost}>
            <div className="w-full mb-4 border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600">
              <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-[#202225]">
                <label htmlFor="comment" className="sr-only">
                  Your Review
                </label>
                <textarea
                  id="comment"
                  rows="4"
                  className="w-full p-2 text-sm border-0 bg-[#202225] focus:ring-0 dark:text-white dark:placeholder-gray-400"
                  placeholder="Write a reviews..."
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                <button
                  type="submit"
                  className="inline-flex items-center py-3 px-8 text-sm text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                >
                  Post Review
                </button>
                
                <span className="text-sm text-gray-300 pr-2">Cost of review is 0.5 gas</span>
              </div>
            </div>
          </form>
        )}

        <div>
          <article className="my-5 border border-gray-600 px-5 py-5">
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
            {/* <div className="flex items-center mb-1">
              <h3 className="mt-1 text-md font-semibold text-white">
                Best Movie Ever!
              </h3>
            </div> */}
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              necessitatibus incidunt ut officiis explicabo inventore. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              necessitatibus incidunt ut officiis explicabo inventore.
            </p>
          </article>

          <article className="my-5 border border-gray-600 px-5 py-5">
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
            {/* <div className="flex items-center mb-1">
              <h3 className="mt-1 text-md font-semibold text-white">
                Best Movie Ever!
              </h3>
            </div> */}
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              necessitatibus incidunt ut officiis explicabo inventore. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              necessitatibus incidunt ut officiis explicabo inventore.
            </p>
          </article>
        </div>

        <div className="flex justify-center">
          <button
            className=" text-white bg-transparent border border-gray-600 py-3 px-10 rounded-lg transition-colors"
          >
            <span>View More</span>
          </button>
        </div>
      </div>
    </>
  );
};
