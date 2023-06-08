
import SingleMovieComp, { MovieCast } from '../../components/SingleMovieComp'
import { useRouter } from "next/router";

const SingleMovie = () => {
  
    const router = useRouter();
    const { movieid } = router.query;
   
    return (
        <>
            <SingleMovieComp movieid={movieid} />
            <MovieCast movieid={movieid} />
        </>
    )}

    
    export async function getServerSideProps(context) {
        const { movieid } = context.query;
  
        return {
      props: {
        movieid,
        },
    };
  }
  
export default SingleMovie;