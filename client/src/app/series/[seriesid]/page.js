"use client";

import Head from "next/head";
import {SingleMovie} from "../../../components/SingleMovie/index";
import { usePathname } from "next/navigation";

const SingleSeries = () => {
  const router = usePathname();

  const [, seriesid] = router.split("/series/");

  return (
    <>
      <Head>
        <title>Ethcinemanation/series</title>
      </Head>
      <SingleMovie seriesid={seriesid} />
    </>
  );
};

export default SingleSeries;
