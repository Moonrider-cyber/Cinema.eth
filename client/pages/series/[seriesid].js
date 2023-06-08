
import SingleMovieComp, { MovieCast } from '../../components/SingleMovieComp'
import { useRouter } from "next/router";

const SingleSeries = () => {
  
    const router = useRouter();
    const { seriesid } = router.query;
   
    return (
        <>
            <SingleMovieComp seriesid={seriesid} />
            <MovieCast seriesid={seriesid} />
        </>
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