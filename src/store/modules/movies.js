import * as types from '../mutation-types';
import axios from 'axios';

const apiKey = 'e5dc19b4';

export default {
    state: {
        movies: [],
        movie: {}
    },
    getters: {
        getMovies(state) {
            return state.movies;
        },
        getMovie(state) {
            return state.movie;
        }
    },
    mutations: {
        [types.FETCH_MOVIES](state, { moviesList }) {
            state.movies = moviesList;
        },
        [types.FETCH_MOVIE](state, { movie }) {
            state.movie = movie;
        }
    },
    actions: {
        fetchMovies({ commit }, { search }) {
            axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${search}`)
                .then(data => {
                    const moviesList = data.data.Search;
                    commit('FETCH_MOVIES', { moviesList })
                })
                .catch(err => console.log(err))
        },
        fetchMovie({ commit }, { search }) {
            axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&i=${search}`)
                .then(data => {
                    const movie = data.data;
                    commit('FETCH_MOVIE', { movie })
                })
                .catch(err => console.log(err))
        }
    }
}
