import * as types from '../mutation-types';
import axios from 'axios';
import get from 'lodash.get';

const apiKey = 'e5dc19b4';

export default {
    namespaced: true,
    state(){
        return {
            movies: [],
            movie: {},
            initialized: false
        }
    } ,
    getters: {
        getMovies(state) {
            return state.movies;
        },
        getMovie(state) {
            return state.movie;
        }
    },
    mutations: {
        [types.FETCH_MOVIES](state, moviesList) {
            state.initialized = true;
            state.movies = moviesList;
        },
        [types.FETCH_MOVIE](state, movie) {
            state.movie = movie;
        }
    },
    actions: {
        fetchMovies({ commit }, search) {
            axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${search}`)
                .then(data => {
                    const moviesList = get(data, 'data.Search', []);
                    commit(types.FETCH_MOVIES, moviesList);
                })
                .catch(err => console.log(err))
        },
        fetchMovie({ commit }, search) {
            axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&i=${search}`)
                .then(data => {
                    const movie = get(data, 'data', {});
                    commit(types.FETCH_MOVIE, movie)
                })
                .catch(err => console.log(err))
        }
    }
}
