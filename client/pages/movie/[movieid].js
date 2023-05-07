import Layout from '@/components/Layout'
import SingleMovieComp from '@/components/SingleMovieComp'
import { useRouter } from "next/router";

const SingleMovie = () => {
  
    const router = useRouter();
    const { movieid } = router.query;
  
    return (
        <Layout>
            <SingleMovieComp movieid={movieid} />
            
        </Layout>
    )}

export default SingleMovie;