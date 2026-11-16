import { useParams, useOutletContext } from "react-router-dom";

function MovieCard() {
  const { id, movieId } = useParams();
  const context = useOutletContext();
  const directors = context?.directors || [];

  const director = directors.find((dir) => String(dir.id) === String(id));
  if (!director) return <h2>Director not found.</h2>;

  const movie = director.movies.find((m) => String(m.id) === String(movieId));
  if (!movie) return <h2>Movie not found.</h2>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>⏱️ Duration: {movie.time} minutes</p>
      <p>🎬 Genres: {movie.genres.join(", ")}</p>
    </div>
  );
}

export default MovieCard;
