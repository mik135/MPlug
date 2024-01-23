/* eslint-disable react/prop-types */
import data from "../data.json";
import MovieCard from "./MovieCard";

export default function MovieList({ title, unfiltered, rating }) {
  return (
    <div className="movieList">

      {unfiltered &&
        data.movies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              image={movie.posterURL}
              title={movie.title}
              description={movie.description}
              rating={movie.rating}
            />
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
