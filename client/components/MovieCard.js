import Image from 'next/image';
import Link from 'next/link';


export const MovieCard = ({movie}) => {
  return (
    <>
      {/* {console.log("movie img",movie.poster_path)} */}
      <Link href={`/movie/${movie.id}`}>
        <div className="cursor-pointer my-10 w-72 bg-[#303339]  rounded-md shadow-xl hover:transform hover:-translate-y-1 transition ease-in">
          <Image
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="movie poster"
            className="rounded-t-md h-[75%] hover:opacity-75 transition ease-in-out duration-150"
            width={500}
            height={750}

          />

          <div className="px-5">
            <h2 className="text-md py-2 font-bold mt-3 overflow-hidden truncate ">{movie.title}</h2>
            <p className="text-gray-400 text-sm mb-2 ">
              {movie.overview.slice(0, 67)}...
            </p>
            <div className="flex justify-between items-center text-sm">
              <p className="text-cyan-400 font-bold flex">
              <svg xmlns="http://www.w3.org/2000/svg" 
              width="19" height="19" viewBox="0 0 24 24" fill="yellow" stroke="yellow" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="bevel"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
                <span className="pl-2">{movie.vote_average.toFixed(2)}</span> 
              </p>
              <p className="text-gray-400 pb-2">
                {movie.release_date}
              </p>
            </div>
            <p className="bg-gray-600 h-[2px] w-full my-2"></p>
          </div>
        </div>
      </Link>
    </>
  );
};
