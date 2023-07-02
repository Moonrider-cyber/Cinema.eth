// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract MovieRatings {
    struct Movie {
        uint256 movieId;
        uint256 totalRatings;
        uint256 avgRating;
    }

    struct Rateing {
        address useraddress;
        uint256 movieId;
        string comment;
        uint256 rate;
        uint256 timestamp;
    }

    mapping(uint256 => Movie) movies;
    Rateing[] ratings;

    function rateMovie( uint256 _movieId, string memory _comment, uint256 _rate ) public {
        require(_movieId > 0, "Movie Id is required");
        require(
            _rate >= 0 && _rate <= 10,
            "Rate value must be between 0 and 10"
        );

        Rateing memory newRating = Rateing({
            useraddress: msg.sender,
            movieId: _movieId,
            comment: _comment,
            rate: _rate,
            timestamp: block.timestamp
        });

        ratings.push(newRating);

        if (movies[_movieId].totalRatings == 0) {
            // If this is the first rating for this movie, set the initial values
            movies[_movieId] = Movie({
                movieId: _movieId,
                totalRatings: 1,
                avgRating: _rate
            });
        } else {
            // If there are existing ratings for this movie, calculate the new average rating
            uint256 totalRatings = movies[_movieId].totalRatings;
            uint256 oldAvgRating = movies[_movieId].avgRating;
            uint256 newAvgRating = (oldAvgRating * totalRatings + _rate) /
                (totalRatings + 1);

            // Update the movie's rating details
            movies[_movieId].totalRatings = totalRatings + 1;
            movies[_movieId].avgRating = newAvgRating;
        }
    }

    function getMovieRating( uint256 _movieId ) public view returns (uint256, uint256, uint256) {
        require(_movieId >= 1, "Movie Id is required");
        require(
            movies[_movieId].totalRatings >= 0,
            "No ratings found for this movie"
        );

        return (
            movies[_movieId].movieId,
            movies[_movieId].totalRatings,
            movies[_movieId].avgRating
        );
    }

    function GetMovieReviews( uint256 _movieId ) public view returns (Rateing[] memory) {
        require(_movieId >= 1, "Movie Id is required");
        uint256 count = 0;
        for (uint256 i = 0; i < ratings.length; i++) {
            if (
                keccak256(abi.encodePacked(uint256(ratings[i].movieId))) ==
                keccak256(abi.encodePacked(_movieId))
            ) {
                count++;
            }
        }

        Rateing[] memory MovieReviews = new Rateing[](count);
        uint256 index = 0;
        for (uint256 i = 0; i < ratings.length; i++) {
            if (
                keccak256(abi.encodePacked(uint256(ratings[i].movieId))) ==
                keccak256(abi.encodePacked(_movieId))
            ) {
                MovieReviews[index] = ratings[i];
                index++;
            }
        }

        return MovieReviews;
    }

    function testfunction() public pure returns (string memory) {
        return "Hello World from Solidity";
    }
}
