const Loding = () => {
  return (
    <>
      <div className="my-24 text-center">
        <div className="animate-pulse pl-20 grid lg:grid-cols-4">
          {Array.from({ length: 8 }, (movie, i) => (
            <div className="text-white flex flex-row" key={i}>
              <div className="w-24 lg:w-72 bg-gray-700/50 h-44 lg:h-96 rounded-2xl my-8"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Loding;

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
