export default function Movies({value: movies, onFilmClick}) {

  const {original_title, overview, release_date, vote_average, vote_count, poster_path, movieGenresList} = movies;

  return (
      <div>
        <div onClick={() => onFilmClick(movies)}>
          <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={`${original_title} poster`}/>
        </div>
        <div>
          <h2>{original_title}</h2>
          <h3>Genres: {movieGenresList.map(({name, id}) => <span key={id}> {name} </span>)} </h3>
          <span>Rating:{vote_average} (total vote: {vote_count})</span>
          <p>{overview}</p>
          <span>Release date:{release_date}</span>

        </div>
      </div>
  );
}