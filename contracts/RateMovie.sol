// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract CreateMovieRate {
    
    struct Movie{
        string movieId;
        uint256 totalRatings;
        uint256 avgRating;
        uint256 timestamp;
    }

    struct Rateing{
        address useraddress;
        string movieId;
        string comment;
        uint256 rate;
        uint256 timestamp;
    }

    mapping(string => Movie) movies;
    Rateing[] ratings;


    // address payable owner;
    // constructor() payable {
    //     owner = payable(msg.sender);
    // }
    
    function rateMovie(string memory _movieId, string memory _comment, uint256 _rate) public {
        require(bytes(_movieId).length > 0, "Movie Id is required");
        require(_rate >= 0 && _rate <= 10, "Rate value must be between 0 and 10");

        Rateing memory newRating = Rateing({
            useraddress: msg.sender,
            movieId: _movieId,
            comment: _comment,
            rate: _rate,
            timestamp: block.timestamp
        });

        ratings.push(newRating);

        if(movies[_movieId].totalRatings == 0) {
            // If this is the first rating for this movie, set the initial values
            movies[_movieId] = Movie({
                movieId: _movieId,
                totalRatings: 1,
                avgRating: _rate,
                timestamp: block.timestamp
            });
        } else {
            // If there are existing ratings for this movie, calculate the new average rating
            uint256 totalRatings = movies[_movieId].totalRatings;
            uint256 oldAvgRating = movies[_movieId].avgRating;
            uint256 newAvgRating = (oldAvgRating * totalRatings + _rate) / (totalRatings + 1);

            // Update the movie's rating details
            movies[_movieId].totalRatings = totalRatings + 1;
            movies[_movieId].avgRating = newAvgRating;
            movies[_movieId].timestamp = block.timestamp;
        }
    }

    function getMovieRating(string memory _movieId) public view returns (string memory, uint256, uint256, uint256) {
        require(bytes(_movieId).length > 0, "Movie Id is required");
        require(movies[_movieId].totalRatings > 0, "No ratings found for this movie");

        return (movies[_movieId].movieId, movies[_movieId].totalRatings, movies[_movieId].avgRating, movies[_movieId].timestamp);
    }

    function getRatings(string memory _movieId) public view returns (Rateing[] memory) {
    require(bytes(_movieId).length > 0, "Movie Id is required");
    Rateing[] memory movieRatings = new Rateing[](movies[_movieId].totalRatings);
    uint256 index = 0;
    for (uint256 i = 0; i < ratings.length; i++) {
        if (keccak256(bytes(ratings[i].movieId)) == keccak256(bytes(_movieId))) {
            movieRatings[index] = ratings[i];
            index++;
        }
    }
    return movieRatings;
}

    
}
