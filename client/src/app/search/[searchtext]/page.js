"use client";

import Head from "next/head";
import { SearchMovieList } from "../../../components/HomeMovieList";
import Search from "../../../components/layout/Search";
import { useState } from "react";

const SearchPage = ({ params }) => {

  const { searchtext } = params;

  const filltersearch = searchtext.replace(/%20/g, " ");

  const [searchmoviedata, setsearchMoviedata] = useState(null);

  return (
    <>
      <Head>
        <title>Ethcinemanation/search/{filltersearch}</title>
      </Head>
      <div className="mt-11">
        <Search setsearchMoviedata={setsearchMoviedata} />
        <SearchMovieList
          searchtext={filltersearch}
          searchmoviedata={searchmoviedata}
          setsearchMoviedata={setsearchMoviedata}
        />
      </div>
    </>
  );
};

export default SearchPage;
