import { SearchMovieList } from '../../components/HomeMovieList'
import Search from '../../components/layout/Search'
import { useRouter } from 'next/router'
import { useState } from 'react'

const SearchPage = () => {

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

export default SearchPage