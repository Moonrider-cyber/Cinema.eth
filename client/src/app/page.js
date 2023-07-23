"use client";


import React, { useState, useEffect,useContext } from "react";
import HomeMovieList, { HomeSeriesList } from "../components/HomeMovieList";
import Search from "../components/layout/Search";
import HeroSection from "../components/layout/HeroSection";
import { toast } from "react-toastify";
import { DefaultSeo } from "next-seo";
import {LatestMovieReviews} from "../components/LatestReviews/LatestMovieReviews";
import AuthContext from "../utils/AuthContext";

export default function Home() {
  
  const { contract } = useContext(AuthContext);
  
  const [HeroImgData, setHeroImgData] = useState(null);
  const [moviedata, setMoviedata] = useState(null);
  const [seriesdata, setSeriesdata] = useState(null);
  const [latestReviews, setLatestReviews] = useState(null);
  
  const [heroImgLoading, setHeroImgLoading] = useState(true);
  const [movieLoading, setMovieLoading] = useState(true);
  const [seriesLoading, setSeriesLoading] = useState(true);
  const [latestReviewsLoading, setLatestReviewsLoading] = useState(true);

  const [moviesort, setMovieSort] = useState("day");
  const [latestSort, setLatestSort] = useState("movie");

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const url1 = `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.THEMOVIEDB_API_KEY}&language=en-US&page=1`;
        const res = await fetch(url1);
        const data = await res.json();
        setMoviedata(data);
        setHeroImgData(data);
      } catch (err) {
        toast("Check Your Internet connection");
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
          console.error("error while fetchMovieData when sorting", err);
        });
    };

    fetchMovieData(moviesort);

    let timer;

    timer = setTimeout(() => {
      setMovieLoading(false);
    }, 1000);
  }, [moviesort]);

  useEffect(() => {
    const getlatestreviews = async (latestSort = "movie") => {
      try {
        if(latestSort === "movie"){
        await contract.getLatestMovieReviews()
          .then((res) => {
            setLatestReviews(res);
            setLatestReviewsLoading(false);
          })
          .catch((err) => {
            console.error("error while getlatestreviews for movie", err);
          });
        }else if(latestSort === "tv"){
          await contract.getLatestSeriesReviews()
          .then((res) => {
            setLatestReviews(res);
            setLatestReviewsLoading(false);
          })
          .catch((err) => {
            console.error("error while getlatestreviews for series", err);
          });
        }
      } catch (err) {
        console.error("error while getlatestreviews movie,series", err);
      }
    }
    if(contract){ 
      getlatestreviews(latestSort);
    }
    
  }, [contract, latestSort]);
  
  return (
    <>
      <DefaultSeo
        title="Ethcinemanation"
        description="Ethcinemanation is a decentralized movie rating platform."
        openGraph={{
          type: "website",
          url: "https://ethcinemanation.com/",
          title: "Ethcinemanation",
          description: "Ethcinemanation is a decentralized movie rating platform.",
          site_name: "Ethcinemanation"
        }}
      />
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
      <LatestMovieReviews 
        latestReviews={latestReviews} 
        latestSort={latestSort}
        setLatestSort={setLatestSort}
        latestReviewsLoading={latestReviewsLoading}
        setLatestReviewsLoading={setLatestReviewsLoading}
      />
      <HomeSeriesList seriesdata={seriesdata} Loading={seriesLoading} />
    </>
  );
}
