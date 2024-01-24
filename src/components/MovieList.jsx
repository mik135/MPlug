/* eslint-disable react/prop-types */
import data from "../data.json";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom"

export default function MovieList({ title, unfiltered, rating }) {
  return (
    <div className="movieList">

      {unfiltered &&
        data.movies.map((movie) => {
          return (
            <Link to={`/movies/${movie.id}`} key={movie.id}><MovieCard
              key={movie.id}
              image={movie.posterURL}
              title={movie.title}
              description={movie.description}
              rating={movie.rating}
            /></Link>
          );
        })}

      {title &&
        data.movies.map((movie) => {
          if (movie.title.toLowerCase() == title.toString().toLowerCase()) {
            return (
              <MovieCard
                key={movie.id}
                image={movie.posterURL}
                title={movie.title}
                description={movie.description}
                rating={movie.rating}
              />
            );
          }
        })}

      {rating &&
        data.movies.map((movie) => {
          if (parseInt(movie.rating) == rating) {
            return (
              <MovieCard
                key={movie.id}
                image={movie.posterURL}
                title={movie.title}
                description={movie.description}
                rating={movie.rating}
              />
            );
          }
        })}

    </div>
  );
}
