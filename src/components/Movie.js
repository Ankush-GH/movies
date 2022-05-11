import React from "react";

import "../App.css";

const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, poster_path, overview, vote_average }) => {
  const setVoteClass = (vote) => {
    if (vote >= 7) {
      return "green";
    } else if (vote >= 5) {
      return "yellow";
    } else {
      return "red";
    }
  };

  return (
    <div className="movie">
      <img
        src={
          poster_path
            ? IMAGE_API + poster_path
            : "https://media.istockphoto.com/photos/empty-red-armchairs-of-a-theater-ready-for-a-show-picture-id1295114854?b=1&k=20&m=1295114854&s=170667a&w=0&h=W9ZbN674554Jsamxo5AfoO3DrSm_7qYS1EnANgusi9o="
        }
        alt={title}
      />
      
      <div className="movie-info">
        <h3>{title}</h3>
        {/* TAG IS THE NAME OF THE CLASS  */}
        <span className={`tag ${setVoteClass(vote_average)}`}>
          {vote_average}
        </span>
      </div>

      <div className="movie-overview">
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default Movie;
