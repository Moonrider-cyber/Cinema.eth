import React, { useState } from "react";

import HomeMovieList, { HomeSeriesList } from "@/components/HomeMovieList";
import Search from "@/components/layout/Search";
import Layout from "@/components/Layout";

export default function Home() {


  const [moviedata, setMoviedata] = useState(null);
  const [seriesdata, setSeriesdata] = useState(null);


  return (
    <>
      <Layout>

          <Search setMoviedata={setMoviedata} />
        
          <HomeMovieList moviedata={moviedata} setMoviedata={setMoviedata} />
        
        
        
        <HomeSeriesList seriesdata={seriesdata} setSeriesdata={setSeriesdata} />

      </Layout>
    </>
    // <main className={`${inter.className}`}>
    //   <Navbar connectwallet={connectwallet} state={state} account={account} />

    //   <Search setMoviedata={setMoviedata} />

      
    // </main>
  );
}
