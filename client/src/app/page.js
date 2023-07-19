"use client";

import Head from "next/head";

import React, { useState, useEffect } from "react";
import HomeMovieList, { HomeSeriesList } from "../components/HomeMovieList";
import Search from "../components/layout/Search";
import HeroSection from "../components/layout/HeroSection";
import { toast } from "react-toastify";

export default function Home() {
  const [HeroImgData, setHeroImgData] = useState(null);
  const [moviedata, setMoviedata] = useState(null);
  const [seriesdata, setSeriesdata] = useState(null);

  const [heroImgLoading, setHeroImgLoading] = useState(true);
  const [movieLoading, setMovieLoading] = useState(true);
  const [seriesLoading, setSeriesLoading] = useState(true);

  const [moviesort, setMovieSort] = React.useState("day");

  useEffect(() => {
    const fetchMovieData = async () => {
      // const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.THEMOVIEDB_API_KEY}&language=en-US&page=1`;
      try {
        const url1 = `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.THEMOVIEDB_API_KEY}&language=en-US&page=1`;
        const res = await fetch(url1);
        const data = await res.json();
        setMoviedata(data);
        setHeroImgData(data);
      } catch (err) {
        toast("Something went wrong!");
        console.error("error while fetchMovieData", err);
      }
    };

    const fetchSeriseData = async () => {
      try {
        const url = `https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.THEMOVIEDB_API_KEY}&language=en-US`;
        const res = await fetch(url);
        const data = await res.json();
        setSeriesdata(data);
      } catch (err) {
        toast("Something went wrong!");
        console.error("error while fetchSeriseData", err);
      }
    };

    fetchMovieData();
    setHeroImgLoading(false);
    setMovieLoading(false);

    fetchSeriseData();
    setSeriesLoading(false);
  }, []);

  useEffect(() => {
    const fetchMovieData = async (moviesort) => {
      const url1 = `https://api.themoviedb.org/3/trending/movie/${moviesort}?api_key=${process.env.THEMOVIEDB_API_KEY}&language=en-US&page=1`;
      await fetch(url1)
        .then((res) => res.json())
        .then((data) => setMoviedata(data))
        .catch((err) => {
          toast("Something went wrong!");
          console.error("error while fetchMovieData when sorting", err);
        });
    };

    fetchMovieData(moviesort);

    let timer;

    timer = setTimeout(() => {
      setMovieLoading(false);
    }, 1000);
  }, [moviesort]);

  return (
    <>
      <Head>
        <title>Ethcinemanation</title>
      </Head>
      <HeroSection
        HeroImgData={HeroImgData}
        Loading={heroImgLoading}
        setLoading={setMovieLoading}
      />
      <Search setMoviedata={setMoviedata} />
      <HomeMovieList
        moviedata={moviedata}
        Loading={movieLoading}
        setLoading={setMovieLoading}
        setMovieSort={setMovieSort}
      />
      <HomeSeriesList seriesdata={seriesdata} Loading={seriesLoading} />
    </>
  );
}
