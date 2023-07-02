"use client";

import Head from "next/head";

import React, { useState, useEffect } from "react";
import HomeMovieList, { HomeSeriesList } from "../components/HomeMovieList";
import Search from "../components/layout/Search";
import HeroSection from "../components/layout/HeroSection";

export default function Home() {
  const [moviedata, setMoviedata] = useState(null);
  const [seriesdata, setSeriesdata] = useState(null);
  
  const [heroImgLoading, setHeroImgLoading] = useState(true);
  const [movieLoading, setMovieLoading] = useState(true);
  const [seriesLoading, setSeriesLoading] = useState(true);

  useEffect(() => {
    
    const fetchMovieData = async () => {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.THEMOVIEDB_API_KEY}&language=en-US&page=1`;
      await fetch(url)
        .then((res) => res.json())
        .then((data) => setMoviedata(data))
        .catch((err) => console.log(err));
    };
    
    const fetchSeriseData = async () => {
      const url1 = `https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.THEMOVIEDB_API_KEY}&language=en-US`;

      await fetch(url1)
        .then((res) => res.json())
        .then((data) => setSeriesdata(data))
        .catch((err) => console.log(err));
    };
    
    fetchMovieData();
    setHeroImgLoading(false);
    setMovieLoading(false);
    
    fetchSeriseData();
    setSeriesLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>Ethcinemanation</title>
      </Head>

      <HeroSection moviedata={moviedata} Loading={heroImgLoading} />
      <Search setMoviedata={setMoviedata} />
      <HomeMovieList moviedata={moviedata} Loading={movieLoading} />
      <HomeSeriesList seriesdata={seriesdata} Loading={seriesLoading} />
    </>
  );
}
