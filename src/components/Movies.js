import React from "react";
import "./Movies.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRecommend } from "../features/movie/movieSlice";

function Movies() {
  const movies = useSelector(selectRecommend);

  return (
    <div className="movies">
      <h4 style={{ fontSize: 17 }}>Recommended for You</h4>
      <div className="container_you">
        {movies &&
          movies.map((movie, key) => (
            <div className="poster">
              <Link to={`/detail/` + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Movies;
