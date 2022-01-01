import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTrending } from "../features/movie/movieSlice";

function Trending() {
  const movies = useSelector(selectTrending);

  return (
    <div className="movies">
      <h4 style={{ fontSize: 17 }}>Trending</h4>
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

export default Trending;
