import React from 'react'
import Image from 'next/image'


export const Casts = ({moviedetails}) => {
  
  return (
    <>
    
        <div className="border-b border-gray-800" id="cast">
            <div className="md:container mx-auto px-4 py-5">
              <h2 className="text-4xl font-semibold flex">
                <div className="mr-3 w-1 bg-yellow-400"></div> Top Cast
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                {moviedetails &&
                  moviedetails.credits &&
                  moviedetails.credits.cast.slice(0, 12).map(
                    (cast, index) =>
                      cast.profile_path && (
                        <div className="mt-8" key={index}>
                          {/* <Link href="/"> */}
                            <Image
                              width={200}
                              height={200}
                              loader={({ src }) =>
                                `https://image.tmdb.org/t/p/w185${src}`
                              }
                              src={`https://image.tmdb.org/t/p/w185${cast.profile_path}`}
                              alt="cast"
                              // priority={false}
                              className="hover:opacity-75 transition ease-in-out duration-150"
                            />
                          {/* </Link> */}
                          <div className="mt-2">
                            {/* <Link */}
                              {/* href="/" */}
                              {/* className="text-lg mt-2 hover:text-gray:300" */}
                            {/* > */}
                              {cast.name}
                            {/* </Link> */}
                            <div className="text-sm text-gray-400">
                              {cast.character}
                            </div>
                          </div>
                        </div>
                      )
                  )}
              </div>
            </div>
          </div>
    </>
  )
}
