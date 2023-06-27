import Head from "next/head";

import SingleMovieComp from "../../components/SingleMovieComp";
import { useRouter } from "next/router";

const SingleMovie = () => {
  const router = useRouter();
  const { movieid } = router.query;

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
