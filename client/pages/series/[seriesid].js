
import Layout from '@/components/Layout'
import SingleMovieComp, { MovieCast } from '@/components/SingleMovieComp'
import { useRouter } from "next/router";

const SingleSeries = () => {
  
    const router = useRouter();
    const { seriesid } = router.query;
   
    return (
        <Layout>
            <SingleMovieComp seriesid={seriesid} />
            <MovieCast seriesid={seriesid} />
        </Layout>
    )}

    
    export async function getServerSideProps(context) {
        const { seriesid } = context.query;
  
        return {
      props: {
        seriesid,
        },
    };
  }
  
export default SingleSeries;