import React, {useEffect, useState} from "react";
import {moviesService} from "../../services";
import {useHistory, useParams} from "react-router-dom";
import GenreMovies from "./GenreMovies";

export default function GenresMovies() {

    const {id} = useParams();
    const [genreFilm, setGenreFilm] = useState([]);
    const history = useHistory();

    useEffect(() => {
        moviesService.getGenresMovie(id)
            .then(value => setGenreFilm(value.results))
    },[id,genreFilm]);

    const onFilmClick = (film) => {
        history.push(`/movies/${film.id}`)
    };

  return (
      <div className={'mainMovies'}>
          {
            genreFilm.map((movie) => <GenreMovies key={movie.id} results={movie} onFilmClick={onFilmClick}/>)
          }
      </div>
  );
}