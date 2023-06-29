"use client"

import Head from "next/head";
import SingleMovieComp from "../../../components/SingleMovieComp";
import { usePathname } from "next/navigation";

const SingleSeries = () => {
  
  const router = usePathname();
  
  const [, seriesid] = router.split("/series/");
  
  return (
    <>
      <Head>
        <title>Ethcinemanation/series</title>
      </Head>
      <SingleMovieComp seriesid={seriesid} />
    </>
  );
};


export default SingleSeries;
