"use client";

import Head from "next/head";

import SingleMovieComp from "../../../components/SingleMovieComp";
import { usePathname } from "next/navigation";

const SingleMoviePage = () => {
  const router = usePathname();

  const [, movieid] = router.split("/movie/");

  return (
    <>
      <Head>
        <title>Ethcinemanation/Movie</title>
      </Head>
      <SingleMovieComp movieid={movieid} />
    </>
  );
};

export default SingleMoviePage;
