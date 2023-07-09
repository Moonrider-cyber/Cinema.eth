export const SearchLoding = () => {
  return (
    <>
      <div className="my-0 text-center">
        <div className="animate-pulse pl-11 grid lg:grid-cols-4">
          {Array.from({ length: 8 }, (movie, i) => (
            <div className="text-white flex flex-row" key={i}>
              <div className="w-24 lg:w-80 bg-gray-700/50 h-44 lg:h-96 rounded-2xl my-8"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const SingleMovieLoding = () => {
  return (
    <>
      <div className="my-12 flex text-center">
        <div className="w-24 lg:w-[31%]  ml-28 bg-gray-700/50 h-44 lg:h-[600px] rounded-2xl my-8"></div>
        <div className="w-[39%]">
          <div className="w-20 lg:w-full mx-28 bg-gray-700/50 h-44 lg:h-12 rounded-2xl mt-12"></div>

          <div className="flex">
            <div className="w-2 lg:w-28 ml-28 bg-gray-700/50 h-4 lg:h-6 rounded-2xl mt-5"></div>
            <div className="w-2 lg:w-28 ml-4 bg-gray-700/50 h-4 lg:h-6 rounded-2xl mt-5"></div>
            <div className="w-2 lg:w-28 ml-4 bg-gray-700/50 h-4 lg:h-6 rounded-2xl mt-5"></div>
            <div className="w-2 lg:w-28 ml-4 bg-gray-700/50 h-4 lg:h-6 rounded-2xl mt-5"></div>
          </div>
          <div className="w-20 lg:w-full mx-28 bg-gray-700/50 h-44 lg:h-72 rounded-2xl mt-8"></div>

          <div className="flex">
            <div className="w-2 lg:w-60 ml-28 bg-gray-700/50 h-20 lg:h-20 rounded-2xl mt-5"></div>
            <div className="w-2 lg:w-60 ml-20 bg-gray-700/50 h-20 lg:h-20 rounded-2xl mt-5"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export const HeroImgLoading = () => {
  return (
    <>
      <div className="my-0 text-center">
        <div className="animate-pulse pl-0">
          <div className="text-white flex flex-row">
            <div className="w-full h-full bg-gray-700/50 lg:h-96 rounded-2xl my-8"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export const HomeMovieListLoding = () => {
  return (
    <>
      <div>
        <div className="animate-pulse grid lg:grid-cols-6">
          {Array.from({ length: 6 }, (movie, i) => (
            <div className="text-white flex flex-row" key={i}>
              <div className="w-[90%] h-full bg-gray-700/50 rounded-2xl mb-72"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const HomeCarouselLoding = () => {
  return (
    <>
      {/* <div className="mx-28 text-center">
        <div className="animate-pulse pl-0">
          <div className="text-white flex flex-row">
            <div className="w-[98%] h-60 bg-gray-700/50 rounded-2xl my-5"></div>
          </div>
        </div>
      </div> */}
      <div className="mx-24 my-12">
        <div className="animate-pulse grid lg:grid-cols-6">
          {Array.from({ length: 6 }, (movie, i) => (
            <div className="text-white flex flex-row" key={i}>
              <div className="w-[90%] h-full bg-gray-700/50 rounded-2xl mb-80"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const ReviewsLoding = () => {
  return (
    <>
      {/* movie reviews tailwind loding skaliton */}
      <div className="w-full my-5">
        <div className="animate-pulse w-full grid">
            <div className="text-white flex flex-row">
              <div className="w-full h-full bg-gray-700/50 rounded-2xl mb-64"></div>
            </div>
        </div>
      </div>
    </>
  );
};
