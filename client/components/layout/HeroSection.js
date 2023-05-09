import React, { useState } from 'react'
import Image from "next/image";
import axios from 'axios';

import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const HeroSection = () => {

    const [movieImg, setMovieImg] = useState(null);
    
    useState( async () => {
        await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.THEMOVIEDB_API_KEY}&language=en-US&page=1`)
        .then((res) => {
            setMovieImg(res.data)
        })
    }, [])

    return (
    <>
        <section className="my-6 pb-6">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">The place where movies and Ethereum meet!</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Discover and rate your favorite movies with EthCinema - the decentralized movie rating platform!</p>
                    {/* <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                        Get started
                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a> */}
                    <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Explore Now
                    </a> 
                </div>
                <div className="hidden lg:col-span-5 lg:flex lg:justify-center">
                <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={5}
                isPlaying={true}
                infinite={true}
                interval={3000}
                
                className="w-[70%]"
              >
                <Slider>
                    {movieImg && movieImg.results.slice(0, 5).map((movie, index) => (
                        <Slide index={index} key={index} className="flex justify-center"><div className="flex justify-center"><Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} width={300} height={450} className="rounded-t-md"  alt="hero-img" /></div></Slide>
                    ))}
                
                
                </Slider>
                {/* <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext> */}
              </CarouselProvider>

                </div>                
    </div>
</section>
    </>
  )
}

export default HeroSection