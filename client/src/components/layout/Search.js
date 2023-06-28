import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [searchtext, setSearchtext] = useState(null);
  const router = useRouter();

  const searchhandle = async (e) => {
    e.preventDefault();

    if (searchtext === null) {
      return;
    }
    router.push(`/search/${searchtext}`);
  };

  return (
    <>
      <form
        className="flex justify-center items-center mb-5"
        onSubmit={searchhandle}
      >
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-50 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative w-3/5">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-50 border border-gray-700 rounded-lg bg-gray-700 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
            placeholder="Search Movies, series..."
            onChange={(e) => setSearchtext(e.target.value)}
            value={searchtext ? searchtext : ""}
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
};

export default Search;
