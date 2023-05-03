export const MovieCard = ({movie}) => {
  return (
    <>
      <div >
        <div className="my-10 w-72 bg-gray-800  rounded-md shadow-xl">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="BAYC Ape"
          />

          <div className="px-5">
            <h2 className="text-md py-1 font-bold mt-3 overflow-hidden truncate ">{movie.title}</h2>
            <p className="text-gray-400 text-sm mb-2 ">
              {movie.overview.slice(0, 67)}...
            </p>
            <div className="flex justify-between items-center text-sm">
              <p className="text-cyan-400 font-bold py-2">
                <i className="fab fa-ethereum"></i> 70.1 ETH
              </p>
              <p className="text-gray-400">
                <i className="fas fa-clock"></i> 3 days left
              </p>
            </div>
            <p className="bg-gray-600 h-[0.5px] w-full my-2"></p>
          </div>
        </div>
      </div>
    </>
  );
};
