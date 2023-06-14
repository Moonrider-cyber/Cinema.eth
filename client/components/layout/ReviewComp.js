'use client';

import React, { useState } from 'react';
import { Button, Modal } from 'flowbite-react';

import Image from "next/image";

let user = require("../../asset/user.png");


export const ReviewComp = ({moviedetails}) => {
  
const [openModal, setOpenModal] = useState();
const props = { openModal, setOpenModal };


  return (
    <>
      
      <div className="container mx-auto px-4 py-1">
          <div className="flex justify-between items-center">
            <h2 className="my-5 text-4xl font-semibold flex">
              <div className="mr-3 w-1 bg-yellow-400"></div> User reviews
            </h2>
            <button className="flex items-center justify-center space-x-2 text-white bg-transparent border border-gray-600 py-2 px-4 rounded-lg transition-colors" onClick={() => props.setOpenModal('dismissible')}>
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
              <Modal dismissible show={props.openModal === 'dismissible'} onClose={() => props.setOpenModal(undefined)}>
                <Modal.Header>Terms of Service</Modal.Header>
            <Modal.Body>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-gray-400">
                  reviews now
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => props.setOpenModal(undefined)}>I accept</Button>
              <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
                Decline
              </Button>
        </Modal.Footer>
              </Modal>

              
          </div>
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
            <div className="flex items-center mb-1">
              <h3 className="mt-1 text-md font-semibold text-white">
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
    </>
  )
}
    