import React from "react";
import "./Movies.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectNewDisney } from "../features/movie/movieSlice";

function NewDisney() {
  const movies = useSelector(selectNewDisney);

  return (
    <div className="movies">
      <h4 style={{ fontSize: 17 }}>New</h4>
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

export default NewDisney;
