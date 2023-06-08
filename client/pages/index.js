import React, { useState } from "react";

import HomeMovieList, { HomeSeriesList } from "../components/HomeMovieList";
import Search from "../components/layout/Search";
import HeroSection from "../components/layout/HeroSection";


export default function Home() {

  const [moviedata, setMoviedata] = useState(null);
  const [seriesdata, setSeriesdata] = useState(null);

  return (
    <>
          <HeroSection />
          <Search setMoviedata={setMoviedata} />
        
          <HomeMovieList moviedata={moviedata} setMoviedata={setMoviedata} />
        
        <HomeSeriesList seriesdata={seriesdata} setSeriesdata={setSeriesdata} />

    </>
  );
}
