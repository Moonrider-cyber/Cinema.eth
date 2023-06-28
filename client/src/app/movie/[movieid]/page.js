"use client"

import Head from "next/head";

import SingleMovieComp from "../../../components/SingleMovieComp";
import { usePathname } from "next/navigation";

const SingleMovie = ({ parms }) => {
   
  const router = usePathname();
    console.log(parms)
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

export async function getServerSideProps(context) {
  const { movieid } = context.query;

  return {
    props: {
      movieid,
    },
  };
}

export default SingleMovie;
