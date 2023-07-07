"use client";

import Head from "next/head";

import { usePathname } from "next/navigation";
import {SingleMovie} from "../../../components/SingleMovie";

const SingleMoviePage = () => {
  const router = usePathname();

  const [, movieid] = router.split("/movie/");

  return (
    <>
      <Head>
        <title>Ethcinemanation/Movie</title>
      </Head>
      <SingleMovie movieid={movieid} />
    </>
  );
};

export default SingleMoviePage;
