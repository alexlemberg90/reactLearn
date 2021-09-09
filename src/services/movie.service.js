import {AXIOS} from "./axiosSet";
const baseURL = 'https://api.themoviedb.org/3/discover/movie?';
const KEY = 'api_key=a2b50c9bb2c18c72f8304c905e759395';

class MoviesService {
    async getMovies(){
        const { data } = await AXIOS.get('/discover/movie')
        return data
    }
    async getMovieDetails(movie_id){
        const { data } = await AXIOS.get(`/movie/${movie_id}`)
        return data
    }
    async getGenresMovie(genres_id){
        return fetch(`
${baseURL}${KEY}&language=en-US&sort_by=popularity.desc&with_genres=${genres_id}`)
            .then(value => value.json())
    }
    async getPages(pages){
        return fetch(
            `
${baseURL}${KEY}&language=en-US&sort_by=popularity.desc&page=${pages}`
        )
    }
}

export const moviesService = new MoviesService();