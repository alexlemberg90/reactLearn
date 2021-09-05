import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {moviesService} from "../../services";
import '../additionalСomponent/Star.css'

export default function Movie() {

  const [filmDetails, setFilmDetails] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    moviesService.getMovieDetails(id).then(value => setFilmDetails(value) )
  },[filmDetails]);

  return (
      ( filmDetails != null && <div>
        <div>
          <img src={`https://image.tmdb.org/t/p/w500${filmDetails.poster_path}`} alt={`${filmDetails.original_title} poster`}/>
        </div>
        <div>
          <h2>{filmDetails.original_title}</h2>
          <h3>Genres: {filmDetails.genres.map(({name, id}) => <span key={id}>{name} </span>)} </h3>
          <span>Rating:{filmDetails.vote_average} (total vote: {filmDetails.vote_count})</span>
          <p>{filmDetails.overview}</p>
          <span>Release date:{filmDetails.release_date}</span>
            <hr/>

        </div>
      </div> )
  )
}