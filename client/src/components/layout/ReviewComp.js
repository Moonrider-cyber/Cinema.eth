"use client";

import React, { useState, useContext } from "react";
import Image from "next/image";
import AuthContext from "../../utils/AuthContext";
import { Rating, ThinRoundedStar } from "@smastrom/react-rating";

let user = require("../../asset/user.png");

const includedShapesStyles = [ThinRoundedStar].map((itemShapes) => ({
  itemShapes,
  activeFillColor: "#f59e0b",
  inactiveFillColor: "#ffedd5",
}));

export const ReviewComp = ({ moviedetails }) => {
  const { isLogged, contract } = useContext(AuthContext);

  const [isReview, setIsReview] = useState(false);
  const [Review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const reviewposthandler = async () => {
    if (isLogged) {
      await contract
        .rateMovie(moviedetails.id, Review, rating)
        .then((res) => {
          console.log(res);
          alert("Review posted successfully");
          setIsReview(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Please connect wallet");
    }
  };

  // TODO:- LOAD CONTRACT ON WEBSITE FIRST LOAD
  // React.useEffect(() => {
  //   async function getmovierating(){

  //     await contract.getMovieRating(1)
  //     .then((res)=>{
  //       console.log(res);
  //     })
  //     .catch((err)=>{
  //       console.log(err);
  //     })
  //   }
  //   if (isLogged) {
  //   getmovierating();
  // }, [contract])

  return (
    <>
      <div className="md:container mx-auto px-4 py-1">
        <div className="flex justify-between items-center">
          <h2 className="my-5 text-4xl font-semibold flex">
            <div className="mr-3 w-1 bg-yellow-400"></div> User reviews
          </h2>
        </div>

        {!isReview && (
          <div className="container border border-gray-600 px-5 py-5 rounded-lg">
            <div className="flex items-center space-x-4">
              <Image
                className="w-10 h-10 rounded-full"
                src={user}
                alt="user pfp"
              />
              <div className="space-y-1 font-medium dark:text-white">
                <p>
                  You
                  <span className="block text-sm text-gray-500 dark:text-gray-400">
                    Posting publicly
                  </span>
                </p>
                <div style={{ maxWidth: 280, width: "100%" }}>
                  {includedShapesStyles.map((itemStyles, index) => (
                    <Rating
                      key={`shape_${index}`}
                      value={rating}
                      onChange={setRating}
                      itemStyles={itemStyles}
                      items={10}
                      spaceBetween="small"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-start items-start ml-14 mb-3 space-x-4">
              <div className="flex flex-col items-start w-3/4 mt-5">
                <textarea
                  id="comment"
                  rows="4"
                  className="w-10/12 bg-transparent p-5 border border-gray-600 rounded-lg"
                  placeholder="Write your review here..."
                  value={Review}
                  onChange={(e) => setReview(e.target.value)}
                ></textarea>
                <button
                  className="mt-5 w-1/3 text-center font-bold text-base bg-blue-700 px-5 py-3 rounded-lg text-white hover:bg-blue-800"
                  onClick={reviewposthandler}
                >
                  Post Review
                </button>
              </div>
            </div>
          </div>
        )}

        {/* other user reviews */}
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
          <button className=" text-white bg-transparent border border-gray-600 py-3 px-10 rounded-lg transition-colors">
            <span>View More</span>
          </button>
        </div>
      </div>
    </>
  );
};
