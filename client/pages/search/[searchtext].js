import { SearchMovieList } from '@/components/HomeMovieList'
import Layout from '@/components/Layout'
import Search from '@/components/layout/Search'
import { useRouter } from 'next/router'
import { useState } from 'react'

const searchPage = () => {

    const router = useRouter()
    const { searchtext } = router.query

    const [ searchmoviedata, setsearchMoviedata] = useState(null);

    return (
    <>
         <Search setsearchMoviedata={setsearchMoviedata} />
            
            <SearchMovieList searchtext={searchtext} searchmoviedata={searchmoviedata} setsearchMoviedata={setsearchMoviedata} />
    </>
  )
}

export default searchPage