import Head from "next/head";
import SingleMovieComp from "../../components/SingleMovieComp";
import { useRouter } from "next/router";

const SingleSeries = () => {
  const router = useRouter();
  const { seriesid } = router.query;

  return (
    <>
      <Head>
        <title>Ethcinemanation/series</title>
      </Head>
      <SingleMovieComp seriesid={seriesid} />
    </>
  );
};

export async function getServerSideProps(context) {
  const { seriesid } = context.query;

  return {
    props: {
      seriesid,
    },
  };
}

export default SingleSeries;
