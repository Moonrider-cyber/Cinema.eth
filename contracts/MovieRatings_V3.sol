// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract MovieRatings_V3 {
    struct Movie {
        uint256 movieId;
        uint256 totalRatings;
        uint256 avgRating;
    }

    struct MovieRateing {
        address useraddress;
        uint256 movieId;
        string moviename;
        string comment;
        uint256 rate;
        uint256 timestamp;
    }
    
    struct Series {
        uint256 seriesId;
        uint256 totalRatings;
        uint256 avgRating;
    }
    
    struct SeriesRateing {
        address useraddress;
        uint256 seriesId;
        string seriesname;
        string comment;
        uint256 rate;
        uint256 timestamp;
    }
    
    mapping(uint256 => Movie) movies;
   MovieRateing[] movieratings;
    
    mapping(uint256 => Series) series;
    SeriesRateing[] seriesratings;

    // Movie functions
    function rateMovie( uint256 _movieId, string memory _moviename, string memory _comment, uint256 _rate ) public {
        require(_movieId > 0, "Series Id is required");
        require(
            _rate >= 0 && _rate <= 10,
            "Rate value must be between 0 and 10"
        );        
            
       MovieRateing memory newRating =MovieRateing({
            useraddress: msg.sender,
            movieId: _movieId,
            moviename: _moviename,
            comment: _comment,
            rate: _rate,
            timestamp: block.timestamp
        });

        movieratings.push(newRating);
    
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
    
    function isMovieRatedByUser(uint256 movieId, address useraddress) public view returns (bool) {
        for (uint256 i = 0; i < movieratings.length; i++) {
            if (movieratings[i].movieId == movieId && movieratings[i].useraddress == useraddress) {
                return true;
            }
        }
        return false;
    }

    function getMovieRating( uint256 _movieId ) public view returns (Movie memory) {
        require(_movieId >= 1, "Movie Id is required");
        require(
            movies[_movieId].totalRatings >= 0,
            "No ratings found for this movie"
        );
        
        return movies[_movieId];
    }

    function GetMovieReviews( uint256 movieId ) public view returns (MovieRateing[] memory) {
        require(movieId >= 1, "Movie Id is required");
        
        uint256 count = 0;
        for (uint256 i = 0; i < movieratings.length; i++) {
            if (movieratings[i].movieId == movieId) {
                count++;
            }
        }

       MovieRateing [] memory result = new MovieRateing[](count);
        count = 0;
        for (uint256 i = 0; i < movieratings.length; i++) {
            if (movieratings[i].movieId == movieId) {
                result[count] = movieratings[i];
                count++;
            }
        }
        return result;
    }    
    
    function getLatestMovieReviews() public view returns (MovieRateing[] memory) {
        uint256 reviewsCount = movieratings.length;
        uint256 startIndex;

        if (reviewsCount > 10) {
            startIndex = reviewsCount - 10;
        } else {
            startIndex = 0;
        }

       MovieRateing[] memory latestReviews = new MovieRateing[](reviewsCount - startIndex);
        for (uint256 i = startIndex; i < reviewsCount; i++) {
            latestReviews[i - startIndex] = movieratings[i];
        }
        return latestReviews;
    }  
    
    // Series functions
    function rateSeries( uint256 _seriesId, string memory _seriesname, string memory _comment, uint256 _rate) public {
        require(_seriesId > 0, "Series Id is required");
        require(
            _rate >= 0 && _rate <= 10,
            "Rate value must be between 0 and 10"
        );        
            
        SeriesRateing memory newRating = SeriesRateing({
            useraddress: msg.sender,
            seriesId: _seriesId,
            seriesname: _seriesname,
            comment: _comment,
            rate: _rate,
            timestamp: block.timestamp
        });

        seriesratings.push(newRating);
    
        if (series[_seriesId].totalRatings == 0) {
            // If this is the first rating for this series, set the initial values
            series[_seriesId] = Series({
                seriesId: _seriesId,
                totalRatings: 1,
                avgRating: _rate
            });
        } 
        else {
                // If there are existing seriesratings for this series, calculate the new average rating
                uint256 totalRatings = series[_seriesId].totalRatings;
                uint256 oldAvgRating = series[_seriesId].avgRating;
                uint256 newAvgRating = (oldAvgRating * totalRatings + _rate) /
                (totalRatings + 1);
    
                // Update the series's rating details
                series[_seriesId].totalRatings = totalRatings + 1;
                series[_seriesId].avgRating = newAvgRating;
        }    
    }
    
    function isSeriesRatedByUser(uint256 seriesId, address useraddress) public view returns (bool) {
        for (uint256 i = 0; i < seriesratings.length; i++) {
            if (seriesratings[i].seriesId == seriesId && seriesratings[i].useraddress == useraddress) {
                return true;
            }
        }
        return false;
    }

    function getSeriesRating( uint256 _seriesId ) public view returns (Series memory) {
        require(_seriesId >= 1, "Series Id is required");
        require(
            series[_seriesId].totalRatings >= 0,
            "No ratings found for this series"
        );
        
        return series[_seriesId];
    }

    function GetSeriesReviews( uint256 seriesId ) public view returns (SeriesRateing[] memory) {
        require(seriesId >= 1, "Series Id is required");
        
        uint256 count = 0;
        for (uint256 i = 0; i < seriesratings.length; i++) {
            if (seriesratings[i].seriesId == seriesId) {
                count++;
            }
        }

        SeriesRateing [] memory result = new SeriesRateing[](count);
        count = 0;
        for (uint256 i = 0; i < seriesratings.length; i++) {
            if (seriesratings[i].seriesId == seriesId) {
                result[count] = seriesratings[i];
                count++;
            }
        }
        return result;
    }
    
    function getLatestSeriesReviews() public view returns (SeriesRateing[] memory) {
        uint256 reviewsCount = seriesratings.length;
        uint256 startIndex;

        if (reviewsCount > 10) {
            startIndex = reviewsCount - 10;
        } else {
            startIndex = 0;
        }

       SeriesRateing[] memory latestReviews = new SeriesRateing[](reviewsCount - startIndex);
        for (uint256 i = startIndex; i < reviewsCount; i++) {
            latestReviews[i - startIndex] = seriesratings[i];
        }
        return latestReviews;
    }  
}